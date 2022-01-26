import useUser from "../hooks/useUser";
import {useEffect} from "react";

export default function DashboardLayout() {
    const {user} = useUser();
    useEffect(() => {
        console.log(user);
    })
    return (
        <div>

        </div>
    )
}
