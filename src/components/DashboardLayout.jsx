
import SidebarDesktop from "./SidebarDesktop";
import TopBarDesktop from "./TopBarDesktop";
import BalanceCard from "./BalanceCard";
import NotificationsCard from "./NotificationsCard";
import VaultsCard from "./VaultsCard";
import CalendarCard from "./CalendarCard";
import Context from "../context/UserContext";
import MovementRegistration from "./MovementRegistrationCard";
import {useState} from "react";
import UserDataCard from "./UserDataCard";


export default function DashboardLayout() {
    const [isTransferOpen, setTransferOpen] = useState(false)
    return (
            <Context.Consumer>
                {({user, setUser}) => (
                    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                        <div className="flex items-start justify-between">
                            <SidebarDesktop/>
                            <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                                <TopBarDesktop/>
                                <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                                    <div className="flex flex-col flex-wrap sm:flex-row ">
                                        <div className="w-full sm:w-1/2 xl:w-1/3">
                                            <UserDataCard user={user}/>
                                            <BalanceCard data={user} transfer={isTransferOpen} state={setTransferOpen}/>
                                            {isTransferOpen ? <MovementRegistration transfer={isTransferOpen} state={setTransferOpen}/> : <></> }
                                        </div>
                                        <div className="w-full sm:w-1/2 xl:w-1/3">
                                            <NotificationsCard/>
                                            <VaultsCard/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                )}
            </Context.Consumer>
    )
}
