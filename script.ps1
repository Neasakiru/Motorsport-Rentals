# Navigate to client folder and run 'npm run dev'
cd "C:\Users\Aleksander\Desktop\Praca dyplomowa\SpeedPsychos\client"
Start-Process "npm" -ArgumentList "run dev" -NoNewWindow

# Wait a few seconds to ensure client is running
Start-Sleep -Seconds 5

# Navigate to server folder and run 'npm start'
cd "C:\Users\Aleksander\Desktop\Praca dyplomowa\SpeedPsychos\server"
Start-Process "npm" -ArgumentList "start" -NoNewWindow