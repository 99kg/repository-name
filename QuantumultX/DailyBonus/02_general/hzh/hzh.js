const $ = new API("hzh", true);
const ERR = MYERR();
$.body = $.read("evil_hzhBody");
$.fp = $.read("evil_hzhfp");
$.prizeid = [];
$.getprize = "";

!(async () => {
  if (typeof $request != "undefined") {
    getCookie();
    return;
  }
  if ($.body != undefined && $.fp != undefined) {
    await checkin();
    await checkinfo();
    for (var i = 1; i < 4; i++) {
      await checkprize(i);
    }
    if ($.prizeid.length != 0) {
      for (var j = 0; j < $.prizeid.length; j++) {
        await getprize($.prizeid[j]);
      }
    }
    showmsg();
  } else {
    $.notify("华住会", "", "❌ 请先获取Cookie");
  }
})()
  .catch((err) => {
    if (err instanceof ERR.ParseError) {
      $.notify("华住会", "❌ 解析数据出现错误", err.message);
    } else if (err instanceof ERR.EventError) {
      $.notify("华住会", "❌ 请尝试重新获取Cookie", err.message);
    } else {
      $.notify(
        "华住会",
        "❌ 出现错误",
        JSON.stringify(err, Object.getOwnPropertyNames(err))
      );
    }
  })
  .finally(() => $.done());

function checkin() {
  var date = new Date();
  var strDate = date.getDate();
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var bodycontent = $.body.replace(/day=\d+/, `day=${strDate}`);
  const url = `https://newactivity.huazhu.com/v1/pointStore/signIn`;
  const headers = {
    Origin: `https://campaign.huazhu.com`,
    "Accept-Encoding": `gzip, deflate, br`,
    Connection: `keep-alive`,
    "Content-Type": `application/x-www-form-urlencoded`,
    fp: $.fp,
    Host: `newactivity.huazhu.com`,
    Accept: `application/json, text/plain, */*`,
    "User-Agent": `HUAZHU/ios/iPhone12,1/14.6/8.0.5/HUAZHU/ios/iPhone12,1/14.6/8.0.5/HUAZHU/ios/iPhone12,1/14.6/8.0.5/HUAZHU/ios/iPhone12,1/14.6/8.0.5/Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
    Referer: `https://campaign.huazhu.com/pointsShop/`,
    "Accept-Language": `zh-cn`,
  };
  const myRequest = {
    url: url,
    headers: headers,
    body: bodycontent,
  };
  return $.http.post(myRequest).then((response) => {
    if (response.statusCode == 200) {
      if (JSON.parse(response.body).msg == "fail") {
        throw new ERR.EventError("服务器返回数据错误，请重新获取Cookie");
      } else {
        $.data = JSON.parse(response.body).data;
      }
    } else {
      $.error(JSON.stringify(response));
      throw new ERR.ParseError("签到错误，请检查日志，稍后再试");
    }
  });
}

function checkinfo() {
  var sk = $.body.replace(/.*?sk\=/, "");
  const url2 = `https://newactivity.huazhu.com/v1/pointStore/singInIndex?sk=${sk}`;
  const headers2 = {
    Origin: `https://campaign.huazhu.com`,
    Accept: `application/json, text/plain, */*`,
    Connection: `keep-alive`,
    "Content-Type": `application/x-www-form-urlencoded`,
    fp: $.fp,
    Host: `newactivity.huazhu.com`,
    "User-Agent": `HUAZHU/ios/iPhone12,1/14.6/8.0.5/HUAZHU/ios/iPhone12,1/14.6/8.0.5/HUAZHU/ios/iPhone12,1/14.6/8.0.5/HUAZHU/ios/iPhone12,1/14.6/8.0.5/Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
    Referer: `https://campaign.huazhu.com/pointsShop/`,
    "Accept-Language": `zh-cn`,
    "Accept-Encoding": `gzip, deflate, br`,
  };
  const myRequest2 = {
    url: url2,
    headers: headers2,
  };
  return $.http.get(myRequest2).then((response) => {
    if (response.statusCode == 200) {
      if (JSON.parse(response.body).msg == "fail") {
        throw new ERR.EventError("服务器返回数据错误，请重新获取Cookie");
      } else {
        $.datainfo = JSON.parse(response.body).data;
      }
    } else {
      $.error(JSON.stringify(response));
      throw new ERR.ParseError("查询签到错误，请检查日志，稍后再试");
    }
  });
}

function checkprize(num) {
  var sk = $.body.replace(/.*?sk\=/, "");
  const url3 = `https://newactivity.huazhu.com/v1/pointStore/taskInfo?taskId=${num}&sk=${sk}`;
  const headers3 = {
    Origin: `https://campaign.huazhu.com`,
    Accept: `application/json, text/plain, */*`,
    Connection: `keep-alive`,
    "Content-Type": `application/x-www-form-urlencoded`,
    fp: $.fp,
    Host: `newactivity.huazhu.com`,
    "User-Agent": `HUAZHU/ios/iPhone12,1/14.6/8.0.60/Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
    Referer: `https://campaign.huazhu.com/pointsShop/`,
    "Accept-Language": `zh-cn`,
    "Accept-Encoding": `gzip, deflate, br`,
  };
  const myRequest3 = {
    url: url3,
    headers: headers3,
  };
  return $.http.get(myRequest3).then((response) => {
    if (response.statusCode == 200) {
      if (JSON.parse(response.body).code == 200) {
        var list = JSON.parse(response.body).data.taskPrizes;
        var info = JSON.parse(response.body).data.buttonInfo;
        var name = "";
        for (var i = 0; i < list.length; i++) {
          name = name + list[i].prizeInfo + " ";
        }
        if (info != null && info == "已领取") {
          $.log(info + "：" + name);
        } else if (info != null && info == "去完成") {
          $.log("请继续签到以获得：" + name);
        } else if (info != null && info == "立即领取") {
          var id = JSON.parse(response.body).data.taskRecordId;
          $.prizeid.push(id);
          $.log("准备尝试领取：" + name);
        } else {
          $.log(JSON.parse(response.body).data);
        }
      } else {
        $.log("查询奖励失败，原因：" + JSON.parse(response.body).msg);
        return;
      }
    } else {
      $.error(JSON.stringify(response));
      throw new ERR.ParseError("查询奖励错误，请检查日志，稍后再试");
    }
  });
}

async function getprize(id) {
  var sk = $.body.replace(/.*?sk\=/, "");
  const url4 = `https://newactivity.huazhu.com/v1/pointStore/sendPrize?taskRecordId=${id}&sk=${sk}`;
  const headers4 = {
    Origin: `https://campaign.huazhu.com`,
    Accept: `application/json, text/plain, */*`,
    Connection: `keep-alive`,
    "Content-Type": `application/x-www-form-urlencoded`,
    fp: $.fp,
    Host: `newactivity.huazhu.com`,
    "User-Agent": `HUAZHU/ios/iPhone12,1/14.6/8.0.5/Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
    Referer: `https://campaign.huazhu.com/pointsShop/`,
    "Accept-Language": `zh-cn`,
    "Accept-Encoding": `gzip, deflate, br`,
  };
  const headers5 = {
    Origin: `https://campaign.huazhu.com`,
    "Access-Control-Request-Headers": `fp`,
    Connection: `keep-alive`,
    Accept: `*/*`,
    Referer: `https://campaign.huazhu.com/`,
    Host: `newactivity.huazhu.com`,
    "User-Agent": `HUAZHU/ios/iPhone12,1/14.6/8.0.60/HUAZHU/ios/iPhone12,1/14.6/8.0.60/Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
    "Accept-Language": `zh-cn`,
    "Accept-Encoding": `gzip, deflate, br`,
    "Access-Control-Request-Method": `GET`,
  };
  const myRequest4 = {
    url: url4,
    headers: headers4,
  };
  const myRequest5 = {
    url: url4,
    headers: headers5,
  };
  await $.http.options(myRequest5).then((response) => {
    $.log(response);
    $.log("尝试领取完成");
  });
  return $.http.get(myRequest4).then((response) => {
    var body = JSON.parse(response.body);
    if (response.statusCode == 200) {
      if (body.success == true) {
        var prize = body.data;
        for (var i = 0; i < prize.length; i++) {
          $.getprize = $.getprize + prize[i].prizeInfo;
        }
      }
    } else {
      $.error(JSON.stringify(response));
      throw new ERR.ParseError("领取奖励错误，请检查日志，稍后再试");
    }
  });
}

function showmsg() {
  var count = $.datainfo.signInCount;
  if ($.data.isSign != null && $.data.isSign == true) {
    $.notify("华住会", "今日已签到🎉", `累计签到${count}天！`);
  } else {
    point = $.data.point;
    if ($.getprize != "") {
      $.notify(
        "华住会",
        "签到成功🎉",
        `获得${point}积分，累计签到${count}天！获得奖励：${$.getprize}`
      );
    } else {
      $.notify(
        "华住会",
        "签到成功🎉",
        `获得${point}积分，累计签到${count}天！`
      );
    }
  }
}

function MYERR() {
  class ParseError extends Error {
    constructor(message) {
      super(message);
      this.name = "ParseError";
    }
  }
  class EventError extends Error {
    constructor(message) {
      super(message);
      this.name = "EventError";
    }
  }
  return {
    ParseError,
    EventError,
  };
}

function getCookie() {
    $.write(null, "evil_hzhBody");
    $.write(null, "evil_hzhfp");
    $.notify("华住会", "", "清除Cookie成功🎉");
}

/**
 * OpenAPI
 * @author: Peng-YM
 * https://github.com/Peng-YM/QuanX/blob/master/Tools/OpenAPI/README.md
 */
function ENV() {
  const isQX = typeof $task !== "undefined";
  const isLoon = typeof $loon !== "undefined";
  const isSurge = typeof $httpClient !== "undefined" && !isLoon;
  const isJSBox = typeof require == "function" && typeof $jsbox != "undefined";
  const isNode = typeof require == "function" && !isJSBox;
  const isRequest = typeof $request !== "undefined";
  const isScriptable = typeof importModule !== "undefined";
  return {
    isQX,
    isLoon,
    isSurge,
    isNode,
    isJSBox,
    isRequest,
    isScriptable,
  };
}

function HTTP(
  defaultOptions = {
    baseURL: "",
  }
) {
  const { isQX, isLoon, isSurge, isScriptable, isNode } = ENV();
  const methods = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"];
  const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  function send(method, options) {
    options =
      typeof options === "string"
        ? {
            url: options,
          }
        : options;
    const baseURL = defaultOptions.baseURL;
    if (baseURL && !URL_REGEX.test(options.url || "")) {
      options.url = baseURL ? baseURL + options.url : options.url;
    }
    if (options.body && options.headers && !options.headers["Content-Type"]) {
      options.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    options = {
      ...defaultOptions,
      ...options,
    };
    const timeout = options.timeout;
    const events = {
      ...{
        onRequest: () => {},
        onResponse: (resp) => resp,
        onTimeout: () => {},
      },
      ...options.events,
    };

    events.onRequest(method, options);

    let worker;
    if (isQX) {
      worker = $task.fetch({
        method,
        ...options,
      });
    } else if (isLoon || isSurge || isNode) {
      worker = new Promise((resolve, reject) => {
        const request = isNode ? require("request") : $httpClient;
        request[method.toLowerCase()](options, (err, response, body) => {
          if (err) reject(err);
          else
            resolve({
              statusCode: response.status || response.statusCode,
              headers: response.headers,
              body,
            });
        });
      });
    } else if (isScriptable) {
      const request = new Request(options.url);
      request.method = method;
      request.headers = options.headers;
      request.body = options.body;
      worker = new Promise((resolve, reject) => {
        request
          .loadString()
          .then((body) => {
            resolve({
              statusCode: request.response.statusCode,
              headers: request.response.headers,
              body,
            });
          })
          .catch((err) => reject(err));
      });
    }

    let timeoutid;
    const timer = timeout
      ? new Promise((_, reject) => {
          timeoutid = setTimeout(() => {
            events.onTimeout();
            return reject(
              `${method} URL: ${options.url} exceeds the timeout ${timeout} ms`
            );
          }, timeout);
        })
      : null;

    return (
      timer
        ? Promise.race([timer, worker]).then((res) => {
            clearTimeout(timeoutid);
            return res;
          })
        : worker
    ).then((resp) => events.onResponse(resp));
  }

  const http = {};
  methods.forEach(
    (method) =>
      (http[method.toLowerCase()] = (options) => send(method, options))
  );
  return http;
}

function API(name = "untitled", debug = false) {
  const { isQX, isLoon, isSurge, isNode, isJSBox, isScriptable } = ENV();
  return new (class {
    constructor(name, debug) {
      this.name = name;
      this.debug = debug;

      this.http = HTTP();
      this.env = ENV();

      this.node = (() => {
        if (isNode) {
          const fs = require("fs");

          return {
            fs,
          };
        } else {
          return null;
        }
      })();
      this.initCache();

      const delay = (t, v) =>
        new Promise(function (resolve) {
          setTimeout(resolve.bind(null, v), t);
        });

      Promise.prototype.delay = function (t) {
        return this.then(function (v) {
          return delay(t, v);
        });
      };
    }

    // persistence
    // initialize cache
    initCache() {
      if (isQX) this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}");
      if (isLoon || isSurge)
        this.cache = JSON.parse($persistentStore.read(this.name) || "{}");

      if (isNode) {
        // create a json for root cache
        let fpath = "root.json";
        if (!this.node.fs.existsSync(fpath)) {
          this.node.fs.writeFileSync(
            fpath,
            JSON.stringify({}),
            {
              flag: "wx",
            },
            (err) => console.log(err)
          );
        }
        this.root = {};

        // create a json file with the given name if not exists
        fpath = `${this.name}.json`;
        if (!this.node.fs.existsSync(fpath)) {
          this.node.fs.writeFileSync(
            fpath,
            JSON.stringify({}),
            {
              flag: "wx",
            },
            (err) => console.log(err)
          );
          this.cache = {};
        } else {
          this.cache = JSON.parse(
            this.node.fs.readFileSync(`${this.name}.json`)
          );
        }
      }
    }

    // store cache
    persistCache() {
      const data = JSON.stringify(this.cache, null, 2);
      if (isQX) $prefs.setValueForKey(data, this.name);
      if (isLoon || isSurge) $persistentStore.write(data, this.name);
      if (isNode) {
        this.node.fs.writeFileSync(
          `${this.name}.json`,
          data,
          {
            flag: "w",
          },
          (err) => console.log(err)
        );
        this.node.fs.writeFileSync(
          "root.json",
          JSON.stringify(this.root, null, 2),
          {
            flag: "w",
          },
          (err) => console.log(err)
        );
      }
    }

    write(data, key) {
      this.log(`SET ${key}`);
      if (key.indexOf("#") !== -1) {
        key = key.substr(1);
        if (isSurge || isLoon) {
          return $persistentStore.write(data, key);
        }
        if (isQX) {
          return $prefs.setValueForKey(data, key);
        }
        if (isNode) {
          this.root[key] = data;
        }
      } else {
        this.cache[key] = data;
      }
      this.persistCache();
    }

    read(key) {
      this.log(`READ ${key}`);
      if (key.indexOf("#") !== -1) {
        key = key.substr(1);
        if (isSurge || isLoon) {
          return $persistentStore.read(key);
        }
        if (isQX) {
          return $prefs.valueForKey(key);
        }
        if (isNode) {
          return this.root[key];
        }
      } else {
        return this.cache[key];
      }
    }

    delete(key) {
      this.log(`DELETE ${key}`);
      if (key.indexOf("#") !== -1) {
        key = key.substr(1);
        if (isSurge || isLoon) {
          return $persistentStore.write(null, key);
        }
        if (isQX) {
          return $prefs.removeValueForKey(key);
        }
        if (isNode) {
          delete this.root[key];
        }
      } else {
        delete this.cache[key];
      }
      this.persistCache();
    }

    // notification
    notify(title, subtitle = "", content = "", options = {}) {
      const openURL = options["open-url"];
      const mediaURL = options["media-url"];

      if (isQX) $notify(title, subtitle, content, options);
      if (isSurge) {
        $notification.post(
          title,
          subtitle,
          content + `${mediaURL ? "\n多媒体:" + mediaURL : ""}`,
          {
            url: openURL,
          }
        );
      }
      if (isLoon) {
        let opts = {};
        if (openURL) opts["openUrl"] = openURL;
        if (mediaURL) opts["mediaUrl"] = mediaURL;
        if (JSON.stringify(opts) === "{}") {
          $notification.post(title, subtitle, content);
        } else {
          $notification.post(title, subtitle, content, opts);
        }
      }
      if (isNode || isScriptable) {
        const content_ =
          content +
          (openURL ? `\n点击跳转: ${openURL}` : "") +
          (mediaURL ? `\n多媒体: ${mediaURL}` : "");
        if (isJSBox) {
          const push = require("push");
          push.schedule({
            title: title,
            body: (subtitle ? subtitle + "\n" : "") + content_,
          });
        } else {
          console.log(`${title}\n${subtitle}\n${content_}\n\n`);
        }
      }
    }

    // other helper functions
    log(msg) {
      if (this.debug) console.log(`[${this.name}] LOG: ${this.stringify(msg)}`);
    }

    info(msg) {
      console.log(`[${this.name}] INFO: ${this.stringify(msg)}`);
    }

    error(msg) {
      console.log(`[${this.name}] ERROR: ${this.stringify(msg)}`);
    }

    wait(millisec) {
      return new Promise((resolve) => setTimeout(resolve, millisec));
    }

    done(value = {}) {
      if (isQX || isLoon || isSurge) {
        $done(value);
      } else if (isNode && !isJSBox) {
        if (typeof $context !== "undefined") {
          $context.headers = value.headers;
          $context.statusCode = value.statusCode;
          $context.body = value.body;
        }
      }
    }

    stringify(obj_or_str) {
      if (typeof obj_or_str === "string" || obj_or_str instanceof String)
        return obj_or_str;
      else
        try {
          return JSON.stringify(obj_or_str, null, 2);
        } catch (err) {
          return "[object Object]";
        }
    }
  })(name, debug);
}