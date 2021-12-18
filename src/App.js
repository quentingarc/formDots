import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormJ from "./FormJobs.json";

export default function SignIn() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <h1>Formular for job</h1>
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>

            <InputLabel>Email</InputLabel>

            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              autoComplete="email"
              autoFocus
            />

            <InputLabel>Job</InputLabel>

            <Select>
              {FormJ.select.map((job) => {
                return <MenuItem value={job}>{job}</MenuItem>;
              })}
            </Select>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
