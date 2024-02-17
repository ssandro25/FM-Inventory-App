<template>
    <AddNewLiter :params="params"/>

    <div class="container-fluid p-5">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white mb-0">ლიტერები</h1>
        </div>

        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewLiter"
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
                v-for="item in liters"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="'/forest-district/'+this.$route.params.id+'/forestry/'+this.$route.params.id+'/quarter/'+this.$route.params.id+'/macket/'+item.id"
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
import AddNewLiter from "@/components/modals/add-new-modals/AddNewLiter.vue";
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMLiter",

    components: {
        GoBackBtn,
        AddNewLiter
    },

    data() {
        return {
            // liters: []
        }
    },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getQuarterID',
            'getForestArea'
        ]),

        liters() {
            // let forestArea = JSON.parse(localStorage.getItem('forestArea')) || [];
            //
            // return forestArea
            //     .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            //     .find(item => item.id === parseInt(this.params.quarterID)).quarters
            //     .find(item => item.id === parseInt(this.params.literID)).liters

            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
        },

        params() {
            return {
                forestAreaID: this.getForestAreaID,
                quarterID: this.getQuarterID,
                literID: this.$route.params.id
            }
        }
    },


    mounted() {
        this.$store.dispatch('setLiterID', this.$route.params.id)

        console.log(this.liters)

        // this.liters = this.getForestArea
        //     .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
        //     .find(item => item.id === parseInt(this.params.quarterID)).quarters
        //     .find(item => item.id === parseInt(this.params.literID)).liters
        // console.log(this.getForestArea)
    }
}
</script>