import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home/Home";
import Appointment from "./pages/AppointmentPage/Appointment/Appointment";
import LogIn from "./pages/LogInPage/LogIn/LogIn";
import Register from "./pages/LogInPage/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/LogInPage/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/DashboardPage/Dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <PrivateRoute path="/appointment">
                            <Appointment></Appointment>
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard">
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                        <Route path="/login">
                            <LogIn></LogIn>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
