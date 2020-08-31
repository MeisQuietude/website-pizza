const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const logger = require("morgan");

const pizzasRouter = require("./routes/pizzas");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/pizzas", pizzasRouter);
app.use("/users", usersRouter);

app.use(cors());

// error handler
app.use(function ( err, req, res, next ) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: "error", message: err.message });
});

module.exports = app;
