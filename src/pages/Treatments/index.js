import * as React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useState} from 'react';

/**Breadcrumbs */
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//Imagen para Inicio
import imagenes from './imagenes';

const Tratamientos = () => {

 const [cartas] = useState([
   {id:1, name:'PATOLOGÍA BUCAL', imagen: imagenes.img1},
   {id:2, name:'ORTODONCIA', imagen: imagenes.img2},
   {id:3, name:'PERIODONCIA', imagen: imagenes.img3},
   {id:4, name:'IMPLANTOLOGÍA Y PROTESIS BUCAL', imagen: imagenes.img4},
   {id:5, name:'CIRUGÍA MAXLOFACIAL', imagen: imagenes.img5},
   {id:6, name:'LIMPIEZA BUCAL', imagen: imagenes.img6},
 ]);
    const renderCards = () => {
        //hacer un map del arreeglo de productos a tarjetas.
       return cartas.map((item) => (
           <Cards card={item} />
        ))
    }

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
////
    return(
      <Paper style={{ padding:20}}>
            <Box sx={{ width: 'auto', height: 300, borderRadius:2, padding: 6,
                  '&:hover': {
                    backgroundColor: 'primary.info',
                    opacity: [0.7, 0.9, 0.7],
                  },
                }}
                style={{ backgroundImage: `url(${imagenes.img})`, height:200, weidth:300, borderColor: 'black', }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom component="div">
                  Tratamientos
                </Typography> 
            </Box>
           <Stack  style={{ paddingTop:10}} >
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <Grid container spacing={2} sx={{padding:1}}>
                {renderCards()}
            </Grid>
      </Paper>
    )
};
export default Tratamientos;   