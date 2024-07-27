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
            // the points
            seasons: [],
        }
    },
    mutations: {
        setSeasons(state, season) {
            state.seasons = season;
        },
        setpoints(state, payload) {
            const season = state.seasons.find((season) => season.year === payload.year);
            season.points[payload.month] = payload.ranking;
        }
    },
    actions: {
        async loadAllSeasonpoints(context) {
            await fetch(`${API_BASE_URL}/points.json`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((data) => {
                    const seasons = [];
                    for (const key in data) {
                        if (data[key].points && Array.isArray(data[key].points)) {
                            const rankingFiltered = data[key].points.filter((ranking) => ranking !== null)
                            const season = {
                                year: key,
                                isCurrent: data[key].isCurrent,
                                points: rankingFiltered
                            };
                            seasons.push(season); // Push each season into the array
                        } else {
                            console.error(`Invalid points data for year ${key}`);
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
            fetch(`${API_BASE_URL}/points/${payload.year}/points/${payload.month}/submissions/${payload.userName}.json`, {
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

            if (currentSeason && currentSeason.points && currentSeason.points[month]) {
                return currentSeason.points[month];
            } else {
                return;
            }
        },
        getRanking(state) {
            return state.seasons;
        },
        getHighestpointscores: (state, getters) => {
            const currentSeason = getters.currentSeason;

            if (currentSeason && currentSeason.points) {
                const highestScores = {};

                for (const month in currentSeason.points) {
                    const monthData = currentSeason.points[month];

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
                console.error("Current season or points not available:", currentSeason);
                return {};
            }
        }
    }
}
