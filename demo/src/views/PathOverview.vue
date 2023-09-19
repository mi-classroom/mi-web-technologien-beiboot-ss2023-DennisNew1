<template>
    <div class="poverview-container container">
        <div v-for="exp in experiences">
            <PathPreview :title="exp.title" :bg="exp.image"/>
        </div>
    </div>
</template>
<script>
import PathPreview from '../components/PathPreview.vue';

export default {
    components: {
        PathPreview
    },
    data() {
        return {
            // Array with the experiences and metaData
            experiences: [ 
                {
                    title: "Wiehl",
                    image: "src/assets/images/waldbroel.jpg"
                },
                {
                    title: "Straße der Arbeit - Marienheide",
                    image: "src/assets/images/unnenbergturm.jpg"
                },
                {
                    title: "Wipperfürth",
                    image: "src/assets/images/wipperfürth.webp"
                },
            ]
        }
    }
}
</script>
<style scoped lang="css">
    .poverview-container {
        height: 100%;
        width: 100%;
    }

    .poverview-container > div {
        margin-bottom: 5px;
    }
</style>