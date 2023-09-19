<template lang="">
    <div class="method-container container">
        <button class="btn-primary" @click="$router.push('/nearby')">
            <img class="btn-img" src="./../assets/icons/radar.png"/> 
            ARlebnisse in der Umgebung anzeigen 
        </button>
        <button class="btn-secondary" @click="$router.push('/scan')"> 
            <img class="btn-img" src="./../assets/icons/qr-code-scan.png"/>
            ARLebnis via QR Code Scan starten
        </button>
        <button class="btn-neutral" onclick="window.location.href = 'https://de.wikipedia.org/ '"> 
            <img class="btn-img-light" src="./../assets/icons/hilfe.png"/>
            Ich hab keine Ahnung
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="css">
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
    }

    .method-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .btn-img {
        width: 30%;
        -webkit-filter: grayscale(1) invert(1);
        filter: grayscale(1) invert(1);
    }

    .btn-img-light {
        width: 30%;
    }
</style>