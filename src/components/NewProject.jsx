function NewProject() {
    return (
        <>
            <form className="m-1 p-1">
                <label className="m-1 p-1">
                    Project Title
                </label>
                <input type="text" className="m-1 p-1" required/>

                <label className="m-1 p-1">
                    Manager
                </label>
                <input type="text" className="m-1 p-1" required/>

            </form>
            <form className="m-1 p-1">
                <label className="m-1 p-1">
                    Project Description
                </label>
                <br />
                <textarea rows="4" cols="50" className="m-1 p-1" required/>
            </form>
            <form >
            <label className="m-1 p-1" required>
                    Due Date
                </label>
                <input type="date" className="m-1 p-1" required/>
            </form>
        </>
    )
};

export default NewProject;