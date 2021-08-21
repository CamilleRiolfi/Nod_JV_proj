import axios from 'axios';

const TestServerController = {
  load: () => new Promise((success) => {
    axios.get('http://localhost:8080/authentification/').then((response) => {
      success(response.data);
    });
  }),
};
export default TestServerController;
