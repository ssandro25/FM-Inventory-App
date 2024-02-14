<template>
    <div
        class="modal fade"
        id="macket1"
        tabindex="-1"
        aria-labelledby="macket1Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket1Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="soil_category">
                                1.1 მიწის კატეგორია
                            </label>

                            <select
                                v-model="soil_category"
                                class="form-select" id="soil_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSoilCategory"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="long_term_use_lease">
                                1.2 ხს
                            </label>

                            <select
                                v-model="long_term_use_lease"
                                class="form-select" id="long_term_use_lease"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getLongTermUseLease"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        type="button"
                        class="btn btn-success col-lg-6 col-12"
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
    name: "MacketModal1",

    data() {
        return {
            soil_category: '',
            long_term_use_lease: ''
        }
    },

    computed: {
        ...mapGetters([
            'getSoilCategory',
            'getLongTermUseLease'
        ])
    }
}
</script>

<style scoped lang="scss">

</style>