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
                            class="item rounded d-flex flex-column justify-content-between gap-2 fs-12 text-decoration-none text-white p-3 position-relative"
                        >
                            <div class="position-absolute top-0 end-0 m-3">
                                <button
                                    type="button"
                                    class="btn border-0"
                                    @click.prevent="showDropdown(item.id)"
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
                                                @click.prevent="downloadCSV(item.id, item.title)"
                                            >
                                                გადმოწერა
                                            </button>
                                        </li>
                                        <li style="list-style-type: unset;">
                                            <button
                                                type="button"
                                                class="btn btn-danger rounded-0 w-100"
                                                @click.prevent="removeFolder(item.id)"
                                            >
                                                წაშლა
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p class="fw-bold fs-6 text-success mb-0">{{ item.title }}</p>

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
    },

    methods: {
        showDropdown(id){
            const item = this.folders.find(item => item.id === parseInt(id));

            if (!item) return;

            if (item.dropdown) {
                item.dropdown = false;
            } else {
                this.folders.forEach(item => {
                    if (item.dropdown) {
                        item.dropdown = false;
                    }
                });
                item.dropdown = true;
            }
        },

        removeFolder(id) {
            const index = this.folders.findIndex(quarter => quarter.id === parseInt(id));

            if (index !== -1) {
                this.folders.splice(index, 1);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },

        downloadCSV(id, title) {
            // Flatten the dataArray into a single array
            const flattenedArray = this.getWorkSpace.reduce((acc, curr) => acc.concat(curr), []);

            // Convert flattened array to CSV format
            const csvContent = this.convertToCSV(flattenedArray);

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
            a.download = `${title}.csv`;

            // Append anchor to body and click it to trigger download
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
        },
        convertToCSV(dataArray) {
            const row = dataArray.map(obj => Object.values(obj).join(',')).join(',');
            return row;
        }
    },

    mounted() {
        this.folders.forEach(item => item.dropdown = false)
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