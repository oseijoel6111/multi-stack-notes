

export default function TaskDropDown() {
    return (
        <>
            <button className="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success">
                <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>progress
            </button>
            <button className="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info">
                <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>
                Completed
            </button>
        </>
    )
}