Prettier configuration setting option [https://prettier.io/docs/en/configuration.html]

Step 1 Open terminal (powershell) 
Type:  cd .\frontend\nodejs_starter_template\
Type:  npm install
Type:  cd src
Type:  npm run dev

Step 2 Open another terminal (powershell)
Type:  cd .\backend
Type:  npm install
Type:  cd src
Type:  npm run dev

Make a file named .env in backend folder (Replace username and password)
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster0.vbpxk.mongodb.net
CORS_ORIGIN=http://localhost:5173
ACCESS_TOKEN_SECRET=asdefghjkl
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=qwwertyuiop
REFRESH_TOKEN_EXPIRY=10d


Open browser and type http://localhost:5173/
Open postman and GET -> http://localhost:8000/api/v1/users/test 
