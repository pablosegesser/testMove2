import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import styles from './filterCustom.module.css'

const options = ['NEWEST', 'OLDEST'];

export default function Filter() {

  return (
    <div>
         <Stack spacing={2} sx={{ width: 160 }}>
      <Autocomplete
        id="size-small-standard"
        size="small"
        options={options}
        getOptionLabel={(option) => option}
        classes={{
          listbox: styles.listbox,
          option: styles.option
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="NEWEST"
          />
        )}
      />
  </Stack>
    </div>
  );
}
