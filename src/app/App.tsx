import './styles/App.scss';
import {Provider} from "react-redux";
import {AppRouter} from "./AppRouter";
import store from "./store";

function App() {
  return (
            <div className="App">
              <AppRouter />
            </div>
  );
}

export default App;
