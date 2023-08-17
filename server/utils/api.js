const axios = require("axios").default;
require("dotenv").config();

const vaidateTwitch = async () => {

  try {
      const response = await axios.request({
        method: 'post',
        url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
      }).then(function (response) {
        return response.data
      });
      return response
  } catch (error) {
    console.error("Error validating token with Twitch", error);
  }
};

module.exports = vaidateTwitch

