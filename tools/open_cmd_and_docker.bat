@echo off
echo Starting Docker Desktop...
start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"

echo Waiting for Docker Engine to start...
set /a COUNT=0
:waitloop
docker info >nul 2>&1
if %errorlevel%==0 (
    echo Docker is running.
) else (
    set /a COUNT+=1
    if %COUNT% GEQ 60 (
        echo Docker did not start in 60 seconds. Interrupting.
        exit /b 1
    )
    timeout /t 1 >nul
    goto waitloop
)

echo Starting container...
docker start structural_calculators_app_di

echo Opening Windows Terminal with tabs...
wt -w 0 ^
nt -p "Command Prompt" -d "D:\Omat\github\structural-calculators-app\backend" --title "Backend" --tabColor "#005f87" ; ^
nt -p "Command Prompt" -d "D:\Omat\github\structural-calculators-app\backend" --title "Backend Tests" --tabColor "#5f0000" ; ^
nt -p "Command Prompt" -d "D:\Omat\github\structural-calculators-app\frontend" --title "Frontend" --tabColor "#007f5f" ; ^
nt -p "Command Prompt" --title "General" --tabColor "#444444"
