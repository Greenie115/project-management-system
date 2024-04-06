import Button from "./Button";
import LOGO from "../assets/no-projects.png"

function WelcomeScreen({ onStart }) {
    return (
        <>
            <img src={LOGO} alt="Blank project clipboard"
                 className="object-contain w-20 h-20 my-4 mx-auto"
            />
            <p 
                className="my-4"
            >
                No project selected. Please choose or create a project.
            </p>
            <Button
                content='+ Create New Project'
                onClick={onStart}
            />
        </>
    )
};

export default WelcomeScreen;