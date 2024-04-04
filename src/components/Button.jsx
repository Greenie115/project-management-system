function Button ({ content, onClick }) {
    return(
        <button className={content=='Cancel' ? "bg-stone-400 max-w-28 m-2 p-2 rounded-sm hover:bg-stone-300" 
        : "bg-green-500 max-w-28 m-2 p-2 rounded-sm hover:bg-green-400"}
            onClick={onClick}
        >{content}</button>
    )
}; 

export default Button;