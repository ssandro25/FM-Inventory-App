<template>
    <a
        @click="$router.go(-1)"
        class="home__btn_arrow d-flex align-items-center justify-content-center rounded-circle"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M2 9C2.55228 9 3 8.55228 3 8C3 7.44772 2.55228 7 2 7L2 9ZM1.19289 7.29289C0.802369 7.68342 0.802369 8.31658 1.19289 8.70711L7.55685 15.0711C7.94738 15.4616 8.58054 15.4616 8.97107 15.0711C9.36159 14.6805 9.36159 14.0474 8.97107 13.6569L3.31421 8L8.97107 2.34315C9.36159 1.95262 9.36159 1.31946 8.97107 0.928932C8.58054 0.538407 7.94738 0.538407 7.55685 0.928932L1.19289 7.29289ZM2 7L1.9 7L1.9 9L2 9L2 7Z" fill="#1A1A1F"/>
        </svg>
    </a>
</template>

<script>
export default {
    name: "GoBackBtn"
}
</script>

<style scoped lang="scss">
.home__btn_arrow {
    width: 35px;
    height: 35px;
    background-color: #E4E3EB;
    top: 20px;
    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color: #D9D8E0;
    }
}

@media screen and (max-width: 600px){
    .home__btn_arrow {
        position: fixed;
        top: 20px;
        z-index: 1;
    }
}
</style>