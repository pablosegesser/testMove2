import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Add from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { ContentIcon } from "../../styles/globalStyle";
import { grey , purple} from '@mui/material/colors';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddIcon() {
  return (
    <div>
      <Checkbox {...label} icon={<ContentIcon><Add  sx={{ color: grey[50] }}   /></ContentIcon>} checkedIcon={<ContentIcon className="checked"><CheckIcon  sx={{ color: purple[900] }} /></ContentIcon>} />
    </div>
  );
}