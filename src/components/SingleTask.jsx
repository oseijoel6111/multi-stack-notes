import TaskDropDown from "./TaskDropDown"

export default function SingleTask() {
    return (
        <>
            <div className="col-md-4 single-note-item all-category note-important">
                <div className="card card-body">
                    <span className="side-stick"></span>
                    <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Go for lunch">
                        Go for lunch <i className="point fa fa-circle ml-1 font-10"></i>
                    </h5>
                    <p className="note-date font-12 text-muted">01 April 2002</p>
                    <div className="note-content">
                        <p className="note-inner-content text-muted"
                            data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                            Blandit tempus porttitor aasfs. Integer posuere erat a ante
                            venenatis.
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="mr-1"><i className="fa fa-star favourite-note"></i></span>
                        <span className="mr-1"><i className="fa fa-trash remove-note"></i></span>
                        <div className="ml-auto">
                            <div className="category-selector dropdown">
                                <a className="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#"
                                    role="button" aria-haspopup="true" aria-expanded="false">
                                    <div className="category">
                                        <div className="category-business"></div>
                                        <div className="category-social"></div>
                                        <div className="category-important"></div>
                                        <span className="more-options text-dark"><i className="icon-options-vertical"></i></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right category-menu">
                                        <TaskDropDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}