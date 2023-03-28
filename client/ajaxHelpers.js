// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2301-FTB-PT-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    // try {
    //     const response = await fetch(
    //         APIURL + 'players'
    //     );
    //     const result = await response.json();
    //     console.log(result);
    // } catch (err) {
    //     console.log(err);
    // }
    try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result.data.players;
      } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
      }

};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const sinResponse = await fetch('${APIURL}players/${playerId}');
    const sinResult = await sinResponse.json();
    console.log(sinResult.data.player);
    if (sinResult.error) {
      throw sinResult.error
    }
    return sinResult.data.player;
  } catch (error) {
    console.error('Uh oh, trouble fetching players!', error);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch( 
      '${APIURL}players',
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',          
        },
        body: JSON.stringify(playerObj),
      }
    );
    const result = await response.json();
    console.log(result);  
  } catch (error){
    console.log('Uh oh, trouble fetching players!', error);
  }

};

export const removePlayer = async (playerId) => {

};
