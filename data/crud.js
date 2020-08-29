const { state } = require("./store");

const GET = ( key ) => {
    return state[key];
};

const POST = ( key, value ) => {
    state[key] = value;
    return state[key];
};

const PUT = ( key, value ) => {
    if ( Array.isArray(state[key]) ) {
        state[key].push(value);
        return value;
    }

    return null;
};

const DELETE = ( key, index ) => {
    if ( Array.isArray(state[key]) ) {
        state[key] = state[key].splice(index, 1);
        return state[key];
    }

    return null;
};

module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
};
