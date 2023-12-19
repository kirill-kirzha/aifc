import './app/styles/App.scss';
import {AppRouter} from "./app/AppRouter";

// @ts-ignore
const tg = window.Telegram.WebApp

tg.expand()
tg.isClosingConfirmationEnabled = true

function App() {
  return (
            <div className="App">
              <AppRouter />
            </div>
  );
}

export default App;
