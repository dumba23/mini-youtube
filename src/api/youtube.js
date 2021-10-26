import axios from 'axios';

const KEY = 'AIzaSyBpqcbcc2RhPNk7yC6Y47u137wRCCnaLvE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY
    }
});