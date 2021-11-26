set date=%date:~0,4%%date:~5,2%%date:~8,2%

git add .

git commit -m "%date% daily update"

git remote set-url origin https://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@github.com/99kg/repository-name.git

git push -u origin master

pause