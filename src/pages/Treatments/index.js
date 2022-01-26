import * as React from 'react';
import Tarjetas from './cards';
import { Link } from 'react-router-dom';

//Card
import { experimentalStyled  } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


/**Breadcrumbs */
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//Imagen para Inicio
import inicio from './img/inicio.jpg';

const Tratamientos = () => {




/**Breadcrumbs */
    const breadcrumbs = [
        <Link underline="hover" key="1" 
        color="blue" 
        component={Link} to="/home">
          Inicio
        </Link>,
        <Typography key="3" color="text.primary">
          Tratamientos
        </Typography>,
      ];

    return(

        <div>
     
             <Box 
                sx={{
                  width: 'auto',
                  height: 300,
                  borderRadius:2,
                  padding: 6,
                  '&:hover': {
                    backgroundColor: 'primary.info',
                    opacity: [0.7, 0.9, 0.7],
                  },
                }}
                style={{ backgroundImage: `url(${inicio})`, height:200, weidth:300, borderColor: 'black', }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom component="div">
                  Tratamientos
                </Typography> 
             </Box>
    
           <Stack  style={{ paddingTop:10}} >
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <p></p>
           <Tarjetas />

        </div>
     
       

        
    )
};


export default Tratamientos;   