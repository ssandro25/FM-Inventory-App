<template>
    <AddNewLiter_WS :params="params"/>

    <div class="container-fluid p-lg-5 p-3">
        <div class="d-flex flex-md-row flex-column align-items-md-center gap-3 mb-4">
            <GoBackBtn/>

            <h1 class="text-white pt-md-0 pt-5 mb-0">ლიტერები</h1>

            <div class="flex-grow-1 input-group">
                <span class="input-group-text">
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

        <div class="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between gap-3 mb-4">
            <p class="fs-4 mb-0">
                <span class="fw-bold fs-1">{{ filteredLiterWS.length }}</span> ჩანაწერი
            </p>

            <div class="d-flex align-items-center gap-3">
                <div class="d-none d-md-flex align-items-center gap-2 view__btn">
                    <button
                        type="button"
                        class="btn border-0 view__btn_list"
                        :class="{
                        'active' : getItemsListView === 'list'
                    }"
                        @click="itemsListView('list')"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>

                    <button
                        type="button"
                        class="btn border-0 view__btn_grid"
                        :class="{
                        'active' : getItemsListView === 'grid'
                    }"
                        @click="itemsListView('grid')"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                            <path
                                d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                        </svg>
                    </button>

                    <button
                        type="button"
                        class="btn border-0 view__btn_compact"
                        :class="{
                        'active' : getItemsListView === 'compact'
                    }"
                        @click="itemsListView('compact')"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-grid-fill" viewBox="0 0 16 16">
                            <path
                                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
                        </svg>
                    </button>
                </div>

                <div>
                    <button class="btn btn__filter" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                        ფილტრი
                    </button>

                    <div class="collapse position-absolute start-50 m-3" id="collapseFilter" style="z-index: 2;">
                        <div class="card card-body">
                            <div class="input-group">
                                <input
                                    v-model="min"
                                    type="number"
                                    class="form-control"
                                    placeholder="დან"
                                >
                                <span class="input-group-text">-</span>
                                <input
                                    v-model="max"
                                    type="number"
                                    class="form-control"
                                    placeholder="მდე"
                                >

                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    @click="clearFilter()"
                                >
                                    გასუფთავება
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="btn dropdown-toggle btn__sort border-0" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        სორტირება
                    </button>
                    <ul class="dropdown-menu">
                        <li @click="sortList('min-max')">
                            <a class="dropdown-item" href="#">
                                <img src="@/assets/images/sort-min-max.svg" class="me-1" width="16" alt="">
                                ზრდადობით
                            </a>
                        </li>

                        <li @click="sortList('max-min')">
                            <a class="dropdown-item" href="#">
                                <img src="@/assets/images/sort-max-min.svg" class="me-1" width="16" alt="">
                                კლებადობით
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="d-flex gap-3 mb-4 col-lg-5 col-12 p-0 d-none">
            <button
                type="button"
                class="btn btn-light w-50"
                @click="sortList('min-max')"
            >
                <img src="@/assets/images/sort-min-max.svg" class="me-1" width="16" alt="">
                ზრდადობით
            </button>

            <button
                type="button"
                class="btn btn-light w-50"
                @click="sortList('max-min')"
            >
                <img src="@/assets/images/sort-max-min.svg" class="me-1" width="16" alt="">
                კლებადობით
            </button>
        </div>

        <div v-if="filteredLiterWS.length">
            <div :class="{
                'row row-cols-1 gy-4 items__list_row' : getItemsListView === 'list',
                'row row-cols-md-3 row-cols-1 gy-4 items__list_row' : getItemsListView === 'grid',
                'row row-cols-md-3 row-cols-1 gy-4 items__list_row compact' : getItemsListView === 'compact',
            }">
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
                        class="item rounded d-flex flex-column justify-content-between gap-2 text-decoration-none text-white p-3 position-relative"
                        :class="{ 'border border-5 rounded border-success' : item.chosen }"
                    >
                        <div :class="{
                           'position-absolute top-0 end-0 m-3' : getItemsListView === 'list' || getItemsListView === 'grid',
                           'position-absolute top-50 end-0 translate-middle-y' : getItemsListView === 'compact',
                        }">
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
                                            @click.prevent="removeLiter(item.id)"
                                        >
                                            წაშლა
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p :class="{
                            'fw-bold fs-1 text-success mb-0' : getItemsListView === 'list' || getItemsListView === 'grid',
                            'text-center fs-16' : getItemsListView === 'compact'
                        }">
                            <span
                                :class="{ 'fs-16' : getItemsListView === 'compact', 'fs-5' : getItemsListView === 'list' || getItemsListView === 'grid' }">ლიტ.</span>
                            #{{ item.title }}
                        </p>

                        <p class="mb-0"
                           :class="{ 'd-none' : getItemsListView === 'compact', 'd-block' : getItemsListView === 'list' || getItemsListView === 'grid' }">
                            სანიმუშო ფართობები:
                        </p>

                        <p class="mb-0"
                           :class="{ 'd-none' : getItemsListView === 'compact', 'd-block' : getItemsListView === 'list' || getItemsListView === 'grid' }">
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
            dropdown: false,
            min: 1,
            max: 1000
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
            'getItemsListView'
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
            if (!this.search) {
                return this.literWS.filter(item => parseInt(item.title) >= this.min && parseInt(item.title) <= this.max)
            } else {
                return this.literWS.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
            }
        }

    },

    methods: {
        itemsListView(value) {
            this.$store.dispatch('setItemsListView', value)
        },

        clearFilter() {
            this.search = ''
            this.min = 1
            this.max = 1000
        },

        sortList(value) {
            if (value === 'min-max') {
                this.literWS.sort((a, b) => {
                    return parseInt(a.title) - parseInt(b.title);
                });
            }

            if (value === 'max-min') {
                this.literWS.sort((a, b) => {
                    return parseInt(b.title) - parseInt(a.title);
                });
            }
        },

        showDropdown(id){
            const item = this.literWS.find(item => item.id === parseInt(id));

            if (!item) return;

            if (item.dropdown) {
                item.dropdown = false;
            } else {
                this.literWS.forEach(item => {
                    if (item.dropdown) {
                        item.dropdown = false;
                    }
                });
                item.dropdown = true;
            }
        },

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
                .find(item => item.id === parseInt(id)).taxCardArr
                .find(item => item.chosen).mackets || []
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

        this.literWS.forEach(item => item.dropdown = false)
    }
}
</script>

<style scoped lang="scss">
//.dropdown-toggle::after {
//    display: none;
//}
.view__btn {
    .btn {
        width: 36px;
        height: 36px;
        background-color: #1e393f;
        transition: .3s;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #fff;
    }

    .btn.active {
        background-color: rgb(57 145 112);
    }

    .btn:hover {
        background-color: rgb(57 145 112);
    }
}

.btn__sort, .btn__filter {
    background-color: #1e393f;
    color: #fff;

    &:hover {
        background-color: rgb(57 145 112);
    }

}
</style>