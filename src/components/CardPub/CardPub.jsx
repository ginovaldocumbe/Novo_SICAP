import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { MdExpandMore } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import CardDialog from "../CardDialog/CardDialog";
import { BsHeart, BsShare } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardPub({ foto, setOpen, open }) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const abrir = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardDialog
        setOpen={setOpen}
        open={open} />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FiMoreVertical />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={foto}
        alt="Paella dish"
      />
      <CardContent>
        <Typography className="!font-semibold">Tipo de item:</Typography>
        <Typography className="" paragraph>Bilhete de identidade (BI) </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <BsHeart className="text-slate-600 mr-3" />
        <BsShare aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick} className="text-slate-600 mr-3" />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={abrir}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Facebook</MenuItem>
          <MenuItem onClick={handleClose}>Email</MenuItem>
          {/* <MenuItem onClick={handleClose}>Amigo</MenuItem> */}
        </Menu>
        <button onClick={handleClickOpen} className="p-1 bg-sky-500 rounded-full text-white mr-3 text-xs">Devolução</button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
          <MdExpandMore />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className="!font-bold" paragraph>Detalhes:</Typography>
          <Typography paragraph>
            <Typography className=" " >Tipo de item:</Typography>
            <Typography className=" ">Bilhete de identidade (BI)</Typography>
          </Typography>
          <Typography paragraph>
            <Typography className=" " >Data da publicação:</Typography>
            <Typography className=" ">17/04/2022</Typography>
          </Typography>
          <Typography paragraph>
            <Typography className=" " >Estado:</Typography>
            <Typography className=" ">Perdido</Typography>
          </Typography>
          <Typography paragraph>
            <Typography className=" " >Outros detalhes:</Typography>
            <Typography className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum iure aperiam, dolore facere, reiciendis et similique neque quod
              ullam nemo officiis ut suscipit harum deleniti. Natus architecto est esse.</Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
