export default function WebSocketService(){
    return new WebSocket(`ws://10.42.0.1:8000/user/me/?token=${localStorage.getItem('auth')}`)
}
