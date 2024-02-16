<template>
    <div
        class="modal fade"
        id="addNewLiter"
        tabindex="-1"
        aria-labelledby="addNewLiterLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewLiterLabel">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2">
                        <label
                            for="new_liter"
                            class="form-label modal__label"
                        >
                            ლიტერი:
                        </label>

                        <input
                            v-model="new_liter"
                            type="text"
                            class="form-control"
                            id="new_liter"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_liter"
                        type="button"
                        class="btn btn-success col-lg-6 col-12"
                        @click="add()"
                    >
                        დამატება
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
    name: "AddNewLiter",

    data() {
        return {
            new_liter: '',
            arr: null
        }
    },

    props: {
        params: Object
    },

    methods: {
        add() {
            let forestArea = JSON.parse(localStorage.getItem('forestArea'));

            this.arr = forestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID))


            let literObj = {
                id: this.arr.liters && this.arr.liters.length ? this.arr.liters.length + 1 : 1,
                title: this.new_liter
            }

            if (!this.arr.liters) {
                this.arr.liters = [literObj];
            } else {
                this.arr.liters.push(literObj)
            }

            localStorage.setItem('forestArea', JSON.stringify(forestArea));

            this.new_liter = ''
        }
    },

    computed: {
        ...mapGetters([
            'getForestArea'
        ])
    },

    // mounted() {
    //     this.add()
    // }

}
</script>


<style scoped lang="scss">

</style>