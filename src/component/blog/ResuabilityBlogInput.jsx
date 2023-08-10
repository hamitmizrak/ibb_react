// rfc
import React from 'react'

// FUNCTION
export default function ResuabilityBlogInput(props) {

    // props
    const { type, classNameProps, id, name, placeholder, required, autoFocus, onChange, title, errors } = props;

    // Boostrap validation(Doğrulama)
    const className=name ? "is-invalid form-control":"form-control";

    // RETURN
    return (
        <React.Fragment>
            <div className="form-group mb-3">
                <label htmlFor={id}>{placeholder}</label>
                <input
                    type={type}
                    className={classNameProps}
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
