<template>
  <div class="dropdown mb-3">
    <button class="btn btn-outline-primary dropdown-toggle" type="button" id="adminMenuDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Admin Menu
    </button>
    <ul class="dropdown-menu" aria-labelledby="adminMenuDropdown">
      <li>
        <router-link to="/verify" class="dropdown-item">
          Score verification
        </router-link>
      </li>
      <li>
        <router-link to="/points/2024" class="dropdown-item">
          2024 punten
        </router-link>
      </li>
      <li>
        <router-link to="/points/2025" class="dropdown-item">
          2025 punten
        </router-link>
      </li>
      <li>
        <router-link to="/points/2026" class="dropdown-item">
          2026 punten
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageNavAdmin',
  data () {
    return {
      showMore: false,
    }
  }
}
</script>
