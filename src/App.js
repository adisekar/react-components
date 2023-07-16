import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import SortableTablePage from "./pages/SortableTablePage";
import StarRatingPage from "./pages/StarRatingPage";
import TextExpanderPage from "./pages/TextExpanderPage";
import StepperPage from "./pages/StepperPage";
import CommentPage from "./pages/CommentsPage";

function App() {
  return (
    <div className="App container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/buttons">
          <ButtonPage />
        </Route>

        <Route path="/accordion">
          <AccordionPage />
        </Route>

        <Route path="/dropdown">
          <DropdownPage />
        </Route>

        <Route path="/modal">
          <ModalPage />
        </Route>

        <Route path="/table">
          <TablePage />
        </Route>

        <Route path="/sortable-table">
          <SortableTablePage />
        </Route>

        <Route path="/star-rating">
          <StarRatingPage />
        </Route>

        <Route path="/text-expander">
          <TextExpanderPage />
        </Route>

        <Route path="/stepper">
          <StepperPage />
        </Route>

        <Route path="/comments">
          <CommentPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
