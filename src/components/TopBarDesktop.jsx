import Icon from "./Icon";

export default function TopBarDesktop() {
    return (
        <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                        <div className="relative flex items-center w-full lg:w-64 h-full group">
                            <input type="text"
                                   className="block w-full py-1.5 pl-10 pr-2 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                                   placeholder="Search"/>
                        </div>
                    </div>
                    <div
                        className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                        <a href="#" className="block relative">
                           <Icon name='User'/>
                        </a>
                    </div>
                </div>
            </div>
        </header>

    )
}
