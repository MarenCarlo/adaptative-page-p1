import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const messages = [
    {
        id: 1,
        primary: 'Photoshop vs Ilustrator',
        secondary: "Jhon Doe: Creo que photoshop es mas completo que cualqier otro programa de diseño grafico",
        group: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Fotografias del mundo',
        secondary: `Jane Doe: Nunca he ido a ese lugar de la foto, pero debe ser maravilloso!!`,
        group: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Nikon vs Cannon',
        secondary: 'Jhon Doe: Supongo que lo que dices esta bien... buen argumento...',
        group: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Arte y Más',
        secondary: 'Jane Doe: En lo personal utilizo pinceles en el oleo contra el lienzo, no me gusta mucho lo digital...',
        group: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Equipo Técnico",
        secondary: 'Jhon Doe: Deberias de probar a limpiar el lente... muchas veces eso funciona... sino llevala al técnico...',
        group: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Feedback Artístico',
        secondary: `Jane Doe: Tienes muy buena técnica para los pinceles digitales!!`,
        group: '/static/images/avatar/5.jpg',
    },
];

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    background: '#0153D9',
    color: '#000',
    margin: '0 auto',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square sx={{ pb: '50px', my: '-10%' }}>
                <Typography id='Novedades' variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0, fontFamily: 'Lobster, cursive', fontSize: '32pt' }}>
                    Foros
                </Typography>
                <Typography variant="h5" gutterBottom component="div" sx={{ pb: 0, fontFamily: 'arial', fontSize: '14pt' }}>
                    (Discuciones Grupales Activas)
                </Typography>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, group }) => (
                        <React.Fragment key={id}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt="Group Picture" src={group} />
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, boxShadow: '-3px 2px 20px 1px #353535' }}>
                <Toolbar>
                    <StyledFab aria-label="add">
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
