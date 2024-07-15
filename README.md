A Full-Stack real estate web application built using MERN stack.

## Features

- User Authentication and State Persistance.
- View and save properties.
- List your own properties.
- Update your user profile, view listed and saved posts.
- Real-time Chat functionality. 
- Powerful Search/Query functionality. 

## Steps to run

1. Fork/Clone the repository.
2. Navigate to the project directory.
3. Create a .env file in the api folder with the following details:
```
DATABASE_URL="<your-mongdb-url>"
JWT_SECRET="<your-secret>"
CLIENT_URL=http://localhost:5173 (or) any other url
```
4. Then split the terminal, or use 2 separate terminals (1. Client side (frontend), 2. Server side(backend)):

**4.1 Client Side**
```
cd client
npm i
npm run dev
```

**4.2 Backend**
```
cd server
npm i
npm run dev
```

**Tech Stack**

Backend: JavaScript, Nodejs, Expressjs, Prisma(MongoDB).
Frontend: React, Vite, Sass.
