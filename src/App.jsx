import React from 'react'
import { Typography,Button, AppBar, Card, CardActions, CardMedia, CardContent, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import {PhotoCamera }from '@material-ui/icons'
import { motion } from 'framer-motion'
import useStyles from './styles'


const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
    
    const classes = useStyles();

    return (
        <>
           <CssBaseline/> 
           <AppBar position='relative'>
               <Toolbar>
               <PhotoCamera className={classes.icon}/>
               <Typography variant='h6'>
                   Omagz
               </Typography>
               </Toolbar>

               
           </AppBar>

           <main>
            <div className={classes.container}>
                <Container maxWidth='sm'>
                    <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
                        Album Collection
                    </Typography>

                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Lorem ipsum dolor, blanditiis. Repellat nulla hic error aliquam vitae optio vero. Sed, temporibus.
                    </Typography>

                    <div className={classes.button}> 
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See my Photos
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Second actions
                                </Button>
                            </Grid>

                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) =>(
                        <Grid 
                        item 
                        key={card}
                        xs={12}
                        sm={6}
                        md={4}
                        >
                        <motion.Card 
                        className={classes.card} 
                        // drag="x"
                        // dragConstraints={{ left: -100, right: 100 }}
                        // whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8}}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2 }}
                        >
                            
                            <CardMedia
                                className={classes.cardMedia}
                                image='https://source.unsplash.com/random'
                                title='Image title'
                            />

                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant='h5'>
                                    Heading
                                </Typography>

                                <Typography>
                                    This is a media card for displaying card content
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size='small' color='primary'>View</Button>
                                <Button size='small' color='primary'>Edit</Button>
                            </CardActions>
                        </motion.Card>
                    </Grid>
                    ))}
                    
                </Grid>
            </Container>
           </main>

           <footer className={classes.footer}>
               <Typography variant='h6' gutterBottom align='center'>
                   Footer
               </Typography>

               <Typography variant='subtitle1' align='center'>
                   Something about the page and MUI.
               </Typography>
                
           </footer>
        </>
    )
}

export default App
