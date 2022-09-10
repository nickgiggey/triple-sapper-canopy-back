# Hello and welcome to Einstein
<img width="2038" alt="Screen Shot" src="">

Here you will find...

## Getting Started/Installation Instructions:
### `Code`

Follow these links for the front-end:
[Website Link](), 
[Github Link]()</br>
and these links are for the back-end:
[API Link](http://localhost:1337), 
[Github Link]()</br> On each page, click on the green `Code` button and copy the link under the SSH tab.

### `git clone`

You will need two terminals to run both the back-end and front-end.

Within your front-end folder terminal, enter 'git clone' followed by the link you copied and then press 'enter'.

Within your back-end folder terminal, enter 'git clone' followed by the link you copied and then press 'enter'.

### Install Dependencies:

In your terminal, you will need to install the following dependencies for the front-end:

- `npm install`

In the other terminal, you will need to install the following dependencies for the back-end:

- `npm install`
- `npm i nodemon`
- `touch .env .gitignore`

For the Back end, fill in the ".env" file with text reading "DATABASE_URL=YOUR_URL_HERE" and replace the "YOUR_URL_HERE" part with a link to a mongodb url of your own.

### `npm start and nodemon`

Next you will need to run the front-end in your terminal by using the `npm start` command. 
Runs the app in the development mode.

To run the back-end, in your terminal use the `nodemon` command. 
Runs the app in the development mode.

### Technologies Used:

- React
- React Router 
- Heroku
- Axios
- Netlify
- Express
- MongoDB/Mongoose
- nodemon
- node.js

## Features and Description:

- This application...

## Contribution Guidelines:

If you would like to add any contributes, simply 'fork' the project on the Github page by clicking on the `fork` link in the upper right. From there, follow the steps above starting with copying the `code` link. Please feel free to identify any bugs, propose improvements, and if you have any additional questions or recommendations, please feel free to make an issue request to either github repository.

### Credits: ###

- Nick Giggey [Github Link](https://github.com/nickgiggey)

## API Endpoints

- GET: api/rooms
- Get: api/emc2
- GET: api/rooms/:id
- Get: api/emc2/:id
- POST: api/emc2
- PATCH: api/emc2/:id
- PATCH: api/rooms/:id
- Delete: api/emc2/:id


_To see our deployed backend API, click [here](http://localhost:1337/api/rooms)_