const axios = require("axios").default;
require("dotenv").config();

const vaidateTwitch = async () => {

  try {
      const response = await axios.request({
        method: 'post',
        url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
      }).then(function (response) {
        console.log(response.data);
      });
  } catch (error) {
    console.error("Error validating token with Twitch", error);
  }
};

async function apiCall(req, res) {
  const requestOptions = await axios({
    method: "post",
    url: "https://api.igdb.com/v4/games",
    headers: {
      Client_ID: process.env.TWITCH_CLIENT_ID,
      Authorization: `${req.body.token.apiKey.token_type}  ${req.body.token.apiKey.access_token}`,
    },
  });
}

module.exports = vaidateTwitch;
