const { state } = require("./store");

const GET = ( key ) => {
    return state[key];
};

const POST = ( key, value ) => {
    state[key] = value;
    return state[key];
};

const PUT = ( model, key, value ) => {
    if ( Array.isArray(state[model][key]) ) {
        state[model][key].push(value);
        return value;
    }

    // it is an object
    state[model][key] = value;
    return value;
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
