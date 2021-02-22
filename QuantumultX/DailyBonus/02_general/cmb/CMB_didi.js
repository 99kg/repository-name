/*
qx(tf 1.0.11(316)) 、 loon(tf 2.1.1(163))、 surge(tf 4.10.0(1807)) 及更新版本可用。
半自动提醒完成招行便民刮刮乐活动。
0 23 * * *  （挑一个玩手机的时间）
到时候点击通知即可跳转至招行便民刮刮乐界面，完成签到刮奖即可。

自用 by zZPiglet
*/

const $ = new compatibility()

!(async () => {
    const cmb_scratchers = "cmbmobilebank://cmbls/functionjump?action=gocorpno&corpno=003499&cmb_app_trans_parms_start=here&req=49&jumpfunc=dd8y&behavior_entryid=ZJZ008003&appflag=0&shorturl=https%3a%2f%2ft.cmbchina.com%2faArYn2%3freq%3d49%26jumpfunc%3ddd8y%26behavior_entryid%3dZJZ008003"
    $.notify("招商银行-滴滴签到抽奖", "", "点击跳转去签到刮奖啦", cmb_scratchers)
})().finally(() => $done())

function compatibility() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
        if (_isLoon) return $persistentStore.read(key)
    }
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
