//for some reason it doesn't like haveing both calls in the same folder so I moved one here
const axios = require("axios").default;
require("dotenv").config();
const apiCall = async (req, res) => {
    try {
    console.log(req.body)
    const options = {
      method: 'POST',
      url: 'https://api.igdb.com/v4/games',
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': 'dyt0e36nxi2ypu2jzjx0vn65psi0ff',
        Authorization: 'Bearer 3n1rilphqz8tp7cvncof3fik6oxymr'
      },
      data: `\nfields id,name,cover,rating;\nwhere name ~ "${req.body.name}"*;\nsort id asc;\nlimit 10;"`
    };
      const requestOptions = await axios.request(options)
      .then(function (response) {
          return response.data
        });
        console.log(requestOptions);
        return requestOptions
  } catch (error) {
    console.error("Error validating token with Twitch", error);
  }
  }
  
  module.exports = apiCall