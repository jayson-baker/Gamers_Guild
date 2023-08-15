import apicalypse from 'apicalypse';
 require("dotenv").config();

 async function apiCall(game){
    const requestOptions = {
        queryMethod: 'url',
        method: 'post', // The default is `get`
        baseURL: 'https://api.igdb.com/v4/games',
        headers: {
            'Accept': 'application/json'
        },
        responseType: 'json',
        timeout: 3000, // 1 second timeout
        auth: { // Basic auth
            bearer: 'janedoe',
            access_token: 's00pers3cret'
        }
    };
                try {
                    const response = await await apicalypse(rawQueryString)
                    .search(game)

                    const allGames = response.data.games.allGames;
                    setGames(allGames)
                } catch (error) {
                    console.error('Error getting games', error)
                }
            

    }