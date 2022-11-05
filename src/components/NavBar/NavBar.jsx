import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MenuComp from './../Menu/Menu'
import { IoIosNotificationsOutline } from "react-icons/io";
import { Badge } from "@mui/material";



function NavBar() {
  const [state, setState] = React.useState({ left: false, });
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="fixed top-0 w-full z-20">
      <MenuComp
        state={state}
        setState={setState} />
      <AppBar position="static">
        <Container className="bg-sky-800" maxWidth="xl">
          <Toolbar disableGutters>
            <HiOutlineMenuAlt1 onClick={toggleDrawer('left', true)} className="text-xl font-bold mr-2" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SICAP
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >

              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SICAP
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <div className="flex items-center justify-center gap-3">
                <Badge badgeContent={4} color="error">
                  <IoIosNotificationsOutline className="text-xl" />
                </Badge>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="Wellington" src="/static/images/avatar/2.jpg" />
              </div>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div >
  );
}
export default NavBar;
