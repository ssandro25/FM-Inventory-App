<template>
    <div class="container-fluid p-md-5 p-3 mt-md-0 mt-5">
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
                class="d-flex align-items-start gap-2"
                @click="removeFromBookmarks(index)"
            >
                <button class="btn p-0 border-0">
                    <img src="@/assets/images/trash-solid.svg" width="15" alt="">
                </button>

                <p class="mb-0">
                    <span class="fw-bold text-decoration-underline">{{ item.label_lat }}:</span>
                    {{ item.description }}
                </p>
            </div>
        </div>

        <div v-if="filteredBook.length" class="d-flex flex-column gap-4 mt-4">
            <div
                v-for="item in filteredBook"
                :key="item.id"
                class="d-flex align-items-start gap-2"
                @click="addToBookmark(item)"
            >
                <button class="btn p-0 border-0">
                    <img v-if="!isBookmarked(item)" src="@/assets/images/fav-icon.svg" width="18" alt="">
                    <img v-else src="@/assets/images/fav-icon-choosen.svg" width="18" alt="">
                </button>

                <p class="mb-0">
                    <span class="fw-bold text-decoration-underline">{{ item.label_lat }}:</span>
                    {{ item.description }}
                </p>
            </div>
        </div>

        <div v-else class="fs-5 text-center mt-4">
            ჩანაწერი არ მოიძებნა...
        </div>
    </div>
</template>

<script>
import button from "bootstrap/js/src/button";

export default {
    name: "FMBook",

    data() {
        return {
            data: [
                { id: 1, label_ge: 'აღმოსავლური წიფელი', label_lat: 'Fagus Orientalis', description: '20-40 მ სიმაღლის ხეა. გლუვი, რუხი ან თეთრი ფერის ქერქით. ფოთლები რიგ-რიგად ორ მწკრივად არის განლაგებული. ფორმით ელიფსურიდან უკუკვერცხისებურამდე. კიდეებზე ოდნავ ტალღისებური ან ოდნავ დაკბილულია. ზედა მხრიდან მუქი მწვანე ფერისაა, პრიალა, შიშველი. ქვედა მხარე ღია მწვანეა, ძარღვების გაყოლებაზე შებუსული. იზრდება დაბლობიდან სუბალპურ სარტყლამდე. გავრცელებულია მთელ საქართველოში, გარდა თუშეთისა და აღმოსავლეთ საქართველოს ჭალის ტყეებისა. გავრცელების საერთო არეალი მოიცავს კავკასიას, სამხრეთ ევროპას, მცირე აზიასა და ირანს.' },
                { id: 2, label_ge: 'კავკასიური რცხილა', label_lat: 'Carpinus betulus', description: 'ხე არყისებრთა ოჯახისა. მისი სიმაღლე 35 მ აღწევს. აქვს გლუვი[1] ან ოდნავ დამსკდარი ქერქი. ფოთლები შიშველია, მოკლეყუნწიანი, ფირფიტა მოყვანილობით მოგრძოკვერცხისებურია, წაწვეტებული, ორმაგხერხკბილა. კვირტები ოვალურია, მოწითალო მურა ფერის. მამრობითი ყვავილედი მჭადაა, ყლორტის ძირებში განლაგებული. მდედრობითი ყვავილედი კენწრულია. ნაყოფის საბურველი სამნაკვთიანია, თვითონ ნაყოფი კაკალია. ყვავის მარტ-აპრილში, ნაყოფმსხმოიარობს ივნის-ივლისში.' },
                { id: 3, label_ge: 'ქართული მუხა', label_lat: 'Quercus iberica', description: 'ფოთოლმცვენი ხე წიფლისებრთა ოჯახისა, რომლის სამშობლოა კავკასია (გავრცელებულია აგრეთვე შავი ზღვის სანაპიროზე ჩრდილო-აღმოსავლეთი თურქეთის ტერიტორიაზე, მცირე აზიასა და ირანშიც).[1] ქართული მუხა წარმოადგენს საკმაოდ მოზრდილ ხეს, რომელიც 20-25 მეტრის სიმაღლემდე იზრდება, იშვიათ შემთხვევებში კი 40 მეტრსაც აღწევს. Q. iberica სინათლისა და სითბოს მოყვარული ხეა, ფართოდაა გავრცელებული აღმოსავლეთი საქართველოს უფრო მშრალ რეგიონებში (ტოპონიმი „იბერია“ აღმოსავლეთი საქართველოს ეკვივალენტურია). მიუხედავად ამისა, იგი შეიძლება დასავლეთი საქართველოს ნოტიო ჭალებშიც შეგვხვდეს, სადაც ხშირად შედარებით მშრალ, ციცაბო ფერდობებზე წმინდა რაყას ქმნის. ბუნებრივ პირობებში მრავლდება თესლით. ნაყოფმსხმოიარობს 15-20 წლისა. ბუნებრივი განახლება ცუდი და ნელია.' },
                { id: 4, label_ge: 'აღმოსავლური ნაძვი', label_lat: 'Picea orientalis', description: 'წიწვოვანი მცენარე ფიჭვისებრთა ოჯახისა. ფართოდაა გავრცელებული ჩრდილო-აღმოსავლეთ ევროპაში, მცირედ — ალპებში, კარპატებში, ბალკანეთის ნახევარკუნძულის მთიან ნაწილებში, აგრეთვე საქართველოშიც.[1] სიმაღლეში 30 მ-ს აღწევს (იშვიათად 50 მ-ს). აქვს კონუსისებური ფორმა. წიწვები (ფოთლები) სიგრძეში 1–2,5 სმ-მდეა, რომელთა სიცოხლე ექვს და მეტ წელს გრძელდება. გირჩა 15 სმ სიგრძისა და 4 სმ სიგანისაა, თესლი კვერცხისებური-წამახვილებული ფორმისა და 4 მმ სიგრძისაა. ჩვეულებრივი ნაძვი თესლს იძლევა 20–60 წლის ასაკიდან, 4–5 წელიწადში ერთხელ. ცოცხლობს საშუალოდ 250–300 წელი, მაგრამ არსებობს უფრო ხნიერი ნაძვებიც (მაგ. 468 წლის).' },
                { id: 5, label_ge: 'კავკასიური სოჭი, ნორდმანის სოჭი', label_lat: 'Abies nordmanniana', description: 'მარადმწვანე წიწვოვანი ხე ფიჭვისებრთა ოჯახისა. მისი სიმაღლე 50 მ აღწევს, დიამეტრი 1,5 მ. შეკრულ ხეთადგომაში მისი პარამიდული ვარჯი დიდ სიმაღლეზე ტოტებისაგან გაწმენდილია, ეული ხე კი ძირიდანვე დატოტვილია, სიბერეში გადასულ ხეს ქერქი ღრმად და ტალღისებრად აქვს დაღარული. 2-3 (4) სმ სიგრძისა და 2-2,5 (3) მმ სიგანის წიწვები ზემოდან მუქი მწვანეა, ქვემოდან კი 2 თეთრი ზოლი გასდევს.' },
            ],

            searchWord: '',

            bookmarks: []
        }
    },

    methods: {
        addToBookmark(item) {
            const index = this.bookmarks.findIndex(bookmark => bookmark.id === item.id);
            if (index === -1) {
                this.bookmarks.push(item);
            } else {
                this.bookmarks.splice(index, 1);
            }
        },

        isBookmarked(item) {
            return this.bookmarks.some(bookmark => bookmark.id === item.id);
        },

        removeFromBookmarks(index) {
            this.bookmarks.splice(index, 1);
        },
    },

    computed: {
        button() {
            return button
        },
        filteredBook() {
            return [...this.data].filter(item => item.label_ge.toLowerCase().includes(this.searchWord.toLowerCase()) || item.label_lat.toLowerCase().includes(this.searchWord.toLowerCase()))
        },

    },
}
</script>



<style scoped lang="scss">

</style>