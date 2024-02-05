<template>
    <div
        class="modal fade"
        id="addNewModal"
        tabindex="-1"
        aria-labelledby="addNewModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="addNewModalLabel">Add new</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2">
                        <label
                            for="forest_area"
                            class="form-label modal__label"
                        >
                            სატყეო უბანი
                        </label>

                        <select
                            v-model="forest_area"
                            class="form-select"
                            id="forest_area"
                        >
                            <option selected disabled>აირჩიეთ უბანი</option>
                            <option>უბანი 1</option>
                            <option>უბანი 2</option>
                            <option>უბანი 3</option>
                        </select>
                    </div>

                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="forest"
                            class="form-label modal__label"
                        >
                            სატყეო
                        </label>

                        <select
                            v-model="forest"
                            class="form-select"
                            id="forest"
                        >
                            <option selected disabled>აირჩიეთ სატყეო</option>
                            <option>სატყეო 1</option>
                            <option>სატყეო 2</option>
                            <option>სატყეო 3</option>
                        </select>
                    </div>

                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="quarter"
                            class="form-label modal__label"
                        >
                            კვარტალი
                        </label>

                        <select
                            v-model="quarter"
                            class="form-select"
                            id="quarter"
                        >
                            <option selected disabled>აირჩიეთ კვარტალი</option>
                            <option>კვარტალი 1</option>
                            <option>კვარტალი 2</option>
                            <option>კვარტალი 3</option>
                        </select>
                    </div>

                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="tax_area"
                            class="form-label modal__label"
                        >
                            სატაქსაციო უბანი
                        </label>

                        <select
                            v-model="tax_area"
                            class="form-select"
                            id="tax_area"
                        >
                            <option selected disabled>სატაქსაციო არეა</option>
                            <option>არეა 1</option>
                            <option>არეა 2</option>
                            <option>არეა 3</option>
                        </select>
                    </div>

                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="completion_date"
                            class="form-label modal__label"
                        >
                            შევსების დაწყების თარიღი
                        </label>

                        <input v-model="date" type="date" class="form-control" id="completion_date">
                    </div>

                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="description_method"
                            class="form-label modal__label"
                        >
                            საველე აღწერის მეთოდი
                        </label>

                        <select
                            v-model="description_method"
                            class="form-select"
                            id="description_method"
                        >
                            <option selected disabled>საველე აღწერის მეთოდი</option>
                            <option>მეთოდი 1</option>
                            <option>მეთოდი 2</option>
                            <option>მეთოდი 3</option>
                        </select>
                    </div>

                    <div v-if="forester_name" class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="description_method"
                            class="form-label modal__label"
                        >
                            მეტყევეს სახელი:
                        </label>

                        <input
                            v-model="forester_name"
                            type="text"
                            class="form-control"
                            readonly
                        >
                    </div>

                    <div class="text-center border-top pt-4 mt-4">
                        <button
                            :disabled="isDisabled"
                            type="button"
                            class="btn btn-success col-lg-6 col-12"
                            @click="register"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "AddNewModal",

    data() {
        return {
            forest_area: '',
            forest: '',
            quarter: '',
            tax_area: '',
            date: null,
            description_method: '',
            forester_name: ''
        }
    },

    methods: {
        register() {
            let obj = {
                forest_area: this.forest_area,
                forest: this.forest,
                quarter: this.quarter,
                tax_area: this.tax_area,
                date: this.date,
                description_method: this.description_method
            }

            this.$store.dispatch('setTaxCard', obj)

            this.forest_area = ''
            this.forest = ''
            this.quarter = ''
            this.tax_area = ''
            this.date = null
            this.description_method = ''
        }
    },

    computed: {
        ...mapGetters([
            'getForesterName'
        ]),

        isDisabled() {
            return !this.forest || !this.forest || !this.quarter || !this.tax_area || !this.date || !this.description_method
        }
    },

    mounted() {
        this.forester_name = this.getForesterName
    }
}
</script>

<style scoped lang="scss">
.modal__label {
    min-width: 200px;
}
</style>