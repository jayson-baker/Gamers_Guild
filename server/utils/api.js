const axios = require(axios);
require("dotenv").config();

async function vaidateTwitch(res, req) {
  try {
    const response = await axios.post(
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
}
module.exports = validateTwitch;
