
const API_BASE_URL = 'https://stamina-pr-default-rtdb.europe-west1.firebasedatabase.app';

export default {
    namespaced: true,
    state() {
        return {
            season: {
                name: 'season 1',
                year: 2023,
                isCurrent: true,
                rankings: {
                    7: {
                        isCurrent: true,
                        submissions: [{
                            userName: 'behy',
                            songName: 'Songname',
                            bpm: 123,
                            difficulty: 16
                        }]
                    },
                    8: {
                        isCurrent: false,
                        submissions: []
                    }
                }
            },
        }
    },
    mutations: {
        setSeason(state, season) {
            state.season = season;
        }
    },
    actions: {
        async loadSeason(context, payload) {
            await fetch(`${API_BASE_URL}/rankings/${payload.year}/rankings.json`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                const rankings = {};
                for (const key in data) {
                    rankings[key] = {
                        id: key,
                        isCurrent: data[key].isCurrent,
                        submissions: data[key].submissions
                    };
                }
                const season = {
                    name: `season ${payload.year}`,
                    year: payload.year,
                    isCurrent: true,
                    rankings: rankings
                }
                context.commit('setSeason', season);
            })

        },
        addSubmission(context, payload) {
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
        }
    },
    getters: {
        season(state) {
            return state.season;
        },
        rankingOfMonth: (state) => (month) => {
            return state.season.rankings[month];
        }
    }
}
