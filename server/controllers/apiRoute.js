const router = require("express").Router();
require("dotenv").config();

router.get("/findGames", async (req,res) => {
    try {
        const requestOptions = await axios({
            method: 'get',
            url: 'https://api.igdb.com/v4/search',
            headers: {
                'Accept': 'application/json',
                "Client-ID": process.env.TWITCH_CLIENT_ID,
                'Authorization': `${req.body.token.apiKey.token_type}  ${req.body.token.apiKey.access_token}` 
            },
            data: {
                name: `${req,body.requested}`
              },
          })
          res.json(requestOptions);
    }
    catch (err) {
        res.status(500).json(err);
      };
})

router.get("/apiKey", async (req,res) => {
    try {
        let api = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
        console.log(api);
        const requestOptions = await axios({
            method: 'get',
            url: api,
          })
          res.json(requestOptions);
    }
    catch (err) {
        res.status(500).json(err);
      };
})
module.exports = router;