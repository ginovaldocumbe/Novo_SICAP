import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


export default function PubFiltro() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(null);

  return (
    <div className="flex flex-col mt-24 text-black items-center md:items-start">
      <div className="pl-3">
        <span className="text-xs font-semibold italic">Pesquise seu item usando o tipo de item ou a data em que perdeu...</span>
      </div>
      <div className="flex flex-row items-center w-full">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Tipo </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Celulares</MenuItem>
            <MenuItem value={20}>Laptopes</MenuItem>
            <MenuItem value={30}>Documentos</MenuItem>
          </Select>
        </FormControl>
        <TextField className='w-full md:w-60' size="small" id="standard-basic" type='date' />
      </div>

    </div>
  );
}
