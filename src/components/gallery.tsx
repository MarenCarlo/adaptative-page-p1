import Typography from '@mui/material/Typography';

//Grid
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//lista de imagenes
import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

//icons
import Bookmark from '@mui/icons-material/BookmarkAdd';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareIcon from '@mui/icons-material/Share';

//cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

const Gallery = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: '15%' }}>
            <Grid container spacing={4}>
                <Grid sx={{ display: { xs: 'block', md: 'block' } }} item xs={12} md={12}>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{ display: { xs: 'block', md: 'block' }, fontFamily: 'Lobster, cursive', color: '#212121', textAlign: 'center' }}
                    >
                        Galería De Arte
                    </Typography>
                </Grid>
                <Grid sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} item xs={12} md={12}>
                    <ImageList cols={2}>
                        {itemData.map((item) => (
                            <Grid key={item.img} sx={{ my: '10%', width: '100%', display: { xs: 'none', md: 'none', lg: 'flex' } }} item xs={12} md={12}>
                                <Card sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
                                    <Box>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {item.author}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'block', alignItems: 'center' }}>
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
                                    <Stack spacing={5} direction="column" sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                                        <CardMedia
                                            sx={{ display: { xs: 'none', md: 'none', lg: 'flex' }, flex: '0 auto' }}
                                            component="img"
                                            image={`${item.img}`}
                                            alt={`${item.title}`}
                                        />
                                    </Stack>

                                </Card>
                            </Grid>
                        ))}
                    </ImageList>
                </Grid>
                <Grid sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }} item xs={12} md={12}>
                    <ImageList cols={2}>
                        {itemData.map((item) => (
                            <Grid key={item.img} sx={{ my: '10%', width: '100%', display: { xs: 'none', md: 'flex', lg: 'none' } }} item xs={12} md={12}>
                                <Card sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }}>
                                    <Box>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {item.author}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'block', alignItems: 'center' }}>
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
                                    <Stack spacing={5} direction="column" sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <CardMedia
                                            sx={{ display: { xs: 'none', lg: 'none', md: 'flex' }, flex: '0 auto' }}
                                            component="img"
                                            image={`${item.img}`}
                                            alt={`${item.title}`}
                                        />
                                    </Stack>

                                </Card>
                            </Grid>
                        ))}
                    </ImageList>
                </Grid>
                <Grid sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }} item xs={12} md={1}>
                    <ImageList cols={1}>
                        {itemData.map((item) => (
                            <Grid key={item.img} sx={{ my: '10%', width: '100%', display: { xs: 'flex', lg: 'none', md: 'none' } }} item xs={12} md={1}>
                                <Card sx={{ display: { xs: 'block', lg: 'none', md: 'none' } }}>
                                    <Box>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {item.author}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'block', alignItems: 'center' }}>
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
                                    <Stack spacing={5} direction="column" sx={{ display: { xs: 'flex', md: 'none' } }}>
                                        <CardMedia
                                            sx={{ display: { xs: 'flex', lg: 'none', md: 'none' }, flex: '0 auto' }}
                                            component="img"
                                            image={`${item.img}`}
                                            alt={`${item.title}`}
                                        />
                                    </Stack>

                                </Card>
                            </Grid>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Box>
    );
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];

export default Gallery;