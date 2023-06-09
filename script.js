const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// const {dirStructure, files} = configs.handlebarsConfig;
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes); 

// dirStructure.forEach(elem => createDir(elem));
// files.forEach(elem => createFile(elem))

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on http://localhost:${PORT}`)
    })
})




// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in
// WHEN I choose to sign up
// THEN I am prompted to create a username and password
// WHEN I click on the sign-up button
// THEN my user credentials are saved and I am logged into the site
// WHEN I revisit the site at a later time and choose to sign in
// THEN I am prompted to enter my username and password
// WHEN I am signed in to the site
// THEN I see navigation links for the homepage, the dashboard, and the option to log out
// WHEN I click on the homepage option in the navigation
// THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
// WHEN I click on an existing blog post
// THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
// WHEN I enter a comment and click on the submit button while signed in
// THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
// WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
// WHEN I click on the button to add a new blog post
// THEN I am prompted to enter both a title and contents for my blog post
// WHEN I click on the button to create a new blog post
// THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
// WHEN I click on one of my existing posts in the dashboard
// THEN I am able to delete or update my post and taken back to an updated dashboard
// WHEN I click on the logout option in the navigation
// THEN I am signed out of the site
// WHEN I am idle on the site for more than a set time
// THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments