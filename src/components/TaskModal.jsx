import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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
                                                            className="form-control"
                                                            placeholder="Title"
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
                                    id="btn-n-add"
                                    className="btn btn-info"
                                    disabled="disabled"
                                    style={{ margin: "5px" }}
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