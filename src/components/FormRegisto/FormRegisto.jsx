import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormRegisto({ estado }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="pb-5" >
      <form className="flex flex-col items-center justify-center w-full" action="">
        <div className="w-full md:w-80 mb-5">
          <FormControl className="w-full" sx={{ minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small">Tipo de artigo</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label=""
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={10}>Bolsa</MenuItem>
              <MenuItem value={20}>Laptop</MenuItem>
              <MenuItem value={30}>Celular</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField className="w-full md:w-80"  disabled id="standard-basic" label="Estado" size="small" defaultValue={estado}  variant="outlined" />

        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField className="w-full md:w-80" id="standard-basic" type='date' size="small" variant="outlined" />
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField className="w-full md:w-80" id="standard-basic" label="Local da perda" size="small" variant="outlined" />
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField className="w-full md:w-80" id="standard-basic" label="Cor" size="small" variant="outlined" />
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField
            className="w-full"
            id="outlined-multiline-static"
            label="Outros detalhes"
            multiline
            rows={6}
          />
        </div>
        <div className="w-full md:w-80 mb-5">
          {/* <TextField className="w-full md:w-80" id="standard-basic" type='file' label="Foto" variant="standard" /> */}
          <div className='h-28 w-28 rounded-full border-dashed border-2 border-teal-600 flex items-center justify-center '>
            <span className='text-[14px] text-teal-600'>Fotografia</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center">
            <button className="w-36 p-2 bg-sky-800 text-white rounded-lg">Gravar</button>
            <button onClick='' className="w-36 p-2 text-sky-800 border border-sky-800 rounded-lg">Voltar</button>
          </div>
      </form>
    </div>
  );
}
