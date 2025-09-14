@echo off
cd /d "%~dp0"
npm run build
firebase deploy