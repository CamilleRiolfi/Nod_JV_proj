import axios from 'axios';

const TestServerController = {
  load: () => new Promise((success) => {
    const body = { username: 'tetet', password: 'zererere' };
    axios.get('http://localhost:8080/testroute/test/22/', body).then((response) => {
      success(response.data);
    });
  }),
};
export default TestServerController;
