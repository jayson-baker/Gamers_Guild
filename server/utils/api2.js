//for some reason it doesn't like haveing both calls in the same folder so I moved one here
const axios = require("axios").default;
require("dotenv").config();
const apiCall = async (searched, At,  ) => {
    try {
        const TK = At
    const options = {
      method: 'POST',
      url: 'https://api.igdb.com/v4/games',
      headers: {
        'Content-Type': 'text/plain',
        'Client-ID': 'dyt0e36nxi2ypu2jzjx0vn65psi0ff',
        Authorization: `Bearer ${TK}`
      },
      data: `\nfields id,name,cover;\nwhere name ~ "${searched}"*;\nsort id asc;\nlimit 10;`
    };
    const requestOptions = await axios.request(options)
      .then( async function (response) {
          return response.data[0]
        });
        let cover = requestOptions.cover
        console.log(cover)
       const getImage = setTimeout(async () => {
            const image = await getCover(TK, cover);
            console.log(image);
            return image
        }, 500)
        console.log(requestOptions);
        let id = requestOptions.id;
        let name = requestOptions.name;
        let image = getImage
        return {id, name, image}
  } catch (error) {
    console.error("Error validating token with Twitch", error);
  }
  }
  const getCover = async (At, id) => {
    const cover = {
        method: 'POST',
        url: 'https://api.igdb.com/v4/covers',
        headers: {
          'Content-Type': 'text/plain',
          'Client-ID': 'dyt0e36nxi2ypu2jzjx0vn65psi0ff',
          Authorization: `Bearer ${At}`
        },
        data: `\nfields url;\nwhere id = ${id};\nlimit 1;`
      };
    const image = await axios.request(cover)
    .then( async function (response) {
        return response.data[0].url
      });
  }
  
  module.exports = apiCall