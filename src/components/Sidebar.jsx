import Button from "./Button";

function Sidebar (){

    const handleClick = () => {
        console.log('clicked')
    }

    return(
        <>
        <menu className="container">
            <div className="flex bg-zinc-900 max-w-80 h-screen mt-20 rounded-tr-3xl flex-col">
                <h2 className="text-white p-10">Your Projects</h2>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <Button 
                        content='Add New +'
                        onClick={handleClick}/>
                </div>
            </div>
        </menu>
        </>
    );
};

export default Sidebar;
