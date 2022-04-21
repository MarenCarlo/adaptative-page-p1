import './App.css';
import NavBar from './components/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

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
        <Container></Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
