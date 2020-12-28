import axios from "axios";

const getBeteInfo = async setter => {
    try {
        const response = await axios.get('https://betemusique.airtime.pro/api/live-info-v2')
        setter(response.data.shows)
    } catch (error) {
        console.error(error.message);
    }
}

export default getBeteInfo