import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo_1 from '../images/logo-1.jpeg';
import logo_2 from '../images/logo-2.jpeg';
import './Header.css';
import Add from './Add.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

function Header() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose(e) {
    setOpen(e);
  }

  return (
    <div>
      <div class="header-1">
        <img class="logo-1" src={logo_1} alt="Logo" />
        <img class="logo-2" src={logo_2} alt="Logo" />
      </div>
      <Box class="container" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1.5} class="btn-1">
            <Button class="btn">PREDICT</Button>
          </Grid>
          <Grid item xs={1.5} class="btn-1">
            <Button>ANAYTICS VIEW</Button>
          </Grid>
          <Grid item xs={1.5} class="btn-1">
            <Button>ADVANCE SEARCH</Button>
          </Grid>
          <Grid item xs={2.5} class="btn-2">
            <Button>Search Customer Id</Button>
          </Grid>
          <Grid item xs={1.5} class="btn-1">
            <Button onClick={handleOpen}>ADD</Button>
            <Add isOpen={open} closeModal={handleClose} />
          </Grid>
          <Grid item xs={1.5} class="btn-1">
            <Button>EDIT</Button>
          </Grid>
          <Grid item xs={1.5} class="btn-1">
            <Button>DELETE</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Header;
