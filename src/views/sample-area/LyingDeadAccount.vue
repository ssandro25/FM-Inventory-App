<template>
    <div class="container-fluid p-md-5 p-3">
        {{ this.$route.params }}

        <nav class="mt-4">
            <div class="nav nav-tabs gap-1 border-0" id="nav-tab" role="tablist">
                <button
                    class="nav-link active"
                    id="nav-one-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-one"
                    type="button"
                    role="tab"
                    aria-controls="nav-one"
                    aria-selected="true"
                >
                    1.საველე აღრიცხვა
                </button>

                <button
                    class="nav-link"
                    id="nav-two-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-two"
                    type="button"
                    role="tab"
                    aria-controls="nav-two"
                    aria-selected="false"
                >
                    2.ძირნაყარის აღრიცხვის უწყისი
                </button>
            </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab" tabindex="0">
                1.საველე აღრიცხვა
            </div>

            <div class="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab" tabindex="0">
                2.ძირნაყარის აღრიცხვის უწყისი
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LyingDeadAccount"
}
</script>

<style scoped lang="scss">
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #fff;
    background-color: rgb(57, 145, 112);
    border-color: rgb(57, 145, 112);
}

.nav-tabs .nav-link:hover {
    color: #fff;
    background-color: rgb(57, 145, 112);
    border-color: rgb(57, 145, 112);
}

.nav-tabs .nav-link {
    color: #fff;
    background-color: #1e393f;
    border-color: #1e393f;
}
</style>