import logo from './logo.svg';
import './App.css';
import TopBAr from './components/TopBar';
import SideBar from './components/SideBar';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <TopBAr />
      <SideBar />
      <VideoList />

    </div>
  );
}

export default App;
