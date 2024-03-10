import {createRouter, createWebHistory} from 'vue-router'
import Index from "@/views/Index.vue"
import ForestArea from "@/views/ForestArea.vue"
import Forestry from "@/views/Forestry.vue";
import Quarter from "@/views/Quarter.vue";
import Liter from "@/views/Liter.vue";
import Mackets from "@/views/Mackets.vue";
import Options from "@/views/Options.vue";
import Profile from "@/views/Profile.vue";
import Book from "@/views/Book.vue";
import WorkSpace from "@/views/sample-area/WorkSpace.vue";
import Folder from "@/views/sample-area/Folder.vue";
import Forestry_WS from "@/views/sample-area/Forestry_WS.vue";
import Quarter_WS from "@/views/sample-area/Quarter_WS.vue";
import Liter_WS from "@/views/sample-area/Liter_WS.vue";
import SampleArea from "@/views/sample-area/SampleArea.vue";
import GaoTreesAccount from "@/views/sample-area/GaoTreesAccount.vue";
import LyingDeadAccount from "@/views/sample-area/LyingDeadAccount.vue";

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/forest-district',
        name: 'forest-district',
        component: ForestArea
    },

    {
        path: '/forest-district/:id',
        name: 'forestry',
        component: Forestry
    },

    {
        path: '/forest-district/:id/forestry/:id',
        name: 'quarter',
        component: Quarter
    },

    {
        path: '/forest-district/:id/forestry/:id/quarter/:id',
        name: 'liter',
        component: Liter
    },

    {
        path: '/forest-district/:id/forestry/:id/quarter/:id/macket/:id',
        name: 'macket',
        component: Mackets
    },

    {
        path: '/options',
        name: 'options',
        component: Options
    },

    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },

    {
        path: '/book',
        name: 'book',
        component: Book
    },

    {
        path: '/work-space',
        name: 'work-space',
        component: WorkSpace
    },

    {
        path: '/work-space/:id',
        name: 'folder',
        component: Folder
    },

    {
        path: '/work-space/:id/forestry/:id',
        name: 'forestry-ws',
        component: Forestry_WS
    },

    {
        path: '/work-space/:id/forestry/:id/quarter/:id',
        name: 'quarter-ws',
        component: Quarter_WS
    },

    {
        path: '/work-space/:id/forestry/:id/quarter/:id/liter/:id',
        name: 'liter-ws',
        component: Liter_WS
    },

    {
        path: '/work-space/:id/forestry/:id/quarter/:id/liter/:id/sample-area/:id',
        name: 'sample-area',
        component: SampleArea
    },

    {
        path: '/work-space/:id/forestry/:id/quarter/:id/liter/:id/sample-area/:id/gao-trees-account/:id',
        name: 'gao-trees-account',
        component: GaoTreesAccount
    },

    {
        path: '/work-space/:id/forestry/:id/quarter/:id/liter/:id/sample-area/:id/lying-dead-account/:id',
        name: 'lying-dead-account',
        component: LyingDeadAccount
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
