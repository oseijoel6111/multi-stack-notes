import { useState, useContext } from "react";
import Navbar from "./components/Navbar";
import SingleTask from "./components/SingleTask";
import TaskModal from "./components/TaskModal";
import TaskContext from "./context/TaskContext";

export default function App() {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("all-tasks");
  const tasks = useContext(TaskContext);
  const handleNavLinkClick = (id) => {
    setActiveNav(id);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TaskContext.Provider value={tasks}>
      <div className="page-content container note-has-grid">
        <Navbar addTaskEvent={handleOpen} hadleNavClick={handleNavLinkClick} />
        <div className="tab-content bg-transparent">
          <div id="note-full-container" className="note-has-grid row">
            {tasks.map((task, index)=>(
              <SingleTask activeNav={activeNav} key={index} task={task} />
            ))}
          </div>
        </div>
        <TaskModal modalOpen={open} modalClose={handleClose} />
      </div>
    </TaskContext.Provider>
  );
}
