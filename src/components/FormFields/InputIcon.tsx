import Icon from "../Icon";


interface Props {
    icon: string
    placeholder: string,
    type: string,
}

const InputIcon: React.FC<Props> = ({icon, placeholder, type, ...rest}) => {
    return (

        <div className="flex relative ">
            <span
                className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <Icon name={icon} color='#7e7e7e' size='20'/>
            </span>
            <input type={type}
                   className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                   placeholder={placeholder} {...rest} />
        </div>

    )
}

export default InputIcon