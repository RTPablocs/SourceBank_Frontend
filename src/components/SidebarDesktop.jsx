import Icon from "./Icon";
import {Link} from "react-router-dom";
import {exterminateToken} from "../services/authService";

export default function SidebarDesktop() {

    return (
        <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                <div className="flex items-center justify-center pt-6 text-gray-500">
                    <Icon name='Landmark' size='40'/>
                </div>
                <nav className="mt-6">
                    <div><a
                        className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                        href="#"><span className="text-left">
                          <Icon name='Home'/>
                    </span><span
                        className="mx-4 text-sm font-normal">Dashboard</span></a>
                        <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                        href="#"><span className="text-left">  <Icon name='CreditCard'/>
                    </span>
                            <span className="mx-4 text-sm font-normal">Cards</span></a>
                        <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="#"><span className="text-left">  <Icon name='Lock'/></span><span
                            className="mx-4 text-sm font-normal">Vaults</span></a>
                        <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="#"><span className="text-left">
                              <Icon name='Bell'/>
                            </span><span
                            className="mx-4 text-sm font-normal">Notifications</span></a>
                        <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="#"><span className="text-left">
                            <Icon name='Settings'/>
                        </span><span className="mx-4 text-sm font-normal">Settings</span></a>
                        <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           to={'/login'} onClick={exterminateToken}><span className="text-left">
                            <Icon name='LogOut'/>
                        </span><span className="mx-4 text-sm font-normal">Logout</span></Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
