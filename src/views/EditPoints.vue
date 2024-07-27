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
            <button @click="add(player)" type="button" class="btn btn-dark">-</button>
            <button type="button" class="btn btn-outline-dark disabled ammount--btn"><span class="shiny-gold">{{ player.points - player.usedPoints }}</span>/{{ player.points }}</button>
            <button @click="substract(player)" type="button" class="btn btn-dark">+</button>
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
      year: 2024,
      playerPoints: []
    };
  },
  created() {
    this.reset();
  },computed: {
    rankedPlayers() {
      if (this.submissions.rankings) {
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
                return sortedMonthResults.map(player => ({
                  userName: player.userName,
                  points: parseInt(player.difficulty),
                }));
              }
              return []; // Return an empty array if submissions are undefined for this month
            })
            .reduce((acc, player) => {
              const existingPlayer = acc.find(p => p.userName === player.userName);
              if (existingPlayer) {
                existingPlayer.points += player.points;
              } else {
                acc.push(player);
              }
              return acc;
            }, []);

        if (Array.isArray(this.playerPoints)) {
          flatResults.forEach(player => {
            const userPoints = this.playerPoints.find(p => p.userName === player.userName);
            player.usedPoints = userPoints ? userPoints.usedPoints : 0;
          });
        }

        return flatResults.sort((a, b) => b.points - a.points);
      }
      return [];
    }
  },
  methods: {
    async reset() {
      await this.$store.dispatch('points/loadAllSeasonPoints');
      await this.getSubmissions();
      await this.getPoints();
    },
    async getSubmissions() {
      this.submissions = await this.$store.getters['ranking/currentSeason'];
    },
    async getPoints() {
      const points = await this.$store.getters['points/pointsSeason'](this.year);
      this.playerPoints = Array.isArray(points) ? points : [];
    },
    async add(player) {
      await this.$store.dispatch('points/add', player);
      await this.getPoints();
    },
    async substract(player) {
      await this.$store.dispatch('points/substract', player, this.year);
      await this.getPoints();
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
  color: #cb7b03;
}
.ammount--btn {
  width: 100px;
  font-weight: bold;
}
.disabled {
  opacity: 1;
}
</style>
