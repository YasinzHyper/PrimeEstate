<a id="readme-top"></a>

A Full-Stack real estate web application built using MERN stack.

<a href='https://github.com/MShawon/github-clone-count-badge'><img alt='GitHub Clones' src='https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/YasinzHyper/9f916e6d340f4764842736c8f748d120/raw/clone.json&logo=github'></a>

## Features

- **User Authentication and State Persistence:** Secure login and registration with persistent user sessions.
- **Property Viewing and Saving:** Browse and save your favorite properties for easy access.
- **Property Listing:** Easily list your own properties for sale or rent.
- **User Profile Management:** Update your profile and manage your listed and saved properties.
- **Real-time Chat:** Engage in instant messaging with property owners and potential buyers.
- **Advanced Search:** Utilize powerful search and query functionalities to find the perfect property. 



### Built With

<div>
  <p>Frontend (Client-Side) :</p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white">
</div>

<div>
  <p>Backend (Server-Side) :</p>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD">
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"> 
</div>

## Steps to run

1. Fork/Clone the repository.
2. Navigate to the project directory.
3. Create a .env file in the api folder with the following details:
```
DATABASE_URL="<your-mongdb-url>"
JWT_SECRET="<your-secret>"
CLIENT_URL=http://localhost:5173 (or) any other url
```
4. Then split the terminal into 3, or use 3 separate terminals (1. Client side (frontend), 2. Server side(backend), 3. Socket.io (real-time messaging)):

Run this in the client side terminal

**4.1 Client Side**
```
cd client
npm i
npm run dev
```

Run this in the server-side (api) terminal

**4.2 Backend**
```
cd server
npm i
npm run dev
```

Run this in the 3rd terminal (socket) terminal

**4.3 Real-time Messaging (Socket.io)**
```
cd socket
npm i
npm run dev
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the MIT License.

<p align="right"><a href="#readme-top">back to top</a></p>
