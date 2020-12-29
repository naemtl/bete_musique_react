import axios from "axios";

const dataFormatter = (data) => {
    let text;
    if (data.shows.current) {
        if (data.shows.next.length != 0) {
            text = "Live: " + data.shows.current.name + " (" + data.shows.current.starts.slice(11, 16)
                + " - " + data.shows.current.ends.slice(11, 16) + ") ~ Next: " + data.shows.next[0].name;
        }
        else {
            text = "Live: " + data.shows.current.name + " (" + data.shows.current.starts.slice(11, 16)
                + " - " + data.shows.current.ends.slice(11, 16) + ")";
        }
        return text
    }
    else {
        if (data.shows.next.length != 0) {
            text = "Off Air ~ Next: " + data.shows.next[0].name + " (" + data.shows.next[0].starts.slice(11, 16)
                + " - " + data.shows.next[0].ends.slice(11, 16) + ")";
        }
        return text
    }
}

const getBeteInfo = async setter => {
    try {
        const response = await axios.get('https://betemusique.airtime.pro/api/live-info-v2')
        setter(dataFormatter(response.data))
    } catch (error) {
        console.error(error.message);
    }
}

export default getBeteInfo