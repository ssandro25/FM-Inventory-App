<template>
    <div class="container-fluid p-md-5 p-3 h-100">
        <div class="row row-cols-md-2 row-cols-1 gy-4 h-100">
            <div class="col">
                <router-link
                    to="/"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3 fs-3 text-center h-100"
                >
<!--                    :to="/work-space/+this.getWorkSpaceID+/forestry/+this.$route.params.id+/quarter/+item.id"-->
                    ზრდადი და ზეხმელი ხეების აღრიცხვის უწყისი
                </router-link>
            </div>

            <div class="col">
                <router-link
                    to="/"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3 fs-3 text-center h-100"
                >
                    ძირნაყარის აღრიცხვის უწყისი
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SampleArea"
}
</script>

<style scoped lang="scss">

</style>