import Icon from "./Icon";

export default function Notification({data}) {
    return (
        <li className={`flex items-center my-6 space-x-2 ${data.status === 0? "text-gray-200": "text-blue-500"}`}>
            <a href="#" className="block relative">
                <Icon name={data.status === 1 ? "AlertCircle": "CheckCircle"}
                     className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div className="flex flex-col">
                <span
                    className={`text-sm font-semibold dark:text-white ml-2 ${data.status === 0? "text-gray-200": "text-blue-500"}`}>
                    {data.name}
                </span>
                <span className={`text-sm dark:text-gray-300 ml-2 ${data.status === 0? "text-gray-200": "text-blue-500"}`}>
                    {data.message}
                </span>
            </div>
        </li>
    )
}
