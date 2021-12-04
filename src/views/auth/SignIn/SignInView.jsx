import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SignInView(props) {
  const {
    user,
    showPassword,
    handleClickShowPassword,
    handleChange,
    handleSignIn,
    authenticating,
  } = props;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} alignSelf="center">
          <Box px={15} py={10}>
            <Typography gutterBottom variant="h4">
              <b>Sign In.</b>
            </Typography>
            <Box mb={2} />
            <form onSubmit={handleSignIn}>
              <TextField
                autoFocus
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
                  autoComplete="current-password"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  placeholder="Enter Password"
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
                disabled={authenticating}
                disableElevation
                startIcon={authenticating && <CircularProgress size={20} />}
              >
                {authenticating ? "Signing In" : "Sign In"}
              </Button>
            </form>
            <Box
              mt={3}
              sx={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Typography variant="subtitle2" color="textSecondary">
                Do not have an account?
              </Typography>

              <Typography
                component={Link}
                to="/sign-up"
                sx={{ textDecoration: "none" }}
                ml={1}
                variant="subtitle2"
              >
                Sign Up
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
              src={"/assets/tasks.svg"}
              alt={"Authentication"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
