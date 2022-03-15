import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Photoes from './components/Photoes/Photoes';





const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Footer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile postsData={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs" element={<Dialogs data={props.state.dialogsPage} dispatch={props.dispatch} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/photoes" element={<Photoes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
