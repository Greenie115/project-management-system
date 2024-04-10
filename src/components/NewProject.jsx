import { useRef } from "react";
import Button from "./Button";
import Input from "./Input"

function NewProject({ onAdd }) {

    const title = useRef();
    const manager = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave () {
        const enteredTitle = title.current.value
        const enteredManager = manager.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        onAdd({
            title: enteredTitle,
            manager: enteredManager,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return (
        <div className="w-[35-rem] mt-16"> 
            <form className="flex item-center justify-end gap-4 my-4 flex-col">
                <Input
                    ref={title}
                    type='text'>
                    Project Title
                </Input>
                <Input
                    ref={manager}
                    type='text'
                   >
                    Manager
                </Input>
                <Input
                    ref={description}
                    type='text'
                    textArea >
                    Project Description
                </Input>
                <Input
                    ref={dueDate}
                    type='date'
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