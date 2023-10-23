// Data format:
//
// "rankings": {
// "2023": {

//     "rankings": {
//         "7": {
//             "submissions": {
//                 "peit": {
//                     "bpm": "123",
//                         "difficulty": "13",
//                         "songName": "Kiss Kiss Kiss",
//                         "userName": "peit"
//                     }
//                 }
//             }
//         }
//     }
// },

const API_BASE_URL = 'https://stamina-pr-default-rtdb.europe-west1.firebasedatabase.app';

export default {
    namespaced: true,
    state() {
        return {
            // the ranking
            seasons: [],
        }
    },
    mutations: {
        setSeasons(state, season) {
            state.seasons = season;
        },
        setRanking(state, payload) {
            const season = state.seasons.find((season) => season.year === payload.year);
            season.rankings[payload.month] = payload.ranking;
        }
    },
    actions: {
        async loadAllSeasonRankings(context) {
            await fetch(`${API_BASE_URL}/rankings.json`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((data) => {
                    const seasons = [];
                    for (const key in data) {
                        const season = {
                            year: key,
                            isCurrent: data[key].isCurrent,
                            rankings: data[key].rankings
                        };
                        seasons.push(season); // Push each season into the array
                    }
                    context.commit('setSeasons', seasons); // Set the entire array
                })
        },
        addToRanking(context, payload) {
            const submission = {
                userName: payload.userName,
                songName: payload.songName,
                bpm: payload.bpm,
                difficulty: payload.difficulty
            };
            fetch(`${API_BASE_URL}/rankings/${payload.year}/rankings/${payload.month}/submissions/${payload.userName}.json`, {
                method: 'PUT',
                body: JSON.stringify(submission),
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
        },
    },
    getters: {
        currentSeason(state) {
            return state.seasons.find((season) => season.isCurrent);
        },
        rankingOfMonth: (state) => (month, year) => {
            const currentSeason = state.seasons.find((season) => season.year === year);

            if (currentSeason && currentSeason.rankings && currentSeason.rankings[month]) {
                return currentSeason.rankings[month];
            } else {
                return;
            }
        },
        getRanking(state) {
            return state.seasons;
        }
    }
}
