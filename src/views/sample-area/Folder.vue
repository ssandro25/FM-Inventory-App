<template>
    <AddNewForestry_WS :params="params"/>

    <div class="container-fluid p-lg-5 p-3">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white pt-md-0 pt-5 mb-0">სატყეოები</h1>
        </div>

        <div class="row row-cols-md-3 row-cols-1 gy-4 items__list_row">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewForestryWS"
                    class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                >
                    <div class="d-flex align-items-center gap-2">
                        <img src="../../assets/images/plus-solid.svg" width="20" alt="">

                            <span>
                        დაამატე სატყეო
                    </span>
                    </div>
                </div>
            </div>

            <div
                v-for="item in forestryWS"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="'/work-space/'+this.$route.params.id+/forestry/ + item.id"
                    class="item rounded d-flex flex-column justify-content-between gap-2 fs-12 text-decoration-none text-white p-3 position-relative"
                >
                    <div class="position-absolute top-0 end-0 m-3">
                        <button
                            type="button"
                            class="btn border-0"
                            @click.prevent="item.dropdown = !item.dropdown"
                        >
                            <img src="@/assets/images/dots-vertical.svg" width="7" alt="">
                        </button>

                        <div
                            v-if="item.dropdown"
                            class="position-absolute top-75 end-0"
                        >
                            <ul class="bg-white p-0 rounded shadow-sm overflow-hidden">
                                <li style="list-style-type: unset;">
                                    <button
                                        type="button"
                                        class="btn btn-light rounded-0 w-100"
                                    >
                                        გადმოწერა
                                    </button>
                                </li>
                                <li style="list-style-type: unset;">
                                    <button
                                        type="button"
                                        class="btn btn-danger rounded-0 w-100"
                                        @click.prevent="removeForestry(item.id)"
                                    >
                                        წაშლა
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p class="fw-bold fs-6 text-success mb-0">{{ item.title }}</p>

                    <p class="mb-0">
                        კვარტლები:
                    </p>

                    <p class="mb-0">
                        ლიტერები:
                    </p>

                    <p class="mb-0">
                        სანიმუშო ფართობები:
                    </p>

                    <p class="mb-0">
                        სატაქსაციო ბარათები:
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import AddNewForestry_WS from "@/components/modals/add-new-modals/AddNewForestry_WS.vue";
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMFolder",

    components: {
        GoBackBtn,
        AddNewForestry_WS
    },

    computed: {
        ...mapGetters([
            'getWorkSpace'
        ]),

        forestryWS() {
            const workSpaceID = parseInt(this.params.workSpaceID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS : [];


            return forestryWS ? forestryWS : [];
        },

        params() {
            return {
                workSpaceID: this.$route.params.id
            }
        }
    },

    methods: {
        removeForestry(id) {
            const index = this.forestryWS.findIndex(quarter => quarter.id === parseInt(id));

            if (index !== -1) {
                this.forestryWS.splice(index, 1);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },
    },

    mounted() {
        this.$store.dispatch('setWorkSpaceID', this.$route.params.id)

        this.forestryWS.forEach(item => item.dropdown = false)
    }
}
</script>

<style scoped lang="scss">

</style>