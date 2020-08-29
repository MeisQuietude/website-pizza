const { GET, POST, PUT, DELETE } = require("./crud");
const { state } = require("./store");

module.exports = {
    state,
    GET,
    POST,
    PUT,
    DELETE,
};
