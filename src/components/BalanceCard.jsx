import Icon from "./Icon";
import MovementDisplay from "./MovementDisplay";

export default function BalanceCard({balance = 10000}) {
    return (
        <div className="mb-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                          <Icon name='PiggyBank'/>
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-md text-black dark:text-white ml-2">
                                Account Balance
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="block m-auto">
                    <div>
                        <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                            {balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                            <span className="text-4xl"> € </span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-start my-4 space-x-4">
                                            <span
                                                className="px-2 py-1 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100">
                                            RECENT MOVEMENTS
                                        </span>
                </div>
                <div className="overflow-auto h-32">
                    <ul>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                        <MovementDisplay data={{amount: 300, message: 'Initial Payment', status: 0}}/>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                        <MovementDisplay data={{amount: -300, message: 'Initial Payment', status: 2}}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
