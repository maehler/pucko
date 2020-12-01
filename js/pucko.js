var pucko = (function() {

    let populateTeams = function() {
        let teamSelect = document.getElementById('teams-select');
        // nhlApi.getTeams().then(response => {
        //     response.json().then(teams => {
        //         for (team of teams.teams) {
        //             let option = document.createElement('option');
        //             let teamName = document.createTextNode(team.name);
        //             option.value = team.id;
        //             option.append(teamName);
        //             teamSelect.append(option);
        //         }
        //     });
        // });
    };

    let populateSeasons = function() {
        let seasonSelect = document.getElementById('seasons-select');
        nhlApi.getSeasons().then(response => {
            response.json().then(seasons => {
                for (season of seasons.seasons) {
                    let option = document.createElement('option');
                    let startYear = new Date(season.regularSeasonStartDate).getFullYear();
                    let endYear = new Date(season.seasonEndDate).getFullYear();
                    let seasonName = document.createTextNode(`${startYear}/${endYear}`);
                    option.value = season.seasonId;
                    option.append(seasonName);
                    seasonSelect.append(option);
                }
            });
        });
    };

    let getTeamsInSeason = function(seasonId) {
        // Get teams from franchise
        // Get start/end season dates from getSeasons
        // Match these dates with the wanted season
        nhlApi.getFranchise().then(response => {
            response.json().then(teams => {
                for (team of teams) {
                    console.log(team);
                }
            }).catch(error => {
                console.error(error);
            });
        });
    };

    let seasonSelect = function(event) {
        let seasonId = event.target.value;
        getTeamsInSeason(seasonId);
    };

    let init = function(options) {
        populateSeasons();
        populateTeams();


        document.getElementById('seasons-select')
            .addEventListener('change', seasonSelect);
    };

    return {
        init: init
    };
})();

pucko.init();
