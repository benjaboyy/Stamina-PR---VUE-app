<template>
  <div class="container">
    <div class="card mt-3 p-3">
      <qrcode-stream ref="qrcodeStream" @detect="onDetect"></qrcode-stream>
      <div v-if="scannedData">
        <div v-for="(value, key) in scannedData" :key="key">
          <p>{{ key }}: {{ value }}</p>
        </div>
        <p>Raw:</p>
        <p>{{ scannedData }}</p>
      </div>
    </div>
    <div class="card mt-3 p-3">
      <qrcode-drop-zone @detect="onDetect"></qrcode-drop-zone>
      <qrcode-capture></qrcode-capture>
    </div>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
  data() {
    return {
      scannedData: {},
      decodedData: '',
    };
  },
  components: {
    QrcodeStream, QrcodeCapture, QrcodeDropZone
  },
  methods: {
    extractValues(decodedValue) {
      const rawValue = decodedValue[0].rawValue;
      const url = new URL(rawValue);
      const params = new URLSearchParams(url.search);
      // convert score to 7590 > 75.90
      const score = params.get("s") / 100;
      const failed = params.get("f");
      const time = params.get("r");
      const version = params.get("v");
      const hash = params.get("h");

      this.scannedData = {
        'score': score,
        'failed': failed,
        'time': time,
        'version': version,
        'hash': hash,
      };

    },
    onDetect(decodedValue) {
      this.extractValues(decodedValue);
      this.decodedData = decodedValue;
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
