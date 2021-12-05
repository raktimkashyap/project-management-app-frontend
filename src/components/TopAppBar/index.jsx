import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { signOut } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@mui/icons-material";
import QuickAdd from "../QuickAdd";

export default function TopAppBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const [quickAddOpen, setQuickAddOpen] = useState(false);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const toggleQuickAdd = (value) => {
    setQuickAddOpen(value);
  };

  return (
    <AppBar elevation={0} color="secondary">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          Tasky
        </Typography>
        <Button onClick={handleSignOut}>LogOut</Button>
        <IconButton
          onClick={toggleQuickAdd}
          sx={{
            marginRight: 1,
          }}
        >
          <Add
            sx={{
              color: "white",
            }}
          />
        </IconButton>
        <Avatar
          sx={{
            backgroundColor: "white",
            width: 30,
            height: 30,
            color: "black",
          }}
        >
          {user.fullName[0]}
        </Avatar>
      </Toolbar>
      {quickAddOpen && <QuickAdd handleClose={() => toggleQuickAdd(false)} />}
    </AppBar>
  );
}
