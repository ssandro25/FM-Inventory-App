<template>
    <div class="container-fluid">
        <div class="container pt-5">
            <div class="col-lg-3 col-12 mx-auto">
                <div class="d-flex flex-column gap-3">
                    <label
                        for="forester_name"
                        class="form-label modal__label"
                    >
                        მეტყევის სახელი და გვარი
                    </label>

                    <input
                        v-model="name"
                        type="text"
                        class="form-control"
                        id="forester_name"
                        placeholder="შეიყვანეთ სახელი"
                    >

                    <button
                        :disabled="!this.name"
                        type="button"
                        class="btn btn-success w-100"
                        @click="saveName"
                    >
                        Save
                    </button>
                </div>

                <div class="mt-5">
                   <ClearCache />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ClearCache from "@/components/ClearCache.vue";

export default {
    name: "FMOptions",

    components: {
        ClearCache
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