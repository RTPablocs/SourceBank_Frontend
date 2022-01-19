import * as icons from 'lucide-react'

export default function Icon({name, color, size})
{
    const LucideIcon = icons[name]
    return (
        <LucideIcon color={color} size={size}/>
    )
}
