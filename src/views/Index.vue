<template>
<div class="h-100 d-flex flex-column justify-content-center text-center p-3">
    <h1 class="mb-0">მოგესალმებით!</h1>

    <h2 class="fs-3 mt-5 mb-0">
        მიმდინარეობს აპლიკაციის შემუშავება
    </h2>

    <p class="fs-5 mt-5 mb-0">
        კითხვები, რჩევები, შენიშვნები გთხოვთ გამოგზავნოთ
        <a href="mailto: app@forestmatters.ge" class="text-white">app@forestmatters.ge</a> ან
        <a href="mailto: info@forestmatters.ge" class="text-white">info@forestmatters.ge</a>.
    </p>

    <p class="fs-5 text-center mt-2 mb-0">
        ტელ.:
        <a href="tel: 595927391" class="text-white">595927391</a>
    </p>

    <p class="fs-5 text-center mt-4 mb-0">
        {{ currentDate }}
    </p>

    <p class="fs-5 mt-5 mb-0">
        &copy; ა(ა)იპ "ფორესთ მეთერს" / Forest Matters NNLE
    </p>
    
    <div class="mt-3">
        <img src="@/assets/images/flag_of_georgia.png" width="70" alt="">
    </div>

    <div class="mt-3">
        <p class="d-flex align-items-center justify-content-center gap-1 mb-0" style="font-size: 12px;">
            Created by
            <a href="https://www.linkedin.com/in/ssandro25/" class="d-flex align-items-center gap-1 text-white text-decoration-none" target="_blank">
                <img src="@/assets/images/linkedin.svg" width="12" alt="">
                ssandro25
            </a>
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: "FMIndex",

    computed: {
        currentDate() {
            const now = new Date();
            const hours = ('0' + now.getHours()).slice(-2);
            const minutes = ('0' + now.getMinutes()).slice(-2);
            const day = ('0' + now.getDate()).slice(-2);
            const month = ('0' + (now.getMonth() + 1)).slice(-2);
            const year = now.getFullYear();
            return `${hours}:${minutes} ${day}/${month}/${year}`;
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 600px){
    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 20px !important;
    }

    p {
        font-size: 16px !important;
    }
}
</style>