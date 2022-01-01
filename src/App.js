import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/pages/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/pages/Login/Login";
import AdminRoute from "./routes/AdminRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AdminDashboard from "./components/pages/AdminDashboard/AdminDashboard";
import Packages from "./components/pages/Packages/Packages";
import UserDashboard from "./components/pages/UserDashBoard/UserDashboard";
import Checkout from "./components/pages/Checkout/Checkout";

function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/sign-up'>
                            <SignUp></SignUp>
                        </Route>
                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>
                        <PrivateRoute exact path='/packages'>
                            <Packages></Packages>
                        </PrivateRoute>
                        <PrivateRoute exact path='/checkout/:id'>
                            <Checkout></Checkout>
                        </PrivateRoute>
                        <PrivateRoute exact path='/user-dashboard'>
                            <UserDashboard></UserDashboard>
                        </PrivateRoute>
                        <AdminRoute exact path='/admin-dashboard'>
                            <AdminDashboard></AdminDashboard>
                        </AdminRoute>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
