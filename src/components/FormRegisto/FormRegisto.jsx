import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormRegisto() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div >
      <form className="flex flex-col items-center justify-center w-full" action="">
        <div className="w-full md:w-80 mb-5">
          {/* <TextField className="w-full md:w-80" id="standard-basic" label="Standard" variant="standard" /> */}
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
          <TextField className="w-full md:w-80" id="standard-basic" type='date' variant="standard" />
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField className="w-full md:w-80" id="standard-basic" label="Local da perda" variant="standard" />
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField className="w-full md:w-80" id="standard-basic" type='file' label="Foto" variant="standard" />
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField className="w-full md:w-80" id="standard-basic" label="Cor" variant="standard" />
        </div>
        <div className="w-full md:w-80 mb-5">
          <TextField
            className="w-full"
            id="outlined-multiline-static"
            label="Outros detalhes"
            multiline
            rows={4}
          />
        </div>
      </form>
    </div>
  );
}
