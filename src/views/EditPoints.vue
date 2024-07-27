<template>
  <div class="about container">
    <h1>Points {{ year }}</h1>
    <router-link to="/verify" class="btn btn-outline-primary mb-3">
      Score verification
    </router-link>

    <div v-if="rankedPlayers.length > 0">
      <div v-for="(player, index) in rankedPlayers" :key="index">
        <div class="d-flex justify-content-between mb-2">
          <h5 class="m-0 my-auto">
            {{ player.userName }}
          </h5>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-dark"><font-awesome-icon icon="chevron-left"/></button>
            <button type="button" class="btn btn-outline-dark disabled ammount--btn"><span class="shiny-gold">{{ player.points }}</span>/{{ player.points }}</button>
            <button type="button" class="btn btn-dark"><font-awesome-icon icon="chevron-right"/></button>
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
                return sortedMonthResults.map((player) => {
                  return {
                    userName: player.userName,
                    points: parseInt(player.difficulty)
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
    async loadRankings() {
      await this.getSubmissions();
    },
    async getSubmissions() {
      this.submissions = await this.$store.getters['ranking/currentSeason'];
    },
    async getPoints() {
      // Get points for the selected player
    },
    updatePoints() {
      // Update points for the selected player
    },
  }
}
</script>


<style scoped>
.card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shiny-gold {
  color: #f9a602;
}
.ammount--btn {
  width: 100px;
}
.disabled {
  opacity: 1;
}
</style>
