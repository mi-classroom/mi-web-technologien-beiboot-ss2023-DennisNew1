<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    data() {
        return {
            pageTitle: ""
        }
    },
    computed: {
        showNav() {
            if (this.$router.isReady()) {
                this.pageTitle = this.$route.meta.pageTitle;
                if (!this.pageTitle) {
                    return false;
                } else {
                    return true;
                }
            }
            else return false;
        }
    }
}
</script>

<template>
  <header v-if="showNav">
    <nav class="nav"> 
        <div class="nav-back" @click="$router.back()">&lt</div> {{ pageTitle }} 
    </nav>
  </header>

  <RouterView />
</template>

<script>

</script>

<style >
  @import "./assets/main.css";

  :root {
    --color-orange: #EB6A0A;
    --nav-size: 18%;
  }

  header {
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  button {
        border: none;
        margin: 0;
        padding: 30px;
        width: auto;
        overflow: visible;

        background: transparent;

        border-radius: 10px;

        /* inherit font, color is custom set */
        color: white;
        font: inherit;

        font-size: large;

        /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
        line-height: normal;

        /* Corrects font smoothing for webkit */
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        /* Corrects inability to style clickable `input` types in iOS */
        -webkit-appearance: none;
        appearance: none;

        width: 100%;
    }

    button.btn-primary {
        background-color: black;
    }

    button.btn-secondary {
        background-color: var(--color-orange);
    }

    button.btn-neutral {
        background-color: lightgrey;
        color: black;
    }

    .container {
        padding-top: var(--nav-size);
    }

    .nav {
        font-size: 1.25rem;
        height: var(--nav-size);
        color: black;
        padding-left: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: var(--color-background);
        width: 100%;
    }

    .nav-back {
        font-size: 2.5rem;
        padding-bottom: 2%;
    }

    a {
        color: black;
    }

    @media (prefers-color-scheme: dark) {
        .nav {
            color: var(--color-text);
        }

        a {
            color: var(--color-text );
        }

    }

    
</style>
