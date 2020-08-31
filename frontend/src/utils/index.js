export const updateObject = ( oldObject, updatedProperties ) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

export const deleteCookie = () => {
    document.cookie.split(";").forEach(function ( c ) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
};
