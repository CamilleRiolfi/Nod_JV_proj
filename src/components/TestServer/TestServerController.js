import axios from 'axios';

const TestServerController = {
  load: (number) => new Promise((success) => {
    axios.get(`http://localhost:8080/testroute/test/${number}`).then((response) => {
      success(response.data);
    });
  }),
  loadPersonnage: () => new Promise((success) => {
    axios.get('http://localhost:8080/player/50').then((response) => {
      success(response.data);
    });
  }),
};
export default TestServerController;
