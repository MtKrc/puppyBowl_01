// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2301-FTB-PT-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(
            APIURL + 'players'
        );
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.log(err);
    }

};

export const fetchSinglePlayer = async (playerId) => {

};

export const addNewPlayer = async (playerObj) => {

};

export const removePlayer = async (playerId) => {

};
