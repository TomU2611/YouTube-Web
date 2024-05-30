import logo from './logo.svg';
import './App.css';
import TopBAr from './components/TopBar';
import SideBar from './components/SideBar';
import VideoList from './components/VideoList';
import {defaultVideos} from './data/videos';

function App() {
  return (
    <div className="App">
      <VideoList videos={defaultVideos}/>
    </div>
  );
}

export default App;
