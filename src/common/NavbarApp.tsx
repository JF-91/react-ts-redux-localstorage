import {
  AppBar,
  Box,
  Grid,
  Hidden,
  IconButton,
  Link,
  Stack,
  Button,
  Typography,
  Drawer,
} from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
const NavbarApp = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box mb={10}>
      <Hidden only={["xs", "sm"]}>
        <AppBar
          position="fixed"
          sx={{ background: "inherit", boxShadow: "inherit" }}
        >
          <Box mr={10} ml={10} mt={2}>
            <Grid container justifyContent="space-between">
              <Grid item justifyContent="center" alignItems="center">
                <IconButton edge="start" size="large">
                  <Link href="/">
                    <img src="/avatar.svg" alt="dino" style={{ height: 50 }} />
                  </Link>
                </IconButton>
              </Grid>
              <Grid item justifyContent="center" alignItems="center">
                <Stack direction="row" spacing={12}>
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    <Button variant="outlined">
                      <Typography color="primary">About</Typography>
                    </Button>
                  </Link>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button variant="outlined">
                      <Typography color="primary">Contact</Typography>
                    </Button>
                  </Link>
                  <Link href="/portfolio" style={{ textDecoration: "none" }}>
                    <Button variant="outlined">
                      <Typography color="primary">Portfolio</Typography>
                    </Button>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </AppBar>
      </Hidden>
      <Hidden only={["lg", "xl", "md"]}>
        <AppBar
          position="fixed"
          sx={{ background: "inherit", boxShadow: "inherit" }}
        >
          <Box mr={10} ml={10} mt={2}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                {/* <Link href='/' style={{textDecoration:'none'}}>
                    <IconButton>
                      <img src="/johnLogo.png" alt="john" height={50} />
                    </IconButton>
                  </Link> */}
              </Grid>
              <Grid item justifyContent="center" alignItems="center">
                <IconButton
                  edge="start"
                  size="large"
                  aria-label="open drawer"
                  color="inherit"
                  onClick={toggleDrawer(true)}
                >
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <MenuIcon fontSize="large" color="secondary" />
                  </Link>
                </IconButton>
              </Grid>
            </Grid>
            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              variant="temporary"
              onPointerEnter={toggleDrawer(true)}
            >
              <Box sx={{ p: 2, height: 1, backgroundColor: "#434242" }}>
                <Stack direction="column" spacing={3}>
                  <Button variant="contained">
                    <Link href="/about" style={{ textDecoration: "none" }}>
                      <Typography variant="body2" color="black">
                        About
                      </Typography>
                    </Link>
                  </Button>
                  <Button variant="contained">
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <Typography variant="body2" color="black">
                        Contact
                      </Typography>
                    </Link>
                  </Button>
                  <Button variant="contained" color="primary">
                    <Link href="/portfolio" style={{ textDecoration: "none" }}>
                      <Typography variant="body2" color="black">
                        Portfolio
                      </Typography>
                    </Link>
                  </Button>
                  <Button variant="contained" color="primary">
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography variant="body2" color="black">
                        Home
                      </Typography>
                    </Link>
                  </Button>
                </Stack>
              </Box>
            </Drawer>
          </Box>
        </AppBar>
      </Hidden>
    </Box>
  );
};

export default NavbarApp;
