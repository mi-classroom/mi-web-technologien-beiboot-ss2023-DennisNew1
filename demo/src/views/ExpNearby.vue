<template>
    <div class="container">
        <div v-for="exp in experiences">
            <hr class="divider">
            <div class="list-item">
                <p class="exp-text"> {{ exp.name }}</p> 
                <p class="exp-distance"> {{ formatDistance(exp.distance) }}</p>
            </div>
        </div>      
    </div>
</template> 
<script>
export default {
    data() {
        return {
            // could be requested by API in future: 
            experiences: [
                {
                    name: "Bergischer Löwe Bahnhof Bielstein",
                    distance: 0
                },
                {
                    name: "St. Bonifatius Kriegsgeschichte",
                    distance: 322
                },
                {
                    name: "Burghaus",
                    distance: 1200
                },
                {
                    name: "Eisenbahnbrücke an der Mühle",
                    distance: 1300
                },
                {
                    name: '"Straße der Arbeit" Steinbreche Weiershagen',
                    distance: 1900
                },
                {
                    name: "Haus Kranenberg - Wohnzimmer von Bielstein / Brauerei",
                    distance: 2200
                },
            ]
        }
    },
    methods: {
        formatDistance(distance) {
            if (distance >= 1000) {
                return `${distance / 1000} km`;
            } else {
                return `${distance} m`;
            }
        }
    },
}
</script>
<style lang="css">
    .divider {
        border-top: 1px solid var(--color-border);
    }

    .list-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem;
    }
  
    .exp-text {
        font-weight: bold;
    }

    .exp-distance {
        flex-shrink: 0;
        text-wrap: nowrap;  
    }
</style>