import axios from "axios";

export default function HttpService() {
    const get = async (path) => {
        await axios.get(path)
            .then(response => response.data)
    }


    return {
        get
    }
}