import Button from "./Button";

function Sidebar ({ handleClick }){

    return(
        <>
        <aside className="container">
            <ul className="flex bg-zinc-900 max-w-80 w-1/5 h-screen mt-20 rounded-tr-3xl flex-col md:w-72">
                <li>
                <h2 className="text-white p-10">Your Projects</h2>
                </li>
                <li>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <Button 
                        content='Add New +'
                        onClick={handleClick}/>
                </div>
                </li>
            </ul>
        </aside>
        </>
    );
};

export default Sidebar;
