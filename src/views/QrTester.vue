<template>
  <div class="container">
    <button class="btn btn-primary btn-lg" @click="startScanner">Scan QR</button>
    <div class="card mt-3">
      <qrcode-stream ref="qrcodeStream" @decode="onDecode" :preferFrontCamera="true"></qrcode-stream>
      <div v-if="scannedData">{{ scannedData }}</div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  data() {
    return {
      scannedData: {},
    };
  },
  components: {
    QrcodeStream,
  },
  mounted() {
    this.extractValues();
  },
  methods: {

    extractValues() {
      // Get the current URL
      const url = new URL("https://groovestats.com/qr.php?h=&s=7507&f=0&r=100&v=2");

      // Convert URL to string
      const urlString = url.toString();

      // strip https://groovestats.com/qr.php from url
      const stripped = urlString.replace("https://groovestats.com/qr.php", "");

      // Use URLSearchParams to get the values of "s" and "r" parameters
      const params = new URLSearchParams(stripped);

      // Extract the values s and r and put it in scannedData
      this.scannedData = {
        s: params.get("s"),
        r: params.get("r"),
      };
    },

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
