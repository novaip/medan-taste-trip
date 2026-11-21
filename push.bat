@echo off
echo ===========================================
echo   Auto-Push ke GitHub & Cloudflare Pages
echo ===========================================
echo.

git add .
set /p commit_msg="Masukkan catatan perubahan (tekan Enter untuk default 'update'): "
if "%commit_msg%"=="" set commit_msg=update konten landing page

git commit -m "%commit_msg%"
git push origin main

echo.
echo ===========================================
echo   Selesai! Cloudflare sedang men-deploy...
echo ===========================================
pause
