import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input"

function NewProject({ onStart }) {
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

    const title = useRef();
    const manager = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave () {
        const enteredTitle = title.current.value
        const enteredManager = manager.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value
    }

    return (
        <div className="w-[35-rem] mt-16"> 
            <form onSubmit={submitProject} className="flex item-center justify-end gap-4 my-4 flex-col">
                <Input
                    ref={title}
                    type='text'
                    value={newProject.title}
                    onChange={handleInputChange}>
                    Project Title
                </Input>
                <Input
                    ref={manager}
                    type='text'
                    value={newProject.manager}
                    onChange={handleInputChange}>
                    Manager
                </Input>
                <Input
                    ref={description}
                    type='text'
                    value={newProject.description}
                    onChange={handleInputChange}
                    textArea >
                    Project Description
                </Input>
                <Input
                    ref={dueDate}
                    type='date'
                    value={newProject.date}
                    onChange={handleInputChange}
                >
                    Due Date
                </Input>
            </form>
                <Button
                    onClick={handleSave}
                    content="Save"
                    type="submit"
                />
                <Button
                    content='Cancel'
                    type='click'
                     />
        </div>
    );
}

export default NewProject;