import './app/styles/App.scss';
import {AppRouter} from "./app/AppRouter";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU } from '@mui/x-date-pickers/locales';

// @ts-ignore
const tg = window.Telegram.WebApp
tg.expand()
tg.isClosingConfirmationEnabled = true

const theme = createTheme(
    {
        palette: {
            primary: { main: '#1976d2' },
        },
    },
    ruRU,
);

function App() {
  return (
      <ThemeProvider theme={theme}>
            <div className="App">
              <AppRouter />
            </div>
      </ThemeProvider>
  );
}

export default App;
