import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';


//estilols CssB
const Cards = ({card}) => {

    return(
    <Grid item xs={2} sm={4} md={4} key={card.id}>
        <Card sx={{ maxWidth: 345 }}
            sx={{ '&:hover': {bgcolor: 'text.disabled'}}} >
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={card.imagen}/>
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
                                    {card.name}
                                 </Button>
                            </Tooltip>
                      </Grid>
                  </CardActions>
        </Card>
    </Grid>
    );
}

export default Cards;   