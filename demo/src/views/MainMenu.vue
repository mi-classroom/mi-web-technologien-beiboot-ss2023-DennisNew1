<template>
    <div v-if="!showOverlay" class="menu-container">
        <button class="btn-primary" @click="$router.push('/pathOverview')"> Ich will nur ein bisschen <h2>stöbern</h2></button>
        <button class="btn-secondary" @click="$router.push('/methods')"> Ich will die ARErlebnisse <h2>nutzen</h2></button>
    </div>
    <div v-if="showOverlay" class="video-container">
        <video autoplay>
            <source src="./../assets/video/intro-video.mp4" type="video/mp4">
            Der Browser unterstützt dieses Videoformat nicht.
        </video>
        <div class="gradient">
            <div class="btn-down" @click="onClickDown"> &lt </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showOverlay: true,
        }
    },
    methods: {
        onClickDown() {
            this.showOverlay = false;
        }
    },
}
</script>
<style lang="css">
    .menu-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-image: url('./../assets/images/aggertalsperre.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center; 
        padding: 1rem;
    }

    button h2 {
        font-weight: bold;
    }  

    .video-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        height: 100%;     
        width: 100%   
    }

    .video-container video {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .gradient {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 102;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0),  rgba(0, 0, 0, 0.342), rgb(19, 1, 14));
        display: flex; 
        justify-content: center;
        align-items: flex-end;
    }

    .btn-down {
        rotate: -90deg;
        font-size: 5rem;
        cursor: pointer;
    }
</style>