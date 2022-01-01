import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/pages/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/pages/Login/Login";
import AdminRoute from "./routes/AdminRoute";
import AdminDashboard from "./components/pages/AdminDashboard/AdminDashboard";

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
                        <AdminRoute exact path='/dashboard'>
                            <AdminDashboard></AdminDashboard>
                        </AdminRoute>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
