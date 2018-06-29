import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (

    <div>
        <Nav />
        <Router>
            <Switch>
                {/* switch ensures that at most, only 1 route will render */}
                <Route exact path="/" component={Books} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/books/:id" component={Detail} />
                {/* NoMatch becomes the default */}
                <Route component={NoMatch} />
            </Switch>
        </Router>
    </div>
);

export default App;
