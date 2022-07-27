import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubredditDetail from "./components/SubredditDetail";
import SubredditList from "./components/SubredditList";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <hgroup>
          <h1> PRUEBA TÉCNICA:</h1>
          <h2>r/Juan Manuel Grajales</h2>
        </hgroup>
        <Routes>
          <Route exact path="/" element={<SubredditList />} />
          <Route path="/subreddit/:id" element={<SubredditDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
