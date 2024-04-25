<template>
    <div class="main__container">
        <div class="main__container_child d-flex flex-md-row flex-column-reverse">
            <div class="side__bar p-2 pb-md-2 pb-4 py-lg-4">
                <div class="d-flex flex-md-column justify-content-between h-100">
                    <div class="d-flex flex-md-column justify-content-between align-items-center gap-3">
                        <router-link :to="{ name: 'index' }">
                            <div class="logo__container d-none d-lg-flex justify-content-center">
                                <img
                                    src="@/assets/images/fm-logo.png"
                                    width="50"
                                    alt=""
                                >
                            </div>
                        </router-link>
                        
                        <router-link
                            :to="{ name: 'index' }"
                            class="side__bar_btn rounded d-flex align-items-center justify-content-center mt-lg-5 mt-0"
                            :class="{
                            'active' : $route.name === 'index'
                        }"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none" style="&#10;    color: #49d49c;&#10;"><path d="M6.17945 14.8336H13.5478M8.95889 1.72157L2.71207 6.58021C2.2945 6.90499 2.08571 7.06738 1.93529 7.27075C1.80205 7.45089 1.7028 7.65384 1.6424 7.86961C1.57422 8.1132 1.57422 8.3777 1.57422 8.90671V15.5704C1.57422 16.6021 1.57422 17.1179 1.77499 17.512C1.9516 17.8586 2.23341 18.1404 2.58002 18.317C2.97406 18.5178 3.4899 18.5178 4.52157 18.5178H15.2057C16.2374 18.5178 16.7532 18.5178 17.1473 18.317C17.4939 18.1404 17.7757 17.8586 17.9523 17.512C18.1531 17.1179 18.1531 16.6021 18.1531 15.5704V8.90671C18.1531 8.3777 18.1531 8.1132 18.0849 7.86961C18.0245 7.65384 17.9252 7.45089 17.792 7.27075C17.6416 7.06738 17.4328 6.90499 17.0152 6.58021L10.7684 1.72157C10.4448 1.46989 10.283 1.34406 10.1044 1.29568C9.94672 1.253 9.78057 1.253 9.62293 1.29568C9.44427 1.34406 9.28248 1.46989 8.95889 1.72157Z" stroke="#49D49C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<!--                            <img src="@/assets/images/house-solid.svg" width="19" alt="">-->
                        </router-link>

                        <router-link
                            :to="{ name: 'work-space' }"
                            class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                            :class="{
                            'active' :  $route.name === 'work-space' ||
                                        $route.name === 'folder' ||
                                        $route.name === 'forestry-ws' ||
                                        $route.name === 'quarter-ws' ||
                                        $route.name === 'liter-ws' ||
                                        $route.name === 'sample-area' ||
                                        $route.name === 'gao-trees-account' ||
                                        $route.name === 'lying-dead-account' ||
                                        $route.name === 'mackets-ws'
                        }"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none"><path d="M11.7839 5.28526L10.7564 3.23033C10.4607 2.63891 10.3128 2.34319 10.0922 2.12714C9.89717 1.93609 9.66206 1.79079 9.40394 1.70175C9.11205 1.60107 8.78144 1.60107 8.1202 1.60107H4.59969C3.56802 1.60107 3.05219 1.60107 2.65814 1.80185C2.31153 1.97846 2.02973 2.26026 1.85312 2.60687C1.65234 3.00092 1.65234 3.51675 1.65234 4.54842V5.28526M1.65234 5.28526H15.6523C17.1998 5.28526 17.9735 5.28526 18.5646 5.58643C19.0845 5.85134 19.5072 6.27404 19.7721 6.79396C20.0733 7.38503 20.0733 8.15878 20.0733 9.70629V13.7589C20.0733 15.3064 20.0733 16.0801 19.7721 16.6712C19.5072 17.1911 19.0845 17.6138 18.5646 17.8788C17.9735 18.1799 17.1998 18.1799 15.6523 18.1799H6.07337C4.52586 18.1799 3.75211 18.1799 3.16104 17.8788C2.64113 17.6138 2.21842 17.1911 1.95351 16.6712C1.65234 16.0801 1.65234 15.3064 1.65234 13.7589V5.28526Z" stroke="#49D49C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<!--                            <img src="@/assets/images/pen-ruler-solid.svg" width="19" alt="">-->
                        </router-link>

                        <router-link
                            :to="{ name: 'forest-district' }"
                            class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                            :class="{
                            'active' :  $route.name === 'forest-district' ||
                                        $route.name === 'forestry' ||
                                        $route.name === 'quarter' ||
                                        $route.name === 'liter' ||
                                        $route.name === 'macket'
                        }"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M14.9294 8.96945H10.3242M14.9294 12.6536H10.3242M14.9294 5.28526H10.3242M7.1005 1.60107L7.1005 18.1799M5.99524 1.60107H13.732C15.2795 1.60107 16.0533 1.60107 16.6444 1.90224C17.1643 2.16715 17.587 2.58986 17.8519 3.10978C18.1531 3.70084 18.1531 4.4746 18.1531 6.0221V13.7589C18.1531 15.3064 18.1531 16.0802 17.8519 16.6712C17.587 17.1911 17.1643 17.6138 16.6444 17.8788C16.0533 18.1799 15.2795 18.1799 13.732 18.1799H5.99524C4.44774 18.1799 3.67399 18.1799 3.08292 17.8788C2.563 17.6138 2.14029 17.1911 1.87538 16.6712C1.57422 16.0802 1.57422 15.3064 1.57422 13.7589V6.0221C1.57422 4.4746 1.57422 3.70084 1.87538 3.10978C2.14029 2.58986 2.563 2.16715 3.08292 1.90224C3.67399 1.60107 4.44774 1.60107 5.99524 1.60107Z" stroke="#49D49C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<!--                            <img src="@/assets/images/clipboard-solid.svg" width="17" alt="">-->
                        </router-link>

                        <router-link
                            :to="{ name: 'book' }"
                            class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                            :class="{
                            'active' : $route.name === 'book'
                        }"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none"><path d="M5.55877 20.1011H10.164M10.6245 13.9544C12.8028 12.9196 14.3087 10.6994 14.3087 8.1275C14.3087 4.56674 11.4222 1.68018 7.86139 1.68018C4.30063 1.68018 1.41406 4.56674 1.41406 8.1275C1.41406 10.6994 2.92002 12.9196 5.09825 13.9544V14.5748C5.09825 15.4331 5.09825 15.8623 5.23847 16.2008C5.42543 16.6522 5.78404 17.0108 6.2354 17.1977C6.57393 17.338 7.00308 17.338 7.86139 17.338C8.7197 17.338 9.14885 17.338 9.48737 17.1977C9.93874 17.0108 10.2973 16.6522 10.4843 16.2008C10.6245 15.8623 10.6245 15.4331 10.6245 14.5748V13.9544Z" stroke="#49D49C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<!--                            <img src="@/assets/images/book-solid.svg" width="17" alt="">-->
                        </router-link>

                    </div>

                    <div class="d-flex flex-md-column justify-content-between align-items-center gap-3">
                        <router-link
                            :to="{ name: 'profile' }"
                            class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                            :class="{
                            'active' : $route.name === 'profile'
                        }"
                        >
                            <img src="@/assets/images/user.svg" width="17" alt="">
                        </router-link>

                        <router-link
                            :to="{ name: 'options' }"
                            class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                            :class="{
                            'active' : $route.name === 'options'
                        }"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" fill="#49D49C" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                            </svg>
<!--                            <img src="@/assets/images/settings.svg" width="12" alt="">-->
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="content__container">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    data() {
        return {
            forest_area: [
                {
                    id: 1, title: 'თიანეთი', forestry: [
                        {id: 1, title: 'არტაანი'},
                        {id: 2, title: 'ახალსოფელი'},
                        {id: 3, title: 'ზარიძეები'},
                        {id: 4, title: 'თიანეთი'},
                        {id: 5, title: 'სიონი'},
                        {id: 6, title: 'სიმონიანთხევი'},
                        {id: 7, title: 'ბოჭორმა'},
                        {id: 8, title: 'ღულელები'},
                    ]
                },

                {
                    id: 2, title: 'მცხეთა', forestry: [
                        {id: 1, title: 'ძეგვი'},
                        {id: 2, title: 'დიდგორის ლისი'},
                        {id: 3, title: 'თბილისის ლისი'},
                        {id: 4, title: 'ჯვარი'},
                        {id: 5, title: 'ბევრეთი'},
                        {id: 6, title: 'დიღომი'},
                    ]
                },

                {
                    id: 3, title: 'ფასანაური', forestry: [
                        {id: 1, title: 'მჭადიჯვარი'},
                        {id: 2, title: 'დუშეთი'},
                        {id: 3, title: 'ჟინვალი'},
                        {id: 4, title: 'ანანური'},
                        {id: 5, title: 'ფასანაური'},
                    ]
                },

                {
                    id: 4, title: 'ბარისახო', forestry: [
                        {id: 1, title: 'გალავანი'},
                        {id: 2, title: 'ჭოპორტი'},
                        {id: 3, title: 'ბულაჩაური'},
                        {id: 4, title: 'თვალივი'},
                        {id: 5, title: 'მაღაროსკარი'},
                        {id: 6, title: 'ბარისახო'},
                    ]
                },
            ]
        }
    },

    computed: {
        ...mapGetters([
            'getForestArea'
        ]),
    },

    // created() {
    //     localStorage.setItem('forestArea', JSON.stringify(this.forest_area))
    // },

    // mounted() {
    //     this.getForestArea = this.forest_area
    //
    //     if (JSON.parse(localStorage.getItem('forestArea'))) {
    //         this.$store.dispatch('setForestArea', this.getForestArea)
    //     } else {
    //         this.$store.dispatch('setForestArea', this.forest_area)
    //     }
    // }
    mounted() {
        if (localStorage.getItem('forestArea')) {
            this.$store.dispatch('setForestArea', JSON.parse(localStorage.getItem('forestArea')))
        } else {
            this.$store.dispatch('setForestArea', this.forest_area)
        }
    }
}
</script>

<style lang="scss">
:focus {
    box-shadow: unset !important;
}
.fs-12 {
    font-size: 12px !important;
}
.fs-14 {
    font-size: 14px !important;
}
.fs-16 {
    font-size: 16px !important;
}
.cursor-pointer {
    cursor: pointer;
}
.macket__item {
    height: 100px;
}
body {
    color: #fff !important;
}
.main__container {
    background: rgb(0 0 0 / 1);

    &_child {
        background: radial-gradient(circle,#2e868908 0%,#49d49c24 0%,#46cc9627 0%,#3cae8014 80%,#00000008 100%);
        background-size: 170%;
        background-position: right;

        .logo__container {
            width: 70px;
            & img {
                filter: drop-shadow(0 0 24px #2b785c);
            }
        }
    }
}
.side__bar {
    width: 70px;
    height: 100vh;
    background-color: rgb(255 255 255 / .05);
    //background: linear-gradient(78deg, rgba(16, 20, 43, 1) 15%, rgba(22, 48, 39, 1) 78%);
    //background: radial-gradient(circle,#2e868908 0%,#49d49c24 0%,#46cc9627 0%,#3cae8014 80%,#00000008 100%);
    //border-right: 1px solid #5e6873;
    position: sticky;
    top: 0;
    z-index: 10;

    &_btn {
        width: 38px;
        height: 38px;
        //background-color: #1e393f;
        transition: .3s;

        &.active {
            background-color: #42504A;
            //background-color: rgb(57 145 112);
        }

        &:hover {
            background-color: #42504A;
            //background-color: rgb(57 145 112);
            //transform: scale(1.03);
        }
    }
}

.content__container {
    width: calc(100% - 49px);
    //background: linear-gradient(to bottom left, rgba(16, 20, 43, 1) 45%, rgba(22, 48, 39, 1) 100%);

    .add_new__btn {
        border: 1px dashed #cecece;
        background-color: #394A43;
        //background: radial-gradient(circle, rgba(16, 20, 43, 1) 5%, rgba(17, 26, 42, 1) 75%, rgb(13 38 45) 100%);
        cursor: pointer;
        transition: .3s;
    }

    .items__list_row {
        margin-top: 12px;
        background-color: #222F2A;
        padding: 0 12px 24px 12px;
        border-radius: 12px;

        .col {
            .item, .add_new__btn {
                height: 170px;
            }
        }
    }
    .items__list_row.compact {
        .col {
            .item, .add_new__btn {
                height: 58px;
            }
        }
    }
    .item {
        //background: radial-gradient(circle, rgb(21 24 45) 5%, rgb(26 37 55) 36%, rgb(28 56 63) 100%);
        background-color: #394A43;
        //border: 1px solid #5e6873;
        transition: .3s;
        //box-shadow: 5px 5px 5px 2px black;

        &:hover {
            background-color: #ffffff40;
            outline: 1px solid #49D49C;
            //transform: scale(1.03);
            //background: radial-gradient(circle, #15182d 5%, #1a2537 80%, #1c383f 100%);
        }
    }
}

@media screen and (max-width: 760px){
    .side__bar {
        width: 100%;
        height: auto;
        position: sticky;
        bottom: 0;
        top: auto;
        z-index: 10;
        border-right: unset !important;
        background-color: #121a16;
    }

    .content__container {
        width: 100%;
        //min-height: 100vh;
        min-height: calc(100vh - 72px);
    }

    .side__bar_btn {
        width: 40px;
        height: 40px;
    }
}

</style>