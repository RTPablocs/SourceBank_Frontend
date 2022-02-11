export default function Input({placeholder, type, ...rest}) {
    return (
        <div className="relative">
            <input type={type}
                   className="rounded-text rounded-lg flex-1 appearance-none border border-gray-300
                   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none
                   focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder={placeholder} {...rest}/>
        </div>
    )
}
