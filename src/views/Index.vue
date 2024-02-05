<template>
    <AddNewModal />

    <div class="container-fluid main__container py-3">
        <div class="container">
            <div class="d-flex justify-content-center flex-md-row flex-column align-items-center gap-5">
                <div>
                    <button
                        type="button"
                        class="btn btn-outline-success d-flex flex-column align-items-center justify-content-center gap-2 options__btn"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewModal"
                    >
                        <i class="fa-solid fa-plus fs-1"></i>

                        <span class="fs-4">
                            Add New
                        </span>
                    </button>
                </div>

                <div>
                    <router-link
                        :to="{ name: 'tax-card' }"
                        class="btn btn-outline-success d-flex flex-column align-items-center justify-content-center gap-2 options__btn"
                    >
                        <i class="fa-solid fa-list fs-1"></i>

                        <span class="fs-4">
                           My Records
                        </span>
                    </router-link>
                </div>

                <div>
                    <router-link
                        :to="{ name: 'options' }"
                        class="btn btn-outline-success d-flex flex-column align-items-center justify-content-center gap-2 options__btn"
                    >
                        <i class="fa-solid fa-gear fs-1"></i>

                        <span class="fs-4">
                           Options
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddNewModal from "@/components/AddNewModal.vue";

export default {
    name: "FMIndex",
    components: {AddNewModal}
}
</script>

<style scoped lang="scss">
.main__container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (min-width: 992px){
    .options__btn {
        width: 200px;
        height: 200px;
    }
}

@media screen and (max-width: 991px){
    .options__btn {
        width: 300px;
        height: 100px;
    }
}
</style>