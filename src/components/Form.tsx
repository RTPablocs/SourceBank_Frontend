import {useForm} from "react-hook-form";
import React from "react";

interface FormProps {
    defaultValues?: any
    children: any,
    onSubmit: any
}

const Form: React.FC<FormProps> = ({defaultValues, children, onSubmit}) => {
    const {handleSubmit, register} = useForm({defaultValues})
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Array.isArray(children) ? children.map((child) => {
                    return child.props.name ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register,
                                key: child.props.name
                            }
                        })
                        : child
                }) :
                children
            }
        </form>
    )
}

export default Form