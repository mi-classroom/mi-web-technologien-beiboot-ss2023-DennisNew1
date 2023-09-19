import { createRouter, createWebHistory } from 'vue-router';
import MainMenu from '../views/MainMenu.vue';
import PathOverview from '../views/PathOverview.vue';
import MethodView from '../views/MethodView.vue';
import ExpNearby from '../views/ExpNearby.vue';
import QrScan from '../views/QrScan.vue';
import ArExp from '../views/ArExp.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainMenu,
            meta: {
                pageTitle: ""
            }
        },
        {
            path: '/',
            redirect: '/'
        },
        {
            path: '/pathOverview',
            name: 'pathOverview',
            component: PathOverview,
            meta: {
                pageTitle: "Bitte wählen Sie einen ARlebnispfad"
            }
        },
        {
            path: '/methods',
            name: 'methodView',
            component: MethodView,
            meta: {
                pageTitle: "Wie wollen Sie starten?"
            }
        },
        {
            path: '/nearby',
            name: 'expNearby',
            component: ExpNearby,
            meta: {
                pageTitle: "ARlebnisse in der Nähe"
            }
        },
        {
            path: '/scan',
            name: 'QrScan',
            component: QrScan,
            meta: {
                pageTitle: "ARlebnis via QR Code starten"
            } 
        },
        {
            path: '/exp/:id',
            name: 'Exp',
            component: ArExp,
            meta: {
                pageTitle: "Zurück"
            } 
        }
    ]
})

export default router
