<template>
    <MacketModal1 />

    <button
        type="button"
        class="btn btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket1"
    >
        1. მიწის ზოგადი
    </button>

</template>

<script>
import MacketModal1 from "@/components/modals/mackets-modals/MacketModal1.vue";

export default {
    name: "FMMacket1",

    components: {
        MacketModal1
    }
}
</script>

<style scoped lang="scss">

</style>