// submissions contain the following fields:
// id: string
// userName: string
// songName: string
// bpm: number
// difficulty: string
// imageUrl: string
// approved: boolean

const API_BASE_URL = 'https://stamina-pr-default-rtdb.europe-west1.firebasedatabase.app';

export default {
    namespaced: true,
    state() {
        return {
            submissions: [],
        }
    },
    mutations: {
        setSubmissions(state, submissions) {
            state.submissions = submissions;
        },
        pushSubmission(state, submission) {
            state.submissions.push(submission);
        }
    },
    actions: {
        async loadSubmissions(context) {
            await fetch(`${API_BASE_URL}/submissions.json`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                const submissions = [];
                for (const key in data) {
                    submissions.push({
                        id: key,
                        userName: data[key].userName,
                        songName: data[key].songName,
                        bpm: data[key].bpm,
                        difficulty: data[key].difficulty,
                        imageUrl: data[key].imageUrl,
                        approved: data[key].approved,
                    });
                }
                context.commit('setSubmissions', submissions);
            })
            .catch((error) => {
                console.log(error)
            })
        },
        async submitSubmission(context, payload) {
            const response = await fetch(`${API_BASE_URL}/submissions.json`, {
                method: 'POST',
                body: JSON.stringify(payload),
            });
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to submit.');
                throw error;
            }
            context.commit('pushSubmission', payload);
        }
    },
    getters: {
        getSubmissions(state) {
            return state.submissions;
        }
    }
}