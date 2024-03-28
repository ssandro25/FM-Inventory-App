<template>
    <AddNewFolder />

    <div class="container-fluid p-3 h-100">
        <div class="row gy-4 h-100">
            <div class="col-lg-9">
                <h1 class="text-white mb-3">საქაღალდეები</h1>

                <div class="row row-cols-md-3 row-cols-1 gy-4 items__list_row">
                    <div class="col">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#addNewFolder"
                            class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                        >
                            <div class="d-flex align-items-center gap-2">
                                <img src="../../assets/images/plus-solid.svg" width="20" alt="">

                                <span>
                                    დაამატე საქაღალდე
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
                            :to="/work-space/+item.id"
                            class="item rounded d-flex flex-column justify-content-between gap-2 fs-12 text-decoration-none text-white p-3"
                        >
                            <p class="mb-0">{{ item.title }}</p>

                            <p class="mb-0">
                                სატყეოები:
                            </p>

                            <p class="mb-0">
                                კვარტლები:
                            </p>

                            <p class="mb-0">
                                ლიტერები:
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 border-sm-top border-start border-start-sm-0">
                <WorkSpaceSideBar />
            </div>
        </div>

    </div>
</template>

<script>
import AddNewFolder from "@/components/modals/add-new-modals/AddNewFolder.vue";
import { mapGetters } from "vuex";
import WorkSpaceSideBar from "@/components/right_side_bars/WorkSpaceSideBar.vue";

export default {
    name: "WorkSpace",

    components: {
        WorkSpaceSideBar,
        AddNewFolder
    },

    data() {
        return {

        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace'
        ]),

        folders() {
            return this.getWorkSpace
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 991px){
    .border-start-sm-0 {
        border-left: unset !important;
    }

    .border-sm-top {
        border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    }
}
</style>