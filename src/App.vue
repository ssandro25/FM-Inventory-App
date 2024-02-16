<template>
    <div class="d-flex">
        <div class="side__bar border-end p-2" style="border-color: #5e6873 !important">
            <div class="d-flex flex-column justify-content-between h-100">
                <div class="d-flex flex-column justify-content-between gap-3">
                    <router-link
                        :to="{ name: 'forest-district' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                    >
                        <img src="@/assets/images/house-solid.svg" width="15" alt="">
                    </router-link>

                    <router-link
                        :to="{ name: 'forest-district' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center active"
                    >
                        <img src="@/assets/images/clipboard-solid.svg" width="12" alt="">
                    </router-link>

                    <router-link
                        to="/"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                    >
                        <img src="@/assets/images/clipboard-solid.svg" width="12" alt="">
                    </router-link>

                    <router-link
                        to="/"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                    >
                        <img src="@/assets/images/clipboard-solid.svg" width="12" alt="">
                    </router-link>
                </div>

                <div class="d-flex flex-column justify-content-between gap-3">
                    <router-link
                        :to="{ name: 'options' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                    >
                        <img src="@/assets/images/user.svg" width="12" alt="">
                    </router-link>

                    <router-link
                        :to="{ name: 'options' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
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

</script>

<style lang="scss">
body {
    color: #fff !important;
}
.side__bar {
    width: 50px;
    height: 100vh;
    //border-color: #5e6873 !important;
    background: linear-gradient(78deg, rgba(16,20,43,1) 15%, rgba(22,48,39,1) 78%);
    //background-color: #153449;
    //background-color: #112232;
    //background-image: linear-gradient(to bottom, #112232, #16454A);
    position: sticky;
    z-index: 10;

    &_btn {
        width: 33px;
        height: 33px;
        background-color: #444A5A;
        //background-color: #080822;
        transition: .3s;

        &.active {
            background-color: #2c2c76;
        }

        &:hover {
            background-color: #2c2c76;
        }
    }
}

.content__container {
    width: calc(100% - 49px);
    //background-color: #151822;
    background: linear-gradient(to bottom left, rgba(16,20,43,1) 45%, rgba(22,48,39,1) 100%);
}

.add_new__btn {
    border: 1px dashed #cecece;
    //background-color: rgba(68, 74, 90, 0.4);
    background: radial-gradient(circle, rgba(16,20,43,1) 5%, rgba(17,26,42,1) 75%, rgb(13 38 45) 100%);
}
.item {
    //background-color: #444A5A;
    background: radial-gradient(circle, rgb(21 24 45) 5%, rgb(26 37 55) 36%, rgb(28 56 63) 100%);
    border: 1px solid #5e6873;
}
</style>