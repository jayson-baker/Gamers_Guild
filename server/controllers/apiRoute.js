const router = require("express").Router();
require("dotenv").config();

router.get("/games", async (req,res) => {
    try {
        const requestOptions = await axios({
            method: 'post',
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
module.exports = router;