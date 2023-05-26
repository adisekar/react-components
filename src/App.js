import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Sidebar />
      </Route>

      <Route path="/button">
        <ButtonPage />
      </Route>

      <Route path="/accordion">
        <AccordionPage />
      </Route>

      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  );
}

export default App;
