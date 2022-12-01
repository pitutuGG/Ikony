import { Stack, Button, IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';

const App = () => {
  return (
      <>
        <Stack spacing={2} direction="row">
          <Button variant="text">Witaj świecie</Button>
          <Button variant="contained">Witaj świecie</Button>
          <Button variant="outlined">Witaj świecie</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <IconButton><AddIcon /></IconButton>
          <IconButton><EditIcon /></IconButton>
          <IconButton><RemoveIcon /></IconButton>
        </Stack>
      </>
  );
}

export default App;