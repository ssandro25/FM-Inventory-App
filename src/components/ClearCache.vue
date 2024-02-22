<template>
    <div class="modal fade" id="clearCache" tabindex="-1" aria-labelledby="clearCacheLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="clearCacheLabel">
                        ქეშის გასუფთავება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body text-center fs-4">
                   ნამდვილად გსურთ ქეშის გასუფთავება? მონაცემები დაიკარგება!
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">დაუქმება</button>
                    <button
                        type="button"
                        class="btn btn-success"
                        @click="clearCache()"
                    >
                        გასუფთავება
                    </button>
                </div>
            </div>
        </div>
    </div>

    <button
        type="button"
        class="btn btn-danger w-100"
        data-bs-toggle="modal"
        data-bs-target="#clearCache"
    >
        ქეშის გაუსფთავება
        <img src="@/assets/images/broom-solid.svg" width="15" alt="">
    </button>
</template>

<script>
export default {
    name: "ClearCache",

    methods: {
        clearCache() {
            localStorage.removeItem('forestArea')

            location.href = "/"

        }
    }
}
</script>

<style scoped lang="scss">

</style>