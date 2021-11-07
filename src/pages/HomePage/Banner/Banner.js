import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container } from "@mui/material";

import chair from "../../../images/chair.png";
import chairbg from "../../../images/bg.png";
import { Box } from "@mui/system";

const bannerBg = {
    background: `url(${chairbg})`,
};

const varticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400,
};

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    style={{ ...varticalCenter, textAlign: "left" }}
                    xs={12}
                    md={6}
                >
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br /> starts here
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                my: 5,
                                fontSize: 14,
                                fontWeight: 300,
                                color: "gray",
                            }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequatur, facere molestias. Voluptate illum
                            vel magni quisquam. Eligendi consequuntur saepe
                            mollitia?
                        </Typography>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#18F8EA",
                            }}
                        >
                            Get Appoinment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={varticalCenter}>
                    <img style={{ width: "350px" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
