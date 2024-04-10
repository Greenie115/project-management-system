import { forwardRef } from "react";

const Input = forwardRef(function Input({ name, type, children, ...props }, ref) {
    return (
        <p>
            {props.textArea ?
                <>
                    <label className="p-1">
                        {children}
                    </label>
                    <p>
                        <textarea
                            ref={ref}
                            type={type}
                            rows='4'
                            col='10'
                            className="m-1 p-1 w-full"
                            value={props.value}
                            onChange={props.onChange}
                            required
                        />
                    </p>
                </> :
                <>
                    <label className="p-1">
                        {children}
                    </label>
                    <p>
                        <input
                            ref={ref}
                            type={type}
                            rows="4"
                            cols="50"
                            className="m-1 p-1"
                            value={props.value}
                            onChange={props.onChange}
                            required />
                    </p>
                </>}
        </p>
    )
});

export default Input;

