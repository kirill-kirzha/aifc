import './styles/App.css';
import {Provider} from "react-redux";
import {AppRouter} from "./AppRouter";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
            <div className="App">
              <AppRouter />
            </div>
      </Provider>
  );
}

export default App;
