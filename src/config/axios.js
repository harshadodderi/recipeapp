import Axios from 'axios';

const axios = Axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/',
});
export default axios;
