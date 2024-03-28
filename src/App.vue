<template>
    <div class="d-md-flex">
        <div class="side__bar p-2 pb-md-2 pb-5">
            <div class="d-flex flex-md-column justify-content-between h-100">
                <div class="d-flex flex-md-column justify-content-between gap-3">
                    <router-link
                        :to="{ name: 'index' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                        :class="{
                            'active' : $route.name === 'index'
                        }"
                    >
                        <img src="@/assets/images/house-solid.svg" width="15" alt="">
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
                                        $route.name === 'lying-dead-account'
                        }"
                    >
                        <img src="@/assets/images/pen-ruler-solid.svg" width="14" alt="">
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
                        <img src="@/assets/images/clipboard-solid.svg" width="12" alt="">
                    </router-link>

                    <router-link
                        :to="{ name: 'book' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                        :class="{
                            'active' : $route.name === 'book'
                        }"
                    >
                        <img src="@/assets/images/book-solid.svg" width="12" alt="">
                    </router-link>

                </div>

                <div class="d-flex flex-md-column justify-content-between gap-3">
                    <router-link
                        :to="{ name: 'profile' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                        :class="{
                            'active' : $route.name === 'profile'
                        }"
                    >
                        <img src="@/assets/images/user.svg" width="12" alt="">
                    </router-link>

                    <router-link
                        :to="{ name: 'options' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                        :class="{
                            'active' : $route.name === 'options'
                        }"
                    >
                        <img src="@/assets/images/settings.svg" width="12" alt="">
                    </router-link>
                </div>
            </div>
        </div>

        <div class="content__container">
            <router-view/>
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
.fs-12 {
    font-size: 12px !important;
}
.macket__item {
    height: 75px;
}
body {
    color: #fff !important;
}

.side__bar {
    width: 50px;
    height: 100vh;
    background: linear-gradient(78deg, rgba(16, 20, 43, 1) 15%, rgba(22, 48, 39, 1) 78%);
    border-right: 1px solid #5e6873;
    position: sticky;
    top: 0;
    z-index: 10;

    &_btn {
        width: 33px;
        height: 33px;
        background-color: #1e393f;
        transition: .3s;

        &.active {
            background-color: rgb(57 145 112);
        }

        &:hover {
            background-color: rgb(57 145 112);
            //transform: scale(1.03);
        }
    }
}

.content__container {
    width: calc(100% - 49px);
    background: linear-gradient(to bottom left, rgba(16, 20, 43, 1) 45%, rgba(22, 48, 39, 1) 100%);

    .add_new__btn {
        border: 1px dashed #cecece;
        background: radial-gradient(circle, rgba(16, 20, 43, 1) 5%, rgba(17, 26, 42, 1) 75%, rgb(13 38 45) 100%);
        cursor: pointer;
        transition: .3s;
    }

    .items__list_row {
        .col {
            .item, .add_new__btn {
                height: 170px;
            }
        }
    }
    .item {
        background: radial-gradient(circle, rgb(21 24 45) 5%, rgb(26 37 55) 36%, rgb(28 56 63) 100%);
        border: 1px solid #5e6873;
        transition: .3s;
        box-shadow: 5px 5px 5px 2px black;

        &:hover {
            //transform: scale(1.03);
            background: radial-gradient(circle, #15182d 5%, #1a2537 80%, #1c383f 100%);
        }
    }


}

@media screen and (max-width: 760px){
    .side__bar {
        width: 100%;
        height: auto;
        position: fixed;
        bottom: 0;
        top: auto;
        z-index: 10;
        border-right: unset !important;
    }

    .content__container {
        width: 100%;
        min-height: 100vh;
        margin-bottom: 96px;
    }

    .side__bar_btn {
        width: 40px;
        height: 40px;
    }
}

</style>