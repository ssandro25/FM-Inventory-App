<template>
    <AddNewLiter_WS :params="params"/>

    <div class="container-fluid p-lg-5 p-3">
        <div class="d-flex flex-md-row flex-column align-items-md-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white pt-md-0 pt-5 mb-0">ლიტერები</h1>

            <div class="flex-grow-1 input-group">
                <span class="input-group-text bg-white">
                    <img src="@/assets/images/search-icon.svg" width="14" alt="">
                </span>

                <input
                    v-model="search"
                    type="search"
                    class="form-control"
                    placeholder="მოძებნე ლიტერის ნომრით"
                >
            </div>
        </div>

        <div v-if="filteredLiterWS.length">
            <div class="row row-cols-md-3 row-cols-1 gy-4 items__list_row">
                <div class="col">
                    <div
                        data-bs-toggle="modal"
                        data-bs-target="#addNewLiter_WS"
                        class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                    >
                        <div class="d-flex align-items-center gap-2">
                            <img src="../../assets/images/plus-solid.svg" width="20" alt="">

                            <span>
                            დაამატე ლიტერი
                        </span>
                        </div>
                    </div>
                </div>

                <div
                    v-for="item in filteredLiterWS"
                    :key="item.id"
                    class="col"
                >
                    <router-link
                        :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.$route.params.id+/liter/+item.id"
                        class="item rounded d-flex flex-column justify-content-between gap-2 fs-12 text-decoration-none text-white p-3 position-relative"
                    >
<!--                        ნამდვილად გსურთ ლიტერი {{ item.title }}-ის წაშლა? წაშლილი მონაცემების აღდგენა შეუძლებელია.-->


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
                                            @click.prevent="downloadCSV(item.id, item.title)"
                                        >
                                            გადმოწერა
                                        </button>
                                    </li>
                                    <li style="list-style-type: unset;">
                                        <button
                                            type="button"
                                            class="btn btn-danger rounded-0 w-100"
                                            @click.prevent="removeLiter(item.id)"
                                        >
                                            წაშლა
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p class="fw-bold fs-1 text-success mb-0">
                            <span class="fs-5">ლიტ.</span>
                            #{{ item.title }}
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

        <p v-else class="d-flex align-items-center justify-content-center gap-2 mb-0 text-center fs-4">
            ლიტერი არ მოიძებნა...

            <span
                v-if="!literWS.length"
                class="cursor-pointer text-success text-decoration-underline"
                data-bs-toggle="modal"
                data-bs-target="#addNewLiter_WS"
            >
                დაამატე ლიტერი
            </span>
        </p>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import GoBackBtn from "@/components/GoBackBtn.vue";
import AddNewLiter_WS from "@/components/modals/add-new-modals/AddNewLiter_WS.vue";

export default {
    name: "Quarter_WS",

    components: {
        AddNewLiter_WS,
        GoBackBtn,
    },

    data() {
        return {
            search: '',
            dropdown: false
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
        ]),

        literWS() {
            const workSpaceID = parseInt(this.params.workSpaceID);
            const forestryWS_ID = parseInt(this.params.forestryWS_ID);
            const quarterWS_ID = parseInt(this.params.quarterWS_ID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === forestryWS_ID) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS.find(item => item.id === quarterWS_ID) : [];
            const literWS = quarterWS ? quarterWS.literWS : [];

            return literWS ? literWS : [];
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.getForestryWS_ID,
                quarterWS_ID: this.$route.params.id
            }
        },

        filteredLiterWS() {
            return [...this.literWS].filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
        },
    },

    methods: {
        removeLiter(id) {
            const index = this.literWS.findIndex(liter => liter.id === parseInt(id));

            if (index !== -1) {
                this.literWS.splice(index, 1);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },

        downloadCSV(id, title) {
            // Flatten the dataArray into a single array
            const flattenedArray = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(id)).taxCardArr || []
                .reduce((acc, curr) => acc.concat(curr), []);

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
        this.$store.dispatch('setQuarterWS_ID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">
.dropdown-toggle:after {
    display: none;
}
</style>