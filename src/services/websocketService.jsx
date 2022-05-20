export default function WebSocketService(){
    return new WebSocket(`ws://${process.env.REACT_APP_BASE_URL}/user/me/?token=${localStorage.getItem('auth')}`)
}
