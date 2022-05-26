import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

const options = ['NEWEST', 'OLDEST'];

export default function  Filter() {

  return (
    <div>
         <Stack spacing={2} sx={{ width: 200 }}>
      <Autocomplete
        style={{ width: 180 }}
        id="size-small-standard"
        size="small"
        options={options}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
          style={{ width: 180 }}
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
