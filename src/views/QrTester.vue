<template>
  <div class="container">
    <button class="btn btn-primary btn-lg" @click="startScanner">Scan QR</button>
    <div class="card mt-3">
      <qrcode-stream @decode="onDecode" :preferFrontCamera="true"></qrcode-stream>
      <div v-if="scannedData">{{ scannedData }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scannedData: null,
    };
  },
  methods: {

    startScanner() {
      this.scannedData = null; // Reset previous scan data
      this.$refs.qrcodeStream.start(); // Start scanning

    },
    onDecode(decodedValue) {
      this.scannedData = decodedValue;
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
