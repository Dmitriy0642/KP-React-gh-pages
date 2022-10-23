import React from "react";
import Users from "./components/users";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/mainPage";
import Login from "./components/login";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/users/:userId?" component={Users}/>
                <Route path="/main" component={MainPage}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
        );
}

export default App;
