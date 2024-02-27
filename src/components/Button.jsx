function Button ({ content, onClick }) {
    return(
        <button className="bg-green-500 max-w-28 m-2 p-2 rounded-sm"
            onClick={onClick}
        >{content}</button>
    )
}; 

export default Button;