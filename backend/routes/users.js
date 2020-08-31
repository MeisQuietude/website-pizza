const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../../data");
const { withAuth, SECRET } = require("../middlewares/auth");

const router = express.Router();

/* POST users listing. */
router.post("/signupin", withAuth, function ( req, res, next ) {
    const { login, password, cart } = req.body;
    const safeCart = cart || {};

    if ( req.login && req.login === login ) {
        const user = db.GET("users")[login];

        const data = {
            user: {
                ...user,
                password: null,
            },
            cart: user && user.cart || safeCart,
        };

        return res.json(data);
    }

    if ( !login || !password ) {
        return res.status(304).json({ error: "error", message: "the login or password has not provided" });
    }

    const users = db.GET("users");
    let user = users[login];

    if ( user && user.password !== password ) {
        return res.status(304).json({ error: "error", message: "the login or password has not provided" });
    }

    if ( !user ) {
        user = db.PUT("users", login, {
            login,
            password,
            cart: safeCart || {},
        });
    }

    const restrictUser = {
        ...user,
        password: null,
    };

    const token = jwt.sign({ login }, SECRET, { expiresIn: "1h" });
    res.cookie("token", token);

    const data = {
        user: restrictUser,
        cart: restrictUser.cart,
    };

    res.json({ data });
});

router.post("/token", withAuth, function ( req, res, next ) {
    let data = {};

    if ( req.login ) {
        const user = db.GET("users")[req.login];
        if ( user ) {
            data = {
                user: {
                    ...user,
                    login: req.login,
                },
                cart: user.cart,
            };
        }
    }

    return res.json(data);
});

router.post("/update-cart", withAuth, function ( req, res, next ) {
    if ( !req.login ) {
        return res.end();
    }

    const { cart } = req.body;
    let user = db.GET("users")[req.login];

    user = {
        ...user,
        cart,
    };

    user = db.PUT("users", req.login, user);

    const data = {
        user,
    };

    return res.json(data);
});

module.exports = router;
