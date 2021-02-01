import React from "react";
import {
  Route,
  Switch,
  useParams,
  BrowserRouter as Router,
} from "react-router-dom";

import "./components/styles/AppStyle.css";

import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Video from "./components/VideoComponents/Video.js";
import Index from "./components/Index";
import UsersVideo from "./components/VideoComponents/UsersVideos";
import Profile from "./components/User/Profile.js";
import UploadVideo from "./components/VideoComponents/UploadVideo";
import Settings from "./components/Settings/Settings.js";

const App = () => {
  return (
    <div id="main_style">
      <Router>
        <Switch>
          <Route path="/" exact component={Index}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/myVideos" component={UsersVideo}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/video/:videoID" component={Video}></Route>
          <Route path="/uploadVideo" component={UploadVideo}></Route>
          <Route path="/settings" component={Settings}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
