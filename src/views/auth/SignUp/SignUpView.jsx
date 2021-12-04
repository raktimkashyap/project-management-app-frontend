import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignUpView(props) {
  const {
    user,
    handleSignUp,
    handleClickShowPassword,
    handleChange,
    showPassword,
    authenticating,
  } = props;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} alignSelf="center">
          <Box px={15} py={10}>
            <Typography gutterBottom variant="h4">
              <b>Sign Up.</b>
            </Typography>
            <Box mb={2} />
            <form onSubmit={handleSignUp}>
              <TextField
                autoFocus
                required
                value={user.fullName}
                name="fullName"
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                label="Name"
                placeholder="Your name here"
              />
              <TextField
                required
                value={user.email}
                name="email"
                autoComplete="current-email"
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="passwordLabel">Password</InputLabel>
                <OutlinedInput
                  required
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  placeholder="Create a password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box mt={2} />
              <Button
                size="large"
                variant="contained"
                color="primary"
                type="submit"
                disableElevation
                disabled={authenticating}
                startIcon={authenticating && <CircularProgress size={20} />}
              >
                {authenticating ? "Signing Up" : "Sign In"}
              </Button>
            </form>
            <Box
              mt={3}
              sx={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Typography
                variant="subtitle2"
                component="span"
                color="textSecondary"
              >
                Already have an account?
              </Typography>

              <Typography
                component={Link}
                to="/sign-in"
                sx={{ textDecoration: "none" }}
                ml={1}
                variant="subtitle2"
              >
                Sign In
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box
            sx={{
              background: "#f8f8f8",
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "70%", height: "auto" }}
              src={"/assets/completed.svg"}
              alt={"Authentication"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
