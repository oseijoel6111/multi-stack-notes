import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TaskContext from "../context/TaskContext";
import { createContext, useContext, useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
};

export default function TaskModal({ modalOpen, modalClose }) {
    const tasks = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTask = (e)=>{ 
        e.preventDefault();
        tasks.push({title, description, date: new Date().toDateString(), status: 'progress'});
        createContext(tasks)
        console.log(tasks);
    }
    const onTitleChange = (e)=>{
            setTitle(e.target.value)
            console.log(title);
    }
    const onDescriptionChange = (e)=>{
            setDescription(e.target.value)
    }
    return (
        <>
            <Modal open={modalOpen} onClose={modalClose}>
                <Box sx={style}>
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content border-0">
                            <div className="modal-header bg-info text-white p-2">
                                <h5 className="modal-title text-white">Add Notes</h5>
                                <button
                                    type="button"
                                    className="close text-white"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="notes-box">
                                    <div
                                        className="notes-content"
                                        style={{ margin: "20px" }}
                                    >
                                        <form action="#" id="addnotesmodalTitle">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="note-title">
                                                        <label>Note Title</label>
                                                        <input
                                                            type="text"
                                                            id="note-has-title"
                                                            value={title}
                                                            className="form-control"
                                                            placeholder="Title"
                                                            onChange={onTitleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="note-description">
                                                        <label>Note Description</label>
                                                        <textarea
                                                            id="note-has-description"
                                                            className="form-control"
                                                            placeholder="Description"
                                                            rows="3"
                                                            value={description}
                                                            onChange={onDescriptionChange}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer" style={{ margin: "14px" }}>
                                <button className="btn btn-danger" data-dismiss="modal">
                                    Discard
                                </button>
                                <button
                                    onClick={addTask}
                                    id="btn-n-add"
                                    className="btn btn-info"
                                    style={{ margin: "5px", color: '#fff' }}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>

        </>
    )
}