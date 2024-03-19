<template>
    <div class="container-fluid p-md-5 p-3">
        <input
            v-model="searchWord"
            type="search"
            class="form-control"
            placeholder="ჩაწერეთ საძიებო სიტყვა"
        >

        <div v-if="bookmarks.length" class="d-flex flex-column gap-4 mt-4 border-bottom pb-4">
            <div
                v-for="item in bookmarks"
                :key="item.id"
                class="d-flex flex-md-row flex-column align-items-start gap-md-2 gap-3"
            >
                <div
                    class="modal fade"
                    :id="'book'+item.id"
                    tabindex="-1"
                    aria-labelledby="bookLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-fullscreen-sm-down">
                        <div class="modal-content bg-dark">
                            <div class="modal-header border-0">
                                <h1 class="modal-title fs-5" id="bookLabel">
                                    {{ item.label_ge }}
                                </h1>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <p class="mb-0">
                                    {{ item.label_lat }}
                                </p>
                                <p class="mb-0">
                                    {{ item.description }}
                                </p>
                                <div>
                                    <img :src="item.image" width="200" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-start gap-2">
                    <button
                        type="button"
                        class="btn p-0 border-0"
                        @click="removeFromBookmarks(item.id)"
                    >
                        <img src="@/assets/images/trash-solid.svg" width="15" alt="">
                    </button>

                    <p class="mb-0">
                        <span class="fw-bold text-decoration-underline">{{ item.label_lat }}:</span>
                        {{ item.description }}
                    </p>
                </div>

                <div
                    data-bs-toggle="modal"
                    :data-bs-target="'#book'+item.id"
                >
                    <img :src="item.image" width="200" alt="">
                </div>
            </div>
        </div>

        <div v-if="filteredBook.length" class="d-flex flex-column gap-4 mt-4">
            <div
                v-for="item in filteredBook"
                :key="item.id"
                class="d-flex flex-md-row flex-column align-items-start gap-md-2 gap-3"
            >
                <div
                    class="modal fade"
                    :id="'book'+item.id"
                    tabindex="-1"
                    aria-labelledby="bookLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-fullscreen-sm-down">
                        <div class="modal-content bg-dark">
                            <div class="modal-header border-0">
                                <h1 class="modal-title fs-5" id="bookLabel">
                                    {{ item.label_ge }}
                                </h1>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <p class="mb-0">
                                    {{ item.label_lat }}
                                </p>
                                <p class="mb-0">
                                    {{ item.description }}
                                </p>
                                <div>
                                    <img :src="item.image" width="200" alt="">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-start gap-2">
                    <button
                        type="button"
                        class="btn p-0 border-0"
                        @click="addToBookmark(item)"
                    >
                        <img v-if="!isBookmarked(item)" src="@/assets/images/fav-icon.svg" width="18" alt="">
                        <img v-else src="@/assets/images/fav-icon-choosen.svg" width="18" alt="">
                    </button>

                    <p class="mb-0">
                        <span class="fw-bold text-decoration-underline">{{ item.label_lat }}:</span>
                        {{ item.description }}
                    </p>
                </div>

                <div
                    data-bs-toggle="modal"
                    :data-bs-target="'#book'+item.id"
                >
                    <img :src="item.image" width="200" alt="">
                </div>
            </div>
        </div>

        <div v-else class="fs-5 text-center mt-4">
            ჩანაწერი არ მოიძებნა...
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "FMBook",

    data() {
        return {
            data: [],
            searchWord: '',
            bookmarks: [],
        }
    },

    watch: {
        bookmarks: {
            handler() {
                localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
            },
            deep: true,
        },
    },

    methods: {
        addToBookmark(item) {
            const index = this.bookmarks.findIndex(bookmark => bookmark.id === item.id);
            if (index === -1) {
                this.bookmarks.push(item);
            } else {
                this.bookmarks.splice(index, 1);
            }

            localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        },

        isBookmarked(item) {
            return this.bookmarks.some(bookmark => bookmark.id === item.id);
        },

        removeFromBookmarks(id) {
            const index = this.bookmarks.findIndex(product => product.id === parseInt(id));

            if (index !== -1) {
                this.bookmarks.splice(index, 1);
            }

            localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        },

        loadBookmarksFromLocalStorage() {
            const bookmarks = localStorage.getItem('bookmarks');
            if (bookmarks) {
                this.bookmarks = JSON.parse(bookmarks);
            }
        },
    },

    computed: {
        ...mapGetters([
            'getBook',
        ]),

        filteredBook() {
            return [...this.data].filter(item => item.label_ge.toLowerCase().includes(this.searchWord.toLowerCase()) || item.label_lat.toLowerCase().includes(this.searchWord.toLowerCase()))
        },
    },

    mounted() {
        this.loadBookmarksFromLocalStorage();

        this.data = this.getBook
    }
}
</script>



<style scoped lang="scss">

</style>