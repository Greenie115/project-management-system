function Button ({ content, onClick }) {
    return(
        <button className="bg-green-500 max-w-28 m-2 p-2 rounded-sm hover:bg-green-400"
            onClick={onClick}
        >{content}</button>
    )
}; 

export default Button;