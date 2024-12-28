Prettier configuration setting option [https://prettier.io/docs/en/configuration.html] <br>

Step 1 Open terminal (powershell)  <br>
Type:  cd .\frontend\nodejs_starter_template\ <br>
Type:  npm install <br>
Type:  cd src <br>
Type:  npm run dev <br>

Step 2 Open another terminal (powershell) <br>
Type:  cd .\backend <br>
Type:  npm install <br>
Type:  cd src <br>
Type:  npm run dev <br>

Make a file named .env in backend folder (Replace username and password) <br> <br>
PORT=8000 <br>
MONGODB_URI=mongodb+srv://username:password@cluster0.vbpxk.mongodb.net <br>
CORS_ORIGIN=http://localhost:5173 <br>
ACCESS_TOKEN_SECRET=asdefghjkl <br>
ACCESS_TOKEN_EXPIRY=1d <br>
REFRESH_TOKEN_SECRET=qwwertyuiop <br>
REFRESH_TOKEN_EXPIRY=10d <br>


Open browser and type http://localhost:5173/ <br>
Open postman and GET -> http://localhost:8000/api/v1/users/test  <br>
