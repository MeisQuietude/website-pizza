import React    from "react";
import Layout   from "./hoc/Layout/Layout";
import PizzaBox from "./containers/PizzaBox/PizzaBox";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <PizzaBox />
            </Layout>
        );
    }
}

export default App;
