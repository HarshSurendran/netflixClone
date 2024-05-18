import Banner from './components/banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/rowPost/RowPost';
import { originals, actions, trending} from './urls'
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={trending} title="Trending" />
      <RowPost url={originals} title="Netflix Originals" isSmall/>
      <RowPost url={actions} title="Action" isSmall/>
    </div>
  );
}

export default App;
