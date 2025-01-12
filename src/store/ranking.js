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
                        if (data[key].rankings && Array.isArray(data[key].rankings)) {
                            const rankingFiltered = data[key].rankings.filter((ranking) => ranking !== null)
                            const season = {
                                year: key,
                                isCurrent: data[key].isCurrent,
                                rankings: rankingFiltered
                            };
                            seasons.push(season); // Push each season into the array
                        } else {
                            console.error(`Invalid rankings data for year ${key}`);
                        }
                    }
                    context.commit('setSeasons', seasons); // Set the entire array
                })

        },
        addToRanking(context, payload) {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const submission = {
                userName: payload.userName,
                songName: payload.songName,
                bpm: payload.bpm,
                difficulty: payload.difficulty,
                date: months[payload.month - 1] + " " + payload.year
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
        currentSeason: (state) => (year) => {
            if (year) {
                return state.seasons.find((season) => season.year === year);
            }
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
        },
        getHighestRankingScores: (state, getters) => (year) => {
            const currentSeason = getters.currentSeason(year);

            if (currentSeason && currentSeason.rankings) {
                const highestScores = {};

                for (const month in currentSeason.rankings) {
                    const monthData = currentSeason.rankings[month];

                    if (monthData && monthData.submissions) {
                        const submissions = monthData.submissions;

                        for (const user in submissions) {
                            const submission = submissions[user];
                            const currentHighest = highestScores[user];

                            if (!currentHighest || submission.difficulty > currentHighest.difficulty) {
                                highestScores[user] = {
                                    difficulty: submission.difficulty,
                                    songName: submission.songName,
                                    bpm: submission.bpm,
                                    date: submission.date
                                };
                            }
                        }
                    }
                }

                return highestScores;
            } else {
                console.error("Current season or rankings not available:", currentSeason);
                return {};
            }
        }
    }
}
