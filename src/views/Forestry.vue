<template>
    <div class="container-fluid p-5">
        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewForestAreaModal"
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
                v-for="item in forestry"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="/forest-district/+item.id"
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
    name: "FMForestry",

    data() {
        return {
            forestry: []
        }
    },

    computed: {
        ...mapGetters([
            'getForestry'
        ])
    },

    mounted() {
        this.forestry = this.getForestry.filter(item => item.id === parseInt(this.$route.params.id))[0].items;

        console.log(this.forestry)
    }
}
</script>

<style scoped lang="scss">
.add_new__btn {
    border: 1px dashed #cecece;
    background-color: rgba(68, 74, 90, 0.4);
}

.item {
    background-color: #444A5A;
}
</style>