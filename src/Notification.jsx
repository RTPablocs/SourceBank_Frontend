import Icon from "./components/Icon";

export default function Notification() {
    return (
        <li className="flex items-center my-6 space-x-2">
            <a href="#" className="block relative">
                <Icon name={"AlertCircle"}
                     className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div className="flex flex-col">
                <span
                    className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                    Charlie Rabiller
                </span>
                <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                    Hey John ! Do you read the NextJS doc ?
                </span>
            </div>
        </li>
    )
}
