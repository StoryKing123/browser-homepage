import Axios from "axios";

const request = Axios.create();
request.interceptors.response.use((response) => {
  return response.status === 200 && response.data;
});

export default request;
