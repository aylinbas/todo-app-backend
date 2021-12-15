<p align="center">
    <h3 align="center">Todo App Backend with JavaScript, NodeJS</h3>
    <br />
        <p align="center">
        <a href="https://prefab-mountain-335021.uc.r.appspot.com/">View Demo Google Cloud🚀</a>
    </p>
</p>


<hr>

### Built With
- [JavaScript](https://www.javascript.com/)
- [NodeJs](https://nodejs.org/en/)
- [Redis](https://redis.io/)
- [Heroku](https://dashboard.heroku.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/aylinbas/todo-app-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run command

   ```sh
   npm start
   ```
   
   ### About
   
The project is a basic backend project developed with NodeJs.

It has been tested that if a post request is made in the project, the response is 200, the content of the returned response is json, the response has a todoId and all necessary parameters are found in the post request.

After this stage, the project is dockerized.

In the project, the data is kept on the redis data structure server published on heroku. Table plus was used to control the stored data.

Finally, the project was deployed with google cloud.
