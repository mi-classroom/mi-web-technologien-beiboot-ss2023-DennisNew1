<template lang="">
    <div class="exp-container container">
        <iframe 
            allowvr="true" 
            height="100%" 
            width="100%" 
            class="exp"
            scrolling="no"
            frameBorder="0" 
            :src="experienceToShow"
            :key="experienceToShow" 
        > </iframe>
    </div>
</template>
<script>

export default {
    data() {
        return {
            // we could easily add all experiences/POCs here
            experiences: [
                { src: "../assets/html/interaction/index.html" },
                { src: "../assets/html/markerbased/index.html" }
            ],
            experienceToShow: -1,
        }
    },
    mounted() {
        // theoretically we could call the whole document here as well.
        let id = parseInt(this.$route.params.id);
        if (this.experiences[id]) {
            // we need to align the urls for production and dev, as these are neither static or absolute paths
            // usually we would call these from an API
            this.experienceToShow = new URL(this.experiences[id].src, import.meta.url).href ;
            console.log(this.experienceToShow);
        }
        
    }
}
</script>
<style lang="css">
    .exp-container {
        width: 100%;
        height: 99% ;
    }
</style>