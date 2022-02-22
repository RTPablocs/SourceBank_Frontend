import HttpService from "./httpService";


export default function readNotification(id) {
    const reqBody = {'id': id, 'status': 1}
    const http = HttpService(true)
        return http.patch('notifications/read/', reqBody)
            .then((data) => {return data})
            .catch((error) => {return error.response})
    }
