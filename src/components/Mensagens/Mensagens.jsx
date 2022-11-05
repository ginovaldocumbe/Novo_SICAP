import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export default function Mensagens() {
  return (
    <Link to='/mensagem'>
      <div className="flex flex-row items-center gap-6 h-16 mb-12">
        <Avatar
          sx={{ width: 60, height: 60 }}
          alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div className="flex flex-col">
          <span className="font-bold text-lg">Ginovaldo Cumbe</span>
          <span className="text-end text-xs pr-3 text-slate-500 -mt-2">15/05/2022</span>
          <span className="h-12 overflow-hidden">Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Maiores, qui error eos consectetur,
            mollitia quos debitis dolor beatae soluta voluptate
            laudantium tempora ullam, sunt quibusdam consequuntur
            expedita incidunt. Deleniti, temporibus?</span>
        </div>
      </div>
    </Link>
  )
}
