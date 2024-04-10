import { useState } from "react";
import Container from "./Container";
import NewProject from "./NewProject";
import Sidebar from "./Sidebar";
import WelcomeScreen from "./WelcomeScreen";

function HomePage() {

    const [selectedProject, setSelectedProject] = useState({
        selectedProjectId: undefined,
        projects: []
    })

    function handleNewProject(projectData) {
        setSelectedProject(prevState => {''
            const newProject = {
                ...projectData,
                id: Math.random()
            }
            return {
                ...prevState,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    console.log(selectedProject)

    let content;

    function handleStartingProject() {
        setSelectedProject(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        })
    }

    if (selectedProject.selectedProjectId === undefined) {
        content = <WelcomeScreen onStart={handleStartingProject} />
    } else if (selectedProject.selectedProjectId === null) {
        content = <NewProject onAdd={handleNewProject} />
    }

    return (
        <>
            <Sidebar
                onStart={handleStartingProject} />
            <Container>
                {content}
            </Container>
        </>
    )
};

export default HomePage;