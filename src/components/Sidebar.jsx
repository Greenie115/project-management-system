import Button from "./Button";

function Sidebar (){

    const handleClick = () => {
        console.log('clicked')
    }

    return(
        <>
        <menu className="container ">
            <div className="bg-zinc-900 max-w-80 h-screen mt-20 rounded-tr-3xl">
                <h2 className="text-white p-10">Your Projects</h2>
                <Button 
                    content='Add New +'
                    onClick={handleClick}/>
            </div>
        </menu>
        </>
    )
};

export default Sidebar;