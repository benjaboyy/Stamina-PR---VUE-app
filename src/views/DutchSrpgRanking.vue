<template>
  <div class="container srpg-ranking">
    <h1>Dutch SRPG ranking</h1>
    <p class="text-secondary">Netherlands level ranking from the SRPG10 competition.</p>

    <div class="d-flex gap-2 justify-content-center flex-wrap mb-3">
      <button class="btn btn-outline-primary" type="button" :disabled="loading" @click="loadRanking">
        Refresh
      </button>
      <a class="btn btn-outline-dark" :href="sourcePageUrl" target="_blank" rel="noopener">
        Open SRPG rankings
      </a>
    </div>

    <div v-if="loading" class="text-secondary my-5">
      Loading SRPG ranking...
    </div>

    <div v-else-if="errorMessage" class="alert alert-warning text-start">
      <strong>Could not load the SRPG ranking.</strong>
      <div>{{ errorMessage }}</div>
      <a :href="filteredRankingUrl" target="_blank" rel="noopener">Open the Netherlands ranking source</a>
    </div>

    <div v-else-if="players.length === 0" class="text-secondary my-5">
      No Dutch SRPG players found.
    </div>

    <div v-else>
      <div class="table-responsive d-none d-md-block">
        <table class="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col" class="text-start">Player</th>
              <th scope="col">Level</th>
              <th scope="col">EXP</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in players" :key="player.id || player.name">
              <td class="rank-cell">{{ player.rank }}</td>
              <td class="text-start">
                <a v-if="player.id" class="player-name" :href="playerUrl(player.id)" target="_blank" rel="noopener">
                  {{ player.name }}
                </a>
                <span v-else class="player-name">{{ player.name }}</span>
              </td>
              <td>{{ player.level }}</td>
              <td>{{ formatNumber(player.exp) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-md-none">
        <div v-for="player in players" :key="player.id || player.name" class="card">
          <div class="card-body">
            <a v-if="player.id" class="external-link" :href="playerUrl(player.id)" target="_blank" rel="noopener" aria-label="Open SRPG player page">
              <font-awesome-icon icon="arrow-up-right-from-square" />
            </a>
            <div class="row">
              <div class="col-3">
                <div :class="{ square: true, 'shiny-gold': player.rank === 1 }">
                  <h5>#{{ player.rank }}</h5>
                </div>
              </div>
              <div class="col-9 text-start d-flex">
                <div class="my-auto">
                  <h5 class="card-title player-name m-0">
                    {{ player.name }}
                  </h5>
                  <p class="card-text m-0 dark-gold">Level: <strong>{{ player.level }}</strong></p>
                  <p class="card-text m-0">EXP: <strong>{{ formatNumber(player.exp) }}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-secondary small mt-3">Showing {{ players.length }} Netherlands players.</p>
    </div>
  </div>
</template>

<script>
const SOURCE_PAGE_URL = 'https://srpg10.groovestats.com/index.php?page=ranking'
const FILTERED_RANKING_URL = 'https://srpg10.groovestats.com/api/get-ranking.php?type=level&gender=all&superregion=all&country=Netherlands'

export default {
  name: 'DutchSrpgRanking',
  data () {
    return {
      loading: false,
      errorMessage: '',
      players: [],
      sourcePageUrl: SOURCE_PAGE_URL,
      filteredRankingUrl: FILTERED_RANKING_URL
    }
  },
  created () {
    this.loadRanking()
  },
  methods: {
    async loadRanking () {
      this.loading = true
      this.errorMessage = ''

      try {
        const response = await fetch(FILTERED_RANKING_URL)

        if (!response.ok) {
          throw new Error('SRPG returned status ' + response.status)
        }

        const ranking = await response.json()
        this.players = this.mapPlayers(ranking.data || [])
      } catch (error) {
        this.players = []
        this.errorMessage = error.message || 'The external SRPG ranking could not be reached.'
      } finally {
        this.loading = false
      }
    },
    mapPlayers (rows) {
      return rows.map(row => ({
        rank: Number(row[0]),
        name: row[1],
        gender: row[2],
        region: row[3],
        country: row[4],
        level: Number(row[5]),
        exp: Number(row[6]),
        id: row[8]
      }))
    },
    formatNumber (value) {
      return new Intl.NumberFormat('en-US').format(value)
    },
    playerUrl (playerId) {
      return 'https://srpg10.groovestats.com/index.php?page=songlist&player=' + playerId
    }
  }
}
</script>

<style scoped>
.srpg-ranking {
  max-width: 900px;
}

.rank-cell {
  font-weight: 800;
  width: 72px;
}

.table {
  --bs-table-bg: #212529;
  --bs-table-striped-bg: #2c3034;
  --bs-table-hover-bg: #343a40;
  --bs-table-color: #ffffff;
  --bs-table-striped-color: #ffffff;
  --bs-table-hover-color: #ffffff;
  border-color: rgba(255, 255, 255, 0.12);
}

.player-name {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.2;
  text-decoration: none;
}

.player-name:hover,
.player-name:focus {
  color: #ffffff;
  text-decoration: underline;
}

.square {
  width: 100%;
  padding-bottom: 100%;
  background: #2c3e50;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.15) inset;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #ffffff;
  position: relative;
}

.square h5 {
  position: absolute;
  font-weight: 800;
  font-size: 1.25rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8) inset;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.card-body {
  position: relative;
}

.external-link {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  color: #ffffff;
  font-size: 1.05rem;
  line-height: 1;
}

.external-link:hover,
.external-link:focus {
  color: #f9a602;
}

.shiny-gold {
  background-color: #f9a602;
  color: #212529;
}

.dark-gold {
  color: #f9a602;
}
</style>
