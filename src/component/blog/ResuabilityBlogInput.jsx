// rfc
import React from 'react'

// FUNCTION
export default function ResuabilityBlogInput(props) {

    const { type, className, id, name, placeholder, required, autoFocus, onChange, title, errors } = props;

    // RETURN
    return (
        <React.Fragment>
            <div className="form-group mb-4">
                <label htmlFor={id}>{placeholder}</label>
                <input
                    type={type}
                    className={className}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autoFocus}
                    onChange={onChange}
                    title={title}
                />
                <span className="text-danger">{errors}</span>
            </div>
        </React.Fragment>
    )
}
