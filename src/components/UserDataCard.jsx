import Avatar, {genConfig} from "react-nice-avatar";


export default function UserDataCard({user}) {
    const conf = genConfig()
    return (
        <div className="mb-4">

            <div className="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800">
                <div className="flex flex-row items-start gap-4">
                    <Avatar className="w-28 h-28 rounded-lg" {...conf}/>
                    <div className="h-28 w-full flex flex-col justify-between">
                        <div>
                            <p className="text-gray-800 dark:text-white text-xl font-medium">
                                {user ? `${user.first_name} ${user.last_name}` : ''}
                            </p>
                            <p className="text-gray-400 text-xs">
                                {user ? `${user.email}` : ''}
                            </p>
                        </div>
                        <div className="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                                <p className="flex flex-col">
                                    Movements
                                    <span className="text-black dark:text-indigo-500 font-bold text-center">
                            {user ? user.movements.length : 'None'}
                        </span>
                                </p>
                                <p className="flex flex-col">
                                    Total Spent
                                    <span className="text-black dark:text-indigo-500 font-bold text-center">
                            {user ? Math.abs(user.movements.filter(movement => movement.amount < 0).map(m => m.amount).reduce((a, b) => a + b, 0)).toFixed(2) : 0} €
                        </span>
                                </p>
                                <p className="flex flex-col">
                                    Last Movement
                                    <span className="text-black dark:text-indigo-500 font-bold text-center">
                            {user > 0 ? new Date(user.movements[0].date).toLocaleDateString() : 'Never'}
                        </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
