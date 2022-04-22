import './App.css';
import NavBar from './components/navbar';
import Header from './components/header'
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FFF',
      },
      secondary: {
        main: '#f50057',
      },
      text: {
        secondary: 'rgba(0,0,0,0.87)',
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <NavBar />
        <Container maxWidth="lg" >
          <Header />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
