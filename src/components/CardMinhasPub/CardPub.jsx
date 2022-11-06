import React, { useState } from "react";
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
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
  const [expanded, setExpanded] = React.useState(false);
  const [editar, setEditar] = useState(false);
  const [age, setAge] = React.useState('');

  const editarPub = () => {
    setEditar(!editar);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
        <Typography className="" paragraph>NoteBook</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <BsHeart className="text-slate-600 mr-3" />
        {/* <BsShare className="text-slate-600 mr-3" /> */}
        {/* <button onClick={handleClickOpen} className="p-1 bg-sky-500 rounded-full text-white mr-3 text-xs">Devolução</button> */}

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
            <TextField
              className="w-full"
              size="small"
              required
              id="outlined-required"
              defaultValue='Bilhete de identidade (BI)'
            />
          </Typography>
          <Typography paragraph>
            <Typography className=" " >Data da publicação:</Typography>
            <TextField
              className="w-full"
              size="small"
              required
              id="outlined-required"
              defaultValue='17/04/2022'
            />
          </Typography>
          <Typography paragraph>
            <Typography className=" " >Estado:</Typography>
            <FormControl className='w-full' size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Nenhum</em>
                </MenuItem>
                <MenuItem value={10}>Perdido</MenuItem>
                <MenuItem value={20}>Achado</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          <Typography paragraph>
            <Typography className=" " >Recompensa:</Typography>
            <TextField
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue='500'
              className="w-full"
              size="small"
              id="outlined-required"

            />
          </Typography>
          <Typography paragraph>
            <Typography className=" " >Outros detalhes:</Typography>
            <TextField
              className="w-full"
              id="outlined-multiline-static"
              multiline
              rows={8}
              defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Recusandae rerum iure aperiam, dolore facere, reiciendis et similique neque quod 
              ullam nemo officiis ut suscipit harum deleniti. Natus architecto est esse'
            />
          </Typography>

          <div className="flex flex-row gap-4 justify-center">
            <button className="w-36 p-2 bg-sky-800 text-white rounded-lg">Salvar</button>
            <button onClick={editarPub} className="w-36 p-2 text-sky-800 border border-sky-800 rounded-lg">Editar</button>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
