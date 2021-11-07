import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
    {
        id: 1,
        name: "arif",
        time: "06.00 AM - 06.00 PM",
        space: 5,
    },
    {
        id: 2,
        name: "khan",
        time: "06.00 AM - 06.00 PM",
        space: 4,
    },
    {
        id: 3,
        name: "mazharul",
        time: "06.00 AM - 06.00 PM",
        space: 12,
    },
    {
        id: 4,
        name: "islam",
        time: "06.00 AM - 06.00 PM",
        space: 9,
    },
    {
        id: 5,
        name: "mamun",
        time: "06.00 AM - 06.00 PM",
        space: 8,
    },
    {
        id: 6,
        name: "imrul",
        time: "06.00 AM - 06.00 PM",
        space: 10,
    },
];

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography
                gutterBottom
                variant="h4"
                sx={{ color: "info.main", fontWeight: 600 }}
            >
                Available appointment on {date.toDateString()}
            </Typography>
            {bookingSuccess && (
                <Alert severity="success">
                    Appointment Boked successfully!
                </Alert>
            )}
            <Grid container spacing={2}>
                {bookings.map((booking) => (
                    <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>
                ))}
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;
