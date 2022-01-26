import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Imagenes para cada una de las cards
import patologia from './img/patologia.jpg';
import limpieza from './img/limpieza_bucal.jpg';
import maxilo from './img/maxilofacial.jpg';
import ortodoncia from './img/ortodoncia.jpg';
import periodoncia from './img/periodoncia.jpg';
import protesis from './img/protesis-bucal.jpg';
import Tooltip from '@mui/material/Tooltip';

//estilols CssB
const Tarjetas = () => {

    return(
        <div style={{ padding:20}}>
            <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    
                        <Grid item xs={2} sm={4} md={4}>
                        <Card sx={{ maxWidth: 345 }} sx={{ '&:hover': {
                                                   bgcolor: 'text.disabled'}}} >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={patologia}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Grid
                                        container
                                        direction="row-reverse"
                                        justifyContent="center"
                                        alignItems="center">

                                    <Tooltip title="Más Información.." arrow>
                                        <Button  variant="contained"  size="medium"
                                                 sx={{ '&:hover': {
                                                    bgcolor: 'secondary.main',
                                                    color: 'white'}}}
                                            >
                                            PATOLOGÍA BUCAL
                                        </Button>
                                    </Tooltip>
                                        
                                    </Grid>
                                    
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={2} sm={4} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="250"
                                    image={ortodoncia}
                                    />
                                </CardActionArea>
                                <CardActions>
                                     <Grid
                                        container
                                        direction="row-reverse"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Tooltip title="Más Información.." arrow>
                                            <Button variant="contained"  size="medium"
                                                 sx={{ '&:hover': {
                                                    bgcolor: 'secondary.main',
                                                    color: 'white'}}}
                                            >
                                                ORTODONCIA
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={2} sm={4} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="250"
                                    image={periodoncia}
                                    />
                                    
                                </CardActionArea>
                                <CardActions>
                                    <Grid
                                        container
                                        direction="row-reverse"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Tooltip title="Más Información.." arrow>
                                            <Button  variant="contained"  size="medium"
                                                 sx={{ '&:hover': {
                                                    bgcolor: 'secondary.main',
                                                    color: 'white'}}}>
                                                PERIODONCIA
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={2} sm={4} md={4} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="250"
                                    image={protesis}
                                    />
                                   
                                </CardActionArea>
                                <CardActions>
                                    <Grid
                                        container
                                        direction="row-reverse"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Tooltip title="Más Información.." arrow>
                                            <Button  variant="contained"  size="medium"
                                                 sx={{ '&:hover': {
                                                    bgcolor: 'secondary.main',
                                                    color: 'white'}}}>
                                                IMPLANTOLOGÍA Y PROTESIS BUCAL
                                            </Button>
                                        </Tooltip>
                                        
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={2} sm={4} md={4} >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea >
                                    <CardMedia
                                    component="img"
                                    height="250"
                                    image={maxilo}
                                    />
                                    
                                </CardActionArea>
                                <CardActions>
                                    <Grid
                                        container
                                        direction="row-reverse"
                                        justifyContent="center"
                                        alignItems="center">

                                        <Tooltip title="Más Información.." arrow>
                                            <Button  variant="contained"  size="medium"
                                                 sx={{ '&:hover': {
                                                    bgcolor: 'secondary.main',
                                                    color: 'white'}}}>
                                                CIRUGÍA MAXLOFACIAL
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={2} sm={4} md={4} >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="250"
                                    image={limpieza}
                                    />
                                </CardActionArea>
                                <CardActions sx={{ bgcolor: 'text.disabled' }} sx={{ color: 'primary.main' }}>
                                    <Grid
                                        container
                                        direction="row-reverse"
                                        justifyContent="center"
                                        alignItems="center">


                                        <Tooltip title="Más Información.." arrow>
                                            <Button variant="contained"  size="medium"
                                                 sx={{ '&:hover': {
                                                    bgcolor: 'secondary.main',
                                                    color: 'white'}}}>
                                                LIMPIEZA BUCAL
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
        </div>
    );
}

export default Tarjetas;   