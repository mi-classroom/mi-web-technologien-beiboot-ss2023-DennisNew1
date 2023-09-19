<template>
    <div class="qr-container container">
        <div id="reader" width="600px"></div>
        <div >{{ readings }}</div>
    </div>
</template>
<script>
import {Html5Qrcode} from "html5-qrcode";

export default {
    data() {
        return {
            cameraId: -1,
            readings: "test",
            apihtml5QrCode: null,
            showReader: true,
            scannedId: -1

        }
    },
    mounted() {
        this.apihtml5QrCode = new Html5Qrcode("reader");
        this.apihtml5QrCode.start(
            { facingMode: "environment" }, 
            {
                fps: 10,    // Optional, frame per seconds for qr code scanning
                qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
            },
            (decodedText, decodedResult) => {
                this.readings = decodedText + " || " + decodedResult;
                this.scannedId = decodedText;
                this.stopCamera();
                this.$router.push(`/exp/${this.scannedId}`);
                console.log(decodedText);
                console.log(decodedResult);
            },
            (errorMessage) => {
                console.log(errorMessage);
            })
        .catch((err) => {
            this.showReader = false;
            console.log(err);
        });
    },
    beforeUnmount() {
        this.stopCamera();        
    },
    methods: {
        stopCamera() {
            // Scanning errors are passed up, so double catch here. 
        try {
            this.apihtml5QrCode.stop().then((ignore) => {
            // QR Code scanning is stopped.
            }).catch((err) => {
                console.log(err);
            });
        } catch (e) {
            console.log(e);
        }
        }
    },
}
</script>
<style lang="css">
    .qr-container {
        height: 100%;
        width: 100%;
        background-image: url('./../assets/images/aufmacher.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center; 
        padding-top: var(--nav-size);
    }
</style>