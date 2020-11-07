import React from "react";
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

class App extends React.Component {
    render() {
        return (
            <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/projects">Projects</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/projects">
                <ProjectsPage />
            </Route>
            <Route path="/contact">
                <ContactPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
            </Switch>
            </div>
        );
    }
}

export default App;