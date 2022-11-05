import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import { IoIosSend } from "react-icons/io";
import Baixo from "../../components/Baixo/baixo";
import NavBar from "../../components/NavBar/NavBar";

export default function Mensagem() {
  return (
    <div>
      <NavBar />
      <div className="pt-24 flex flex-col items-center h-screen px-2 md:px-10">
        <span className="font-bold">Ginovaldo Cumbe</span>
        <div className="w-full overflow-scroll mb-44">
          <div className="flex flex-row items-end w-fit gap-4 bg-slate-200 p-1 rounded-lg mb-5 md:w-80">
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Ginovaldo" src="/static/images/avatar/1.jpg" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe optio id, corporis molestias doloribus eveniet asperiores
              temporibus mollitia, eligendi quas reiciendis omnis ea nihil
              delectus minus vel cum! Tempore, odio.</span>
          </div>
          <div className="flex flex-row items-end  gap-4  rounded-lg mb-5 md:justify-end">
            <div className="flex flex-row items-end gap-4 p-1 bg-slate-200 md:w-80">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe optio id, corporis molestias doloribus eveniet asperiores
                temporibus mollitia, eligendi quas reiciendis omnis ea nihil
                delectus minus vel cum! Tempore, odio.</span>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>

          </div>
          <div className="flex flex-row items-end  gap-4  rounded-lg mb-5 md:justify-end">
            <div className="flex flex-row items-end gap-4 p-1 bg-slate-200 md:w-80">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe optio id, corporis molestias doloribus eveniet asperiores
                temporibus mollitia, eligendi quas reiciendis omnis ea nihil
                delectus minus vel cum! Tempore, odio.</span>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>

          </div>
          <div className="flex flex-row items-center gap-2 fixed w-[95%] bottom-10">
            <TextField
              className="w-full"
              id="outlined-multiline-static"
              multiline
              rows={4}
            />
            <Button className="h-fit" variant="contained" startIcon={<IoIosSend />}>
              Enviar
            </Button>
          </div>
        </div>
      </div>
      <Baixo />
    </div>
  );
}
