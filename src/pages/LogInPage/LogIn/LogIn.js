import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginimg from "../../../images/login.png";

const LogIn = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } =
        useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        log in
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basi"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button
                            sx={{ width: "75%", m: 1 }}
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register"
                        >
                            <Button variant="text">
                                New User? Please Register
                            </Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && (
                            <Alert severity="success">
                                Login successfully!
                            </Alert>
                        )}
                        {authError && (
                            <Alert severity="error">{authError}</Alert>
                        )}
                        <p>------------------------</p>
                        <Button
                            onClick={handleGoogleSignIn}
                            variant="contained"
                        >
                            Google Sign In
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginimg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default LogIn;
