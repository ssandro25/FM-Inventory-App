<template>
    <div class="container-fluid">
        <GoBackBtn />

        <div class="container mt-5">
            <div class="col-lg-3 col-12 mx-auto d-flex flex-column gap-3">
                <label
                    for="forester_name"
                    class="form-label modal__label"
                >
                    მეტყევეს სახელი და გვარი
                </label>

                <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="forester_name"
                >

                <button
                    :disabled="!this.name"
                    type="button"
                    class="btn btn-success"
                    @click="saveName"
                >
                    Save
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMOptions",

    components: {
        GoBackBtn
    },

    data() {
        return {
            name: ''
        }
    },

    methods: {
        saveName() {
            this.$store.dispatch('setForesterName', this.name)
        }
    }
}
</script>

<style scoped lang="scss">

</style>