const axios = require("axios").default;
require("dotenv").config();

const vaidateTwitch = async (res, req) => {
  try {
    const response = await axios.get(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
    );

    if (response.ok) {
      console.log(response);
      return response;
    } else {
      alert("error twitch api key failed");
    }
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
