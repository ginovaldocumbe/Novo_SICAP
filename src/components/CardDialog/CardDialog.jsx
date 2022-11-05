import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function CardDialog({ open, setOpen }) {



  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <Dialog
        className=""
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      ><DialogTitle>Pergunta chave</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Envie uma mensagem para o portador do seu item.
            Podera ainda fazer uma pergunta chave para saber se ele está realmente o seu item
          </DialogContentText>
          <TextField
            className="w-full"
            id="outlined-multiline-static"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="p-2 text-sky-800 border border-sky-800 text-sky-800 rounded-lg w-28">Cancelar</button>
          <button onClick={handleClose} className="p-2 bg-sky-800 text-white rounded-lg w-28">Enviar</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
