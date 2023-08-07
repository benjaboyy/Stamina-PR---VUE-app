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
        },
        removeSubmission(state, submissionId) {
            const submission = state.submissions.find((submission) => submission.id === submissionId);
            state.submissions.splice(state.submissions.indexOf(submission), 1);
        },
        updateSubmission(state, payload) {
            const submission = state.submissions.find((submission) => submission.id === payload.id);
            submission.approved = true;
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
        },
        async approveSubmission(context, payload) {
            const response = await fetch(`${API_BASE_URL}/submissions/${payload}.json`, {
                method: 'PATCH',
                body: JSON.stringify({
                    approved: true,
                }),
            });
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to approve.');
                throw error;
            }
            context.commit('updateSubmission', {
                id: payload,
            });
        },
        async deleteSubmission(context, payload) {
            const response = await fetch(`${API_BASE_URL}/submissions/${payload}.json`, {
                method: 'DELETE',
            });
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to delete.');
                throw error;
            }
            context.commit('removeSubmission', payload);
        }
    },
    getters: {
        getSubmissions(state) {
            return state.submissions;
        }
    }
}