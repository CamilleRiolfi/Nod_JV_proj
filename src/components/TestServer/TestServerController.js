import axios from 'axios';

const TestServerController = {
  load: () => new Promise((success) => {
    const body = { username: 'tetet', password: 'zererere' };
    axios.post('http://localhost:8080/authentification/', body).then((response) => {
      success(response.data);
    });
  }),
};
export default TestServerController;
