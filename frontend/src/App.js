import React    from "react";
import Layout   from "./hoc/Layout/Layout";
import PizzaBox from "./containers/PizzaBox/PizzaBox";

class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <PizzaBox />
                </Layout>
            </div>
        );
    }
}

export default App;
