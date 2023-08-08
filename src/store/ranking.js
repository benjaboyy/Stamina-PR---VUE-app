
const API_BASE_URL = 'https://stamina-pr-default-rtdb.europe-west1.firebasedatabase.app';

export default {
    namespaced: true,
    state() {
        return {
            seasons: [{
                name: 'season 1',
                year: 2023,
                isCurrent: true,
                rankings: [{
                    month: 7,
                    isCurrent: true,
                    submissions: [{
                        userName: 'behy',
                        songName: 'Songname',
                        bpm: 123,
                        difficulty: 16
                    }]
                }]
            }],
        }
    }
}
