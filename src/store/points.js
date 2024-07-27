const API_BASE_URL = 'https://stamina-pr-default-rtdb.europe-west1.firebasedatabase.app';

export default {
    namespaced: true,
    state() {
        return {
            points: {},
            year: new Date().getFullYear(),
        };
    },
    mutations: {
        setPoints(state, points) {
            state.points[state.year] = points;
        },
        addPoints(state, { userName }) {
            if (!state.points[state.year]) {
                state.points[state.year] = {};
            }
            if (!state.points[state.year][userName]) {
                state.points[state.year][userName] = { usedPoints: 0 };
            }
            state.points[state.year][userName].usedPoints += 1;
        },
        substractPoints(state, { userName }) {
            if (state.points[state.year] && state.points[state.year][userName]) {
                state.points[state.year][userName].usedPoints -= 1;
            }
        }
    },
    actions: {
        async loadAllSeasonPoints({ commit, state }) {
            const year = state.year;
            try {
                const response = await fetch(`${API_BASE_URL}/points/${year}.json`);
                if (response.ok) {
                    const data = await response.json();
                    commit('setPoints', data);
                }
            } catch (error) {
                console.error('Error loading points', error);
            }
        },
        async add({ commit, state }, player) {
            const year = state.year;
            try {
                const response = await fetch(`${API_BASE_URL}/points/${year}/${player.userName}.json`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        usedPoints: player.usedPoints + 1
                    })
                });
                console.log(player);
                if (response.ok) {
                    commit('addPoints', player);
                }
            } catch (error) {
                console.error('Error adding points', error);
            }
        },
        async substract({ commit, state }, player) {
            const year = state.year;
            try {
                const response = await fetch(`${API_BASE_URL}/points/${year}/${player.userName}.json`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        usedPoints: player.usedPoints - 1
                    })
                });
                if (response.ok) {
                    commit('substractPoints', player);
                }
            } catch (error) {
                console.error('Error substracting points', error);
            }
        }
    },
    getters: {
        pointsSeason: (state) => (year) => {
            const yearPoints = state.points[year] || {};
            return Object.keys(yearPoints).map(userName => ({
                userName,
                usedPoints: yearPoints[userName].usedPoints
            }));
        }
    }
};
