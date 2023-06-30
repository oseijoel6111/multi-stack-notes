import { Nav } from 'react-bootstrap';

export default function Navbar({ addTaskEvent, hadleNavClick }) {
  return (
    <>
      <Nav className='nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center'>
        <Nav.Item>
          <Nav.Link onClick={() => hadleNavClick('all-tasks')} href='#' className='nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active' id='all-tasks' >
            <i className='icon-layers mr-1'></i><span className="d-none d-md-block">All Notes </span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => hadleNavClick('progress')} className='nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2' id='note-business'>
            <i className="icon-briefcase mr-1"></i><span className="d-none d-md-block">Progress</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => hadleNavClick('completed')} className='nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2' id='completed'>
            <i className="icon-share-alt mr-1"></i><span className="d-none d-md-block">Completed</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav-item ml-auto'>
          <Nav.Link onClick={addTaskEvent} className='nav-link btn-primary rounded-pill d-flex align-items-center px-3' id='add-notes'>
            <i className="icon-note m-1"></i><span className="d-none d-md-block font-14">Add Notes</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </>
  )
}