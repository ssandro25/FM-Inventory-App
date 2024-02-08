<template>
    <div class="d-flex">
        <div class="side__bar border-end p-2">
            <div class="d-flex flex-column justify-content-between h-100">
                <div class="d-flex flex-column justify-content-between gap-3">
                    <router-link
                        :to="{ name: 'forest-district' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center active"
                    >
                        <img src="@/assets/images/clipboard-solid.svg" width="12" alt="">
                    </router-link>

                    <router-link
                        :to="{ name: 'tax-card' }"
                        class="side__bar_btn rounded d-flex align-items-center justify-content-center"
                    >
                        <img src="@/assets/images/clipboard-solid.svg" width="12" alt="">
                    </router-link>

                    <router-link
                        :to="{ name: 'tax-card' }"
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
    background-color: #0C0E15;
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
    background-color: #151822;

    //background: rgb(5,18,34);
    //background: linear-gradient(90deg, rgba(5,18,34,1) 0%, rgba(24,77,96,0.9948354341736695) 35%, rgba(2,32,57,1) 100%)

    //background-color: #06192a;
    //background-image: linear-gradient(to bottom, #06192a, #16454A)
}
</style>