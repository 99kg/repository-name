set /p date=Please input the date:

git add .

git commit -m "%date% daily update"

git push -u origin master

pause