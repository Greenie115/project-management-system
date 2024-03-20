import Container from "./Container";
import LOGO from "../../public/logo.png"
import NewProject from "./NewProject";

function HomePage() {
    return (
        <Container>
            <img
                className="max-w-24 p-3 m-3"
                src={LOGO}
                alt="" />
            <h2
                className="text-xl m-1 p-2"
            >Welcome to the project management dashboard.</h2>
            <p>Fill in the details of your first project below</p>
            <NewProject />
        </Container>
    )
};

export default HomePage;