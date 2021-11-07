import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";

const appoinmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: "rgba(45,58,74,.7)",
    backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
    return (
        <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        src={doctor}
                        style={{ width: 400, marginTop: "-110px" }}
                        alt=""
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        textAlign: "left",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ mb: 5 }}
                            style={{
                                color: "#18F8EA",
                            }}
                        >
                            Appoinment
                        </Typography>
                        <Typography variant="h4">
                            Make an Appoinment Today
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ my: 5 }}
                            style={{
                                color: "white",
                                fontSize: 14,
                                fontWeight: 300,
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse sapiente nostrum numquam provident cumque
                            velit accusamus voluptates voluptatibus, eligendi
                            quaerat.
                        </Typography>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#18F8EA",
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
