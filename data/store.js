const initialState = {
    pizzas: [
        {
            key: "pepperoni",
            title: "Pepperoni",
            description: "The most delicious pizza in the world",
        },
        {
            key: "10cheeses",
            title: "10 Cheeses",
            description: "Even more cheeses! Mozzarella, classic chillegini, soft young cheese, smoked Italian cheese mix, blue cheese, Reggianito, Cheddar with Parmegiano and oregano sauce",
        },
    ],
};

const storeInMemory = initialState;

module.exports = {
    state: storeInMemory,
};
