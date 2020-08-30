const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const pizzasRouter = require("./routes/pizzas");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
