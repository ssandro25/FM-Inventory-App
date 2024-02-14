<template>

    <AddNewForestArea />

    <div class="container-fluid p-5">
        <h1 class="text-white mb-3">სატყეო უბანი</h1>

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
                v-for="item in forest_area"
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
import AddNewForestArea from "@/components/modals/add-new-modals/AddNewForestArea.vue";
import { mapGetters } from "vuex";

export default {
    name: "ForestArea",

    components: {
        AddNewForestArea,
    },

    data() {
        return {
            forest_area: []
        }
    },

    computed: {
        ...mapGetters([
            'getForestArea'
        ])
    },

    mounted() {
        this.forest_area = this.getForestArea
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
.main__container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (min-width: 992px){
    .options__btn {
        width: 200px;
        height: 200px;
    }
}

@media screen and (max-width: 991px){
    .options__btn {
        width: 300px;
        height: 100px;
    }
}
</style>