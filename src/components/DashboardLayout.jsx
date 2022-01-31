import DashMainCard from "./DashMainCard";

export default function DashboardLayout() {
    return (
        <div className='grid grid-cols-2'>
        <DashMainCard balance={10000}/>
        </div>
    )
}
