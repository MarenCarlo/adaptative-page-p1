import * as React from 'react';
import Typography from '@mui/material/Typography';

//Grid
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

//icons
import Bookmark from '@mui/icons-material/BookmarkAdd';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareIcon from '@mui/icons-material/Share';

const Header = () => {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid sx={{ display: { xs: 'none', md: 'flex' } }} item xs={12} md={6}>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ py: '10%', display: { xs: 'none', md: 'flex' }, fontFamily: 'Lobster, cursive', color: '#7F8277' }}
                    >
                        Obra Más Valorada
                    </Typography>
                </Grid>
                <Grid sx={{ display: { lg: 'none', md: 'none' } }} item xs={12} md={6}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{ py: '10%', display: { lg: 'flex', md: 'none' }, fontFamily: 'Lobster, cursive', color: '#7F8277' }}
                    >
                        Obra Más Valorada
                    </Typography>
                </Grid>
                <Grid sx={{ display: { xs: 'none', md: 'flex' }, align: 'center' }} item xs={12} md={6}>
                </Grid>
                <Grid sx={{ my: '-4%', display: { xs: 'none', md: 'flex' } }} item xs={12} md={6}>
                    <Card sx={{ display: { xs: 'none', md: 'flex' }, height: '50vh', width: '50vw' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Alce Poligonal
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    @Sirius_Altair
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <ShareIcon /> : <Bookmark />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <FavoriteIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <Bookmark /> : <ShareIcon />}
                                </IconButton>
                            </Box>
                        </Box>

                        <CardMedia
                            component="img"
                            sx={{ height: '100%', width: '100%' }}
                            image="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid sx={{ my: '-4%', display: { lg: 'none', md: 'none' } }} item xs={12} md={6}>
                    <Card sx={{ display: { lg: 'none', md: 'none' } }}>
                        <Box>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Alce Poligonal
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    @Sirius_Altair
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'block' }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <ShareIcon /> : <Bookmark />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <FavoriteIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <Bookmark /> : <ShareIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: '100vw' }}
                            image="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid sx={{ display: { xs: 'none', md: 'block' } }} item xs={12} md={6}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ align: 'center', my: '-20%', display: { xs: 'none', md: 'block' }, fontFamily: 'Lobster, cursive', color: '#7F8277', fontSize: '24pt' }}
                    >
                        Gallery Adaptative Page
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ my: '25%', display: { xs: 'none', md: 'flex' }, fontFamily: 'Arial', color: '#3C4043', fontSize: '14pt', textAlign: 'justify' }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint iste sunt recusandae nihil numquam, vero aliquid consectetur,
                        provident facere totam ut, molestias veritatis cupiditate voluptas. Laborum commodi vel exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Exercitationem sint iste sunt recusandae nihil numquam, vero aliquid consectetur.
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ px: '2%', my: '-15%', display: { xs: 'none', md: 'flex' } }}>
                        <Button variant="contained" sx={{ fontFamily: 'Arial', backgroundColor: '#9E4757', color: '#FFFFFF' }}>
                            Saber Más...
                        </Button>
                        <Button variant="outlined" sx={{ fontFamily: 'Arial', borderColor: '#30A250', color: '#30A250' }}>
                            Unirse
                        </Button>
                    </Stack>

                </Grid>
                <Grid sx={{ display: { xs: 'block', md: 'none' } }} item xs={12} md={6}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ align: 'center', my: '5%', display: { xs: 'block', md: 'none' }, fontFamily: 'Lobster, cursive', color: '#7F8277', fontSize: '24pt' }}
                    >
                        Gallery Adaptative Page
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ my: '0', display: { xs: 'flex', md: 'none' }, fontFamily: 'Arial', color: '#3C4043', fontSize: '14pt', textAlign: 'justify' }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint iste sunt recusandae nihil numquam, vero aliquid consectetur,
                        provident facere totam ut, molestias veritatis cupiditate voluptas. Laborum commodi vel exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Exercitationem sint iste sunt recusandae nihil numquam, vero aliquid consectetur.
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ alignContent: 'center', my: '4%', display: { xs: 'flex', md: 'none' } }}>
                        <Button variant="contained" sx={{ fontFamily: 'Arial', backgroundColor: '#9E4757', color: '#FFFFFF' }}>
                            Saber Más...
                        </Button>
                        <Button variant="outlined" sx={{ fontFamily: 'Arial', borderColor: '#30A250', color: '#30A250' }}>
                            Unirse
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;