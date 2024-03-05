<template>
    <div class="container-fluid p-md-5 p-3">
        <h1 class="text-white mb-3">საქაღალდეები</h1>

        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewForesrtyWS"
                    class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                >
                    <div class="d-flex align-items-center gap-2">
                        <img src="@/assets/images/plus-solid.svg" width="20" alt="">

                        <span>
                            დაამატე ახალი
                        </span>
                    </div>
                </div>
            </div>

            <div
                v-for="item in folders"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="/folder/+item.id"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
                >
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "FMFolder",

    computed: {
        ...mapGetters([
            'getWorkSpace'
        ])
    },

    mounted() {
        this.$route.params.id
    }
}
</script>

<style scoped lang="scss">

</style>