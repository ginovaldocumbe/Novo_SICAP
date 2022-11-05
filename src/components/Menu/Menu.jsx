import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SlideData } from "../../files/Data/SlideData";
import { Link } from "react-router-dom";


export default function Menu({ state, setState }) {



  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box

      sx={{ width: anchor === '' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="font-bold ml-5 text-lg">SICAP</div>
        <Divider />
        {SlideData.map((text) => (
          <Link to={text.path}>
            <ListItem key={text.nome} disablePadding>
              <ListItemButton>
                <ListItemIcon className="-mr-5">
                  {text.icone}
                </ListItemIcon>
                <ListItemText primary={text.nome} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

    </Box>
  );

  return (
    <div>
      <React.Fragment >
        <Drawer

          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
