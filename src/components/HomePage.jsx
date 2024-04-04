import Container from "./Container";
import NewProject from "./NewProject";
import Sidebar from "./Sidebar";
import WelcomeScreen from "./WelcomeScreen";

function HomePage() {



    return (
        <>
            <Sidebar />
            <Container>
                <WelcomeScreen/>
            </Container>
        </>
            )
};

            export default HomePage;