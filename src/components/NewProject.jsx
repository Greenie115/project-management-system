import { useState } from "react";
import Button from "./Button";
import Input from "./Input"
import Container from "./Container";

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
        <Container>
        <form onSubmit={submitProject} className="p-1">
                <Input 
                    name='title'
                    type='text'
                    value={newProject.title}
                    onChange={handleInputChange}>
                        Project Title
                </Input>
                <Input 
                    name='manager'
                    type='text'
                    value={newProject.manager}
                    onChange={handleInputChange}>
                        Manager
                </Input>
                <Input 
                    name='description'
                    type='text'
                    value={newProject.description}
                    onChange={handleInputChange}
                    textArea >
                        Project Description
                </Input>
                <Input 
                    name='due-date'
                    type='date'
                    value={newProject.date}
                    onChange={handleInputChange}
                    >
                        Due Date 
                </Input>
        </form>
            <Button
                content="Submit"
                type="submit"
            />
    </Container>
    );
}

export default NewProject;