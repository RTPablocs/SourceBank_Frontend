export default function Vault({data}) {
    return (
        <div>
            <div className="block m-auto">
                <div>
                    <span className={"text-xl block break-all"}>{data.name}</span>
                    <span className="text-sm inline-block text-gray-500 dark:text-gray-100">
                                                Current Amount :
                                                <span className="text-gray-700 dark:text-white font-bold">
                                                    {data.currentAmount}
                                                </span>
                                                /{data.targetAmount}
                                            </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                    <div
                        className="w-1/12 h-full text-center text-xs text-white bg-blue-500 rounded-full">
                    </div>
                </div>
            </div>
            <span
                className="px-2 py-1 flex w-40 mt-4 items-center text-xs rounded-md font-semibold text-gray-500 bg-gray-100">
                                        END DATE : 18 JUN 2023
                                    </span>
        </div>
    )
}
