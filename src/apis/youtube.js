import axios from 'axios';

const KEY = "AIzaSyCQFO1SLrNgfrJsGc_B6VsORKK6g30c9Xw";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


