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
        setPoints(state, points, year) {
            if (!year) {
                year = state.year;
            }
            state.points[year] = points;
        },
        addPoints(state, { userName }, year) {
            if (!year) {
                year = state.year;
            }
            if (!state.points[year]) {
                state.points[year] = {};
            }
            if (!state.points[year][userName]) {
                state.points[year][userName] = { usedPoints: 0 };
            }
            state.points[year][userName].usedPoints += 1;
        },
        substractPoints(state, { userName }, year) {
            if (!year) {
                year = state.year;
            }
            if (state.points[year] && state.points[year][userName]) {
                state.points[year][userName].usedPoints -= 1;
            }
        }
    },
    actions: {
        async loadAllSeasonPoints({ commit, state }, year) {
            if (!year) {
                year = state.year;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/points/${year}.json`);
                if (response.ok) {
                    const data = await response.json();
                    commit('setPoints', data, year);
                }
            } catch (error) {
                console.error('Error loading points', error);
            }
        },
        async add({ commit, state }, player, year) {
            if (!year) {
                year = state.year;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/points/${year}/${player.userName}.json`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        usedPoints: player.usedPoints + 1
                    })
                });
                if (response.ok) {
                    commit('addPoints', { userName: player.userName }, year);
                }
            } catch (error) {
                console.error('Error adding points', error);
            }
        },
        async substract({ commit, state }, player, year) {
            if (!year) {
                year = state.year;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/points/${year}/${player.userName}.json`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        usedPoints: player.usedPoints - 1
                    })
                });
                if (response.ok) {
                    commit('substractPoints', { userName: player.userName }, year);
                }
            } catch (error) {
                console.error('Error substracting points', error);
            }
        }
    },
    getters: {
        pointsSeason: (state) => (year) => {
            if (year) {
                state.points[year] = year;
            }
            const yearPoints = state.points[year] || {};
            return Object.keys(yearPoints).map(userName => ({
                userName,
                usedPoints: yearPoints[userName].usedPoints
            }));
        }
    }
};
