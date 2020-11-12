import axios from 'axios';

const _nasaEndPoint = process.env.REACT_APP_NASA_ENDPOINT;
const _nasaKey = process.env.REACT_APP_NASA_KEY;

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {};
    const configURL = config.url;
    if (configURL.includes(_nasaEndPoint)) {
      config.params['api_key'] = _nasaKey;
      config.params['date'] = '2019-08-19';
    }
    return config;
  }, error => {
    return Promise.reject(error);
  }
)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getApod() {
    return axios.get(`${_nasaEndPoint}planetary/apod`);
  },
}