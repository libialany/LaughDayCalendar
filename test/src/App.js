import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <TodoWrapper />
      </div>
    </DndProvider>
  );
}

export default App;
