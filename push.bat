set date=%date:~0,4%%date:~5,2%%date:~8,2%

git add .

git commit -m "%date% daily update"

git push -u origin master

pause