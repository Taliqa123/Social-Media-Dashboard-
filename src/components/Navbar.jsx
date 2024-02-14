import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MailIcon from "@mui/icons-material/Mail";

import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: "5px",
    width: "40%",
  }));

  const Icons = styled("div")(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <>
      <AppBar position="sticky" >
        <StyledToolbar>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            Taliqa Dev
          </Typography>
          <AcUnitIcon sx={{ display: { xs: "block", sm: "none" } }} />

          <Search>
            <InputBase placeholder="Search. . ." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={3} color="success">
              <NotificationsIcon />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 25 }}
              alt="Travis Howard"
              src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707696000&semt=sph"
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 25 }}
              alt="Travis Howard"
              src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707696000&semt=sph"
              onClick={(e) => setOpen(true)}
            />
            <Typography>Taliqa</Typography>
          </UserBox>
        </StyledToolbar>

        <Menu
          id="basic-menu"
          open={open}
          onClose={(e) => setOpen(false)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
