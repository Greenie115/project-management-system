import Button from "./Button";

function Sidebar ({ handleClick }){

    return(
        <>
        <aside className="container">
            <div className="flex bg-zinc-900 max-w-80 w-1/5 h-screen mt-20 rounded-tr-3xl flex-col md:w-72">
                <h2 className="text-white p-10">Your Projects</h2>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <Button 
                        content='Add New +'
                        onClick={handleClick}/>
                </div>
            </div>
        </aside>
        </>
    );
};

export default Sidebar;
