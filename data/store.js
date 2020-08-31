const initialState = {
    pizzas: [
        {
            key: "pepperoni",
            title: "Pepperoni",
            description: "American classic with spicy pepperoni, Mozzarella and signature tomato sauce",
            price: 13.99,
        },
        {
            key: "10cheeses",
            title: "10 Cheeses",
            description: "Even more cheeses! Mozzarella, classic chillegini, soft young cheese, smoked Italian cheese mix, blue cheese, Reggianito, Cheddar with Parmegiano and oregano sauce",
            price: 9.99,
        },
        {
            key: "chickenbbq",
            title: "Chicken BBQ",
            description: "Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion",
            price: 8.99,
        },
        {
            key: "4cheeses",
            title: "Four cheeses",
            description: "Traditional blend of cheeses: Mozzarella, soft fresh cheese, blue cheese, Reggianito with signature tomato sauce and spicy oregano",
            price: 10.99,
        },
        {
            key: "meat",
            title: "Meat",
            description: "Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce",
            price: 9.99,
        },
        {
            key: "mexican",
            title: "Mexican",
            description: "Spicy pizza with chicken fillet, tomato sauce, Mozzarella, mushrooms, onions, tomatoes, sweet green pepper and jalapeno pepper",
            price: 9.99,
        },
        {
            key: "hawaiian",
            title: "Hawaiian",
            description: "Tropical classic with flavorful ham, tomato sauce and Mozzarella combined with pineapple bits",
            price: 11.99,
        },
        {
            key: "favcarbonara",
            title: "Favorite Carbonara",
            description: "Classic favorite recipe: crispy bacon, cream cheese, juicy tomatoes, onions, Mozzarella and Italian herbs blend",
            price: 12.99,
        },
    ],

    users: {
        // login: { password, cart }
    },
};

const storeInMemory = initialState;

module.exports = {
    state: storeInMemory,
};
