import * as React from "react";
import { useTheme } from "@mui/material/styles";
import LogoMakerDAO from "../Icons/LogoMakerDAO";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Account from "../Account/Account";
import Logo from "../Icons/LogoText";
import Chains from "../Chains";
import Overview from "./Overview";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// https://www.covalenthq.com/docs/api/
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [currentPage, setCurrentPage] = React.useState(<Overview />);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          paddingTop: "5px",
          marginBottom: "5px",
          paddingBottom: "5px",
          justifyContent: "space-between",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "30px",
              justifyContent: "space-between",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ fontSize: "40px" }} />
          </IconButton>
          <Logo sx={{ color: "#FFF", width: "200px", height: "60px" }} />
          <Typography
            sx={{ marginLeft: "20px" }}
            variant="h5"
            noWrap
            component="div"
          >
            INVESTOR DASHBOARD
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginRight: "0px",
              marginLeft: "auto",
            }}
          >
            <Chains />
            <Account />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">Menu</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ fontSize: "40px" }} />
            ) : (
              <ChevronLeftIcon sx={{ fontSize: "40px" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ marginTop: "10px" }}>
          <ListItem
            button
            onClick={() => {
              setCurrentPage(<Overview />);
            }}
          >
            <ListItemIcon>
              <AccountBalanceIcon sx={{ fontSize: "40px" }} />
            </ListItemIcon>
            <ListItemText primary="Portfolio Overview" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              setCurrentPage();
            }}
          >
            <ListItemIcon>
              <LogoMakerDAO
                sx={{ color: "black", width: "40px", height: "40px" }}
              />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </List>
      </Drawer>
      {currentPage}
    </Box>
  );
}
