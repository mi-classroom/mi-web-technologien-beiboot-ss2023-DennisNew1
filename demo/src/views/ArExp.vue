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
            experiences: [
                { src: "./../src/assets/html/index.html" }
            ],
            experienceToShow: -1,
        }
    },
    mounted() {
        // theoretically we could call the whole document here as well.
        let id = parseInt(this.$route.params.id);
        if (this.experiences[id]) {
            this.experienceToShow = this.experiences[id].src;
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