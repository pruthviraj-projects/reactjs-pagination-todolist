import logo from "./logo.svg";
import "./App.css";
import PaginationComponent from "./components/PaginationComponent";
import { Pagination } from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <PaginationComponent /> */}
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
