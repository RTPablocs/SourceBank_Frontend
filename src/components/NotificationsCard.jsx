import Notification from "./Notification";

export default function NotificationsCard () {
    return (
        <div className="mb-4 sm:ml-4 xl:mr-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full ">
                <p className="font-bold text-md text-black dark:text-white">
                    Notifications
                </p>
                <ul className={"h-80 overflow-auto"}>
                    <Notification data={{message: 'New Transfer Alert', status: 1, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                </ul>
            </div>
        </div>
    )
}
