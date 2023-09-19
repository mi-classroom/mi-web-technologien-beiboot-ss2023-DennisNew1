<template>
    <div class="path-container">
        <p class="path-text">{{ title }}</p>
    </div>
</template>
<script>
export default {
    props: ['bg','title'],
    data() {
        return {
            // makes sure this is always correct even in Build (building for css backgrounds doesnt work properly on inserted variables)
            bgImage: `url(${new URL(this.bg, import.meta.url).href})`
        }
    },
}
</script>
<style scoped lang="css">
    .path-container {
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 0), rgba(19, 1, 14, 0.952)), v-bind(bgImage);
        background-size: cover;                   
        background-repeat: no-repeat;
        background-position: center center; 
        display: flex;
        justify-items: center;
        align-items: flex-end;
        width: 100%;
        height: 200px;
        padding-left: 10px;
    }

    .path-text {
        color: white;
        font-weight: bold;
        font-size: 1.25em;
    }
</style>