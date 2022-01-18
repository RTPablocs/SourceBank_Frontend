import * as icons from 'lucide-react'

interface iconProps {
    name: string,
    color?: string
    size?: string
}


const Icon: React.FC<iconProps> = ({name, color, size}) => {
    // @ts-ignore
    const LucideIcon = icons[name]
    return (
        <LucideIcon color={color} size={size}/>
    )
}

export default Icon