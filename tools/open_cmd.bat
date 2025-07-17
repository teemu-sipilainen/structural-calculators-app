@echo off

echo Opening Windows Terminal with tabs...
wt -w 0 ^
nt -p "Command Prompt" -d "D:\Omat\github\structural-calculators-app\frontend" --title "Frontend" --tabColor "#007f5f" ; ^
nt -p "Command Prompt" -d "D:\Omat\github\structural-calculators-app\backend" --title "Backend" --tabColor "#005f87" ; ^
nt -p "Command Prompt" -d "D:\Omat\github\structural-calculators-app\backend" --title "Backend Tests" --tabColor "#5f0000" ; ^
nt -p "Command Prompt" --title "General" --tabColor "#444444"
