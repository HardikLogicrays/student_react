import "./App.css";
import GetAPI from "./componants/GetAPI";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import "@fortawesome/free-solid-svg-icons/index"
import PostAPI from "./componants/PostAPI";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PutAPI from "./componants/PutAPI";
import DeleteAPI from "./componants/DeleteAPI";

function App() {
  const HOST = "https://student-django.onrender.com";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetAPI host={HOST} />}></Route>
          <Route path="/create" element={<PostAPI host={HOST} />}></Route>
          <Route path="/update" element={<PutAPI host={HOST} />}></Route>
          <Route path="/delete" element={<DeleteAPI host={HOST} />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <GetAPI />
      <PostAPI /> */}
    </div>
  );
}

export default App;
