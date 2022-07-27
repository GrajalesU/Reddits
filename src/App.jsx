import SubredditDetail from "./components/SubredditDetail";
import SubredditList from "./components/SubredditList";

function App() {
  return (
    <div className="container">
      <hgroup>
        <h1> PRUEBA TÉCNICA:</h1>
        <h2>r/Juan Manuel Grajales</h2>
      </hgroup>
      <SubredditList />
      <SubredditDetail />
    </div>
  );
}

export default App;
