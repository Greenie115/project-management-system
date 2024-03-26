function Input({ name, type, value, handleInputChange, children}){
    return(
    <p>
        <label className="m-1 p-1">
            {children}
        <input
            name={name}
            type={type}
            className="m-1 p-1"
            value={value}
            onChange={handleInputChange}
            required
        />
        </label>
     </p>
    )
};

export default Input;

