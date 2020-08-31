const jwt = require("jsonwebtoken");
const SECRET = "secretjwtkey";

const withAuth = function ( req, res, next ) {
    const token = req.cookies.token;

    if ( token ) {
        jwt.verify(token, SECRET, function ( err, decoded ) {
            if ( err ) {
                return next(err);
            } else {
                req.login = decoded.login;
                return next();
            }
        });
    } else {
        return next();
    }
};

module.exports = {
    withAuth,
    SECRET,
};
