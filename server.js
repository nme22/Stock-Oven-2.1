const express = require("express");
const routes = require("./routes");
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Serve up static assets (usually on heroku)

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the mySQL
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

// Start the API server
// app.listen(PORT, function () {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });