import * as React from "react";
import Navbar from "./components/Navbar";
import SingleTask from "./components/SingleTask";
import TaskModal from "./components/TaskModal";

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="page-content container note-has-grid">
        <Navbar addTaskEvent={handleOpen} />
        <div className="tab-content bg-transparent">
          <div id="note-full-container" className="note-has-grid row">
            <SingleTask />
          </div>
        </div>
        <TaskModal modalOpen={open} modalClose={handleClose} />
      </div>
    </>
  );
}
