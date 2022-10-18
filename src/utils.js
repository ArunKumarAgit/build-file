import axios from 'axios';
//create a new instance of axios with a custom config.
const github = axios.create({
  baseURL: 'https://api.github.com/users',
  timeout: 15000,
});

export { github };
