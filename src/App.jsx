import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
