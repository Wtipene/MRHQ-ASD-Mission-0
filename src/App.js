import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Images from "./components/Images";
import {HeaderProvider} from './context/HeaderContext'


function App() {
  return (
    <HeaderProvider>
    <div className="App">
      <Header />
      <MainBody />
      <Images />
    </div>
    </HeaderProvider>
  );
}

export default App;
