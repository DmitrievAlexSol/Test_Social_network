import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/*<Profile />*/}
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dialogsInput={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
