var nhlApi = (function() {
    let statsUrl = 'https://statsapi.web.nhl.com/api/v1';
    let recordsUrl = 'https://records.nhl.com/site/api';

    let getTeams = function() {
        let url = `${statsUrl}/teams`;
        return fetch(url);
    };

    let getSeasons = function() {
        let url = `${statsUrl}/seasons`;
        return fetch(url);
    };

    let getFranchise = function() {
        let url = `${recordsUrl}/franchise`;
        return fetch(url, {
            mode: 'no-cors'
        });
    };

    return {
        getTeams: getTeams,
        getSeasons: getSeasons,
        getFranchise: getFranchise
    };
})();
