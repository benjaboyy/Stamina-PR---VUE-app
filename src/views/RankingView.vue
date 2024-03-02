<template>
  <div class="about container">
    <h1>Points ranking</h1>
    <h3>Season {{ year }}</h3>
    <p class="text-secondary">Here is a list of all the players on points earned this season</p>

    <div v-if="rankedPlayers.length > 0">
      <div v-for="(player, index) in rankedPlayers" :key="index" class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-4 col-md-3">
              <div :class="{ square: true, 'shiny-gold': index === 0 }">
                <h5>
                  <font-awesome-icon icon="star"/> {{ player.points }}
                </h5>
              </div>
            </div>
            <div class="col-8 col-md-9 text-start d-flex">
              <h5 class="card-title m-0 my-auto">{{ player.userName }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Loading rankings...
    </div>
  </div>
</template>

<script>
export default {
  name: "SeasonRanking",
  data() {
    return {
      submissions: [],
      sortedSubmissions: [],
      year: 2024
    };
  },
  created() {
    this.reset();
  },
  computed: {
    rankedPlayers() {
      if (this.submissions.rankings) {
        // Flatten the resultsData and calculate points for each player in each month
        const flatResults = Object.values(this.submissions.rankings)
            .flatMap(month => {
              if (month.submissions) {
                const monthResults = Object.values(month.submissions);
                const sortedMonthResults = monthResults.sort((a, b) => {
                  if (a.difficulty !== b.difficulty) {
                    return b.difficulty - a.difficulty; // Higher difficulty comes first
                  }
                  return b.bpm - a.bpm; // If difficulties are the same, higher bpm comes first
                });
                return sortedMonthResults.map((player, index) => {
                  return {
                    userName: player.userName,
                    points: this.calculatePoints(index + 1)
                  };
                });
              } else {
                return []; // Return an empty array if submissions are undefined for this month
              }
            })
            .reduce((acc, player) => {
              console.log('Accumulator:', acc); // Log the accumulator array
              if (acc.length > 0) { // Check if accumulator is not empty
                const existingPlayer = acc.find(p => p.userName === player.userName);

                if (existingPlayer) {
                  existingPlayer.points += player.points;
                } else {
                  acc.push(player);
                }
              } else {
                acc.push(player); // Add player directly if accumulator is empty
              }

              return acc;
            }, []);

        // Sort players by total points in descending order
        return flatResults.sort((a, b) => b.points - a.points);
      } else {
        return [];
      }
    }
  },
  methods: {
    async reset() {
      await this.loadRankings();
    },
    calculatePoints(position) {
      // Your points calculation logic based on the position
      // Adjust this based on your requirements
      if (position === 1) {
        return 4;
      } else if (position === 2) {
        return 3;
      } else if (position === 3 || position === 4) {
        return 2;
      } else {
        return 1;
      }
    },
    async loadRankings() {
      await this.getSubmissions();
      await this.sortSubmissions();
    },
    async getSubmissions() {
      this.submissions = await this.$store.getters['ranking/currentSeason'];
    },
    sortSubmissions() {
      // Your sorting logic
    },
  }
}
</script>


<style scoped>
.square {
  width: 100%;
  height: 50px;
  background-gradient: linear-gradient(45deg, #f0f0f0, #f8f8f8);
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
}
.square h5 {
  font-weight: 800;
  font-size: 1.5rem;
  margin: auto;
}
.card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shiny-gold {
  background-color: #f9a602;
}
</style>
