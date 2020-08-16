import Axios from 'axios';

const axios = Axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/',
});
export default axios;

// Added https://cors-anywhere.herokuapp.com/ this link to avoid CORS error
