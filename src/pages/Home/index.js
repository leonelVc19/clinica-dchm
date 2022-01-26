import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { palette, spacing } from '@mui/system';
import imagenes from '../../components/imagenes';
import { Link } from 'react-router-dom';
import { autocompleteClasses } from '@mui/material';


const Div = styled.div`
  ${palette}
  ${spacing}
`;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Home = () => {

  const [open, setOpen] = React.useState(false);
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleTooltipClose = () => {
    setOpen(false);
  };


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  

    return (


      
      <div>
          <Stack
            
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={4}
            
            >
            <Button variant="contained" size="medium"  disableFocusListener title="Ver más.."  LinkComponent={Link} to="/treatments">Tratamientos</Button>
            <Button variant="contained" size="medium"  LinkComponent={Link} to="/treatments">Ubicación</Button>
            <Button variant="contained" size="medium"  LinkComponent={Link} to="/treatments">Formas de pago</Button>
            
          </Stack>

          <Grid 
          container
          direction="row-reverse"
          justifyContent="right"
          >
            
            <img height='450'src={imagenes.img2}/>
          
          <Grid
          >
          
          <h1>Hola!!!</h1>
          <h3>Bienvenido a tu dentista digital</h3>
        <Tooltip title="Iniciar sesion">
              <IconButton  LinkComponent={Link} to="/treatments" sx={{ p: 0.5 }}>
                <Typography  variant="h6" style={ {padding:1, color:'black',}} > 
                <Div color="white" bgcolor="black" p={1}>
                  Inicia Sesión ¡¡Ahora!!
                  </Div>
                </Typography>
              </IconButton>
            </Tooltip>
            </Grid>
            </Grid>
      </div>
     
        

    )
};


export default Home;   
