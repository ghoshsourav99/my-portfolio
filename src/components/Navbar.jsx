import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="sticky"
        elevation={3}
        sx={{
          background: "linear-gradient(to right, #1f1c2c, #928dab)", // Modern gradient
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            MyPortfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <List sx={{ width: 200 }}>
                  {navLinks.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={item.to}
                        onClick={() => setOpenDrawer(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box>
              {navLinks.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={item.to}
                  sx={{ fontWeight: 500, textTransform: "none", mx: 1 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
