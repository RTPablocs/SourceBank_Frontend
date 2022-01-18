interface InputProps {
    placeholder: string,
    type: string
}


const Input: React.FC<InputProps> = ({placeholder, type}) => {
    return (
        <div className="relative">
            <input type={type} id="rounded-text"
                   className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300
                   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none
                   focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder={placeholder}/>
        </div>
    )
}

export default Input