export default function WebSocketService(){
    return new WebSocket(`ws://localhost:8000/user/me/?token=${localStorage.getItem('auth')}`)
}