import { useState } from "react";
import Button from "./Button";
import Input from "./Input"

function NewProject() {
    const [newProject, setNewProject] = useState({
        title: '',
        manager: '',
        description: '',
        date: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProject(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitProject = event => {
        event.preventDefault();
    }

    return (
        <section>
        <form onSubmit={submitProject} className="m-60 p-1">
            {/* <label className="m-1 p-1">
                Project Title
                <input
                    name='title'
                    type="text"
                    className="m-1 p-1"
                    value={newProject.title}
                    onChange={handleInputChange}
                    required
                /> */}
                <Input 
                    name='title'
                    type='text'
                    value={newProject.title}
                    onChange={handleInputChange}>
                        Project Title
                </Input>
                <Input 
                    name='title'
                    type='text'
                    value={newProject.title}
                    onChange={handleInputChange}>
                        Project Title
                </Input>
            {/* </label> */}
            {/* <label className="m-1 p-1">
                Manager
                <input
                    name='manager'
                    type="text"
                    className="m-1 p-1"
                    value={newProject.manager}
                    onChange={handleInputChange}
                    required
                />
            </label> */}
            <label className="m-1 p-1">
                Project Description
                <textarea
                    name='description'
                    rows="4"
                    cols="50"
                    className="m-1 p-1"
                    value={newProject.description}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label className="m-1 p-1">
                Due Date
                <input
                    name='date'
                    type="date"
                    className="m-1 p-1"
                    value={newProject.date}
                    onChange={handleInputChange}
                    required
                />
            </label>
        </form>
            <Button
                content="Submit"
                type="submit"
            />
        </section>
    );
}

export default NewProject;