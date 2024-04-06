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
        content = <NewProject />
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