import Container from "./Container";
import NewProject from "./NewProject";
import Sidebar from "./Sidebar";

function HomePage() {



    return (
        <>
            <Sidebar />
            <Container>
                <NewProject />
            </Container>
        </>
            )
};

            export default HomePage;