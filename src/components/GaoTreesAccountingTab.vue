<template>
    <div class="overflow-auto">
        <div style="width: max-content">
            <div class="d-flex bg-dark">
                <div class="border p-2" style="width: 136px;">დიამეტრი</div>

                <div class="border border-start-0">
                    <div class="border-bottom p-2">დიამეტრი, სმ 1,3 მ სიმაღლეზე</div>
                    <div class="d-flex">
                        <div class="border-end">
                            <div class="p-2">ზრდადი ხეები</div>
                            <div class="d-flex border-top">
                                <div class="p-2 border-end" style="width: 129px;">სამასალე</div>
                                <div class="p-2 border-end" style="width: 257px;">ნახევრად - სამასალე</div>
                                <div class="p-2 border-end" style="width: 100px;">საშეშე</div>
                                <div>
                                    <div class="p-2">მ.შ</div>
                                    <div class="d-flex border-top">
                                        <div class="p-2 border-end" style="width: 118px;">ხმობადი</div>
                                        <div class="p-2" style="width: 99px;">ფაოტი</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="d-flex flex-column justify-content-end border-end">
                                <div class="p-2">ზეხმელი</div>
                                <div class="d-flex border-top">
                                    <div class="p-2 border-end" style="width: 241px;">ზეხმელი-სამასალე</div>
                                    <div class="p-2" style="width: 187px;">ზეხმელი-შეშა</div>
                                </div>
                            </div>

                            <div class="p-2" style="width: 103px;">ძირწვი</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex bg-dark">
                <div class="p-2 border border-top-0" style="width: 136px;">1</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 129px;">2</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 257px;">3</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 100px;">4</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 118px;">5</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 100px;">6</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 240.3px;">7</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 188px;">8</div>
                <div class="p-2 border border-top-0 border-start-0" style="width: 104px;">9</div>
            </div>

            <div class="bg-dark item__row"
                 v-for="(item, index) in gaoTable"
                 :key="index"
            >
                <div class="border">
                    <div class="text-center p-2">{{ item.key }}</div>

                    <div
                        v-for="(item, index) in item.option"
                        :key="index"
                    >
                        <div class="d-flex">
                            <div class="border p-2" style="width: 136px;">
                                {{ item.diameter }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 129px;">
                                {{ item.categories.samasale ? item.categories.samasale :  '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 257px;">
                                {{ item.categories.nakhevrad_samasale ? item.categories.nakhevrad_samasale :  '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 100px;">
                                {{ item.categories.sasheshe ? item.categories.sasheshe :  '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 118px;">
                                {{ item.categories.zrdadi_khmobadi ? item.categories.zrdadi_khmobadi :  '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 99px;">
                                {{ item.categories.zrdadi_pauti ? item.categories.zrdadi_pauti :  '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 241px;">
                                {{ item.categories.zekhmeli_samasale ? item.categories.zekhmeli_samasale :  '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 187px;">
                                {{ item.categories.zekhmeli_shesha ? item.categories.zekhmeli_shesha :  '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2 border-end-0" style="width: 103px;">
                                {{ item.categories.dzirkvi ? item.categories.dzirkvi :  '&nbsp;' }}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="table-responsive d-none">
        <table class="table table-bordered table-dark table-striped mt-3">
            <thead>
            <tr>
                <th rowspan="4">
                    <div class="text-rotate">
                       დიამეტრი
                    </div>
                </th>

                <th colspan="8">
                    დიამეტრი, სმ 1,3 მ სიმაღლეზე
                </th>
            </tr>

            <tr>
                <th colspan="5">
                    ზრდადი ხეები
                </th>

                <th colspan="2" rowspan="2">
                    ზეხმელი
                </th>

                <th rowspan="3">
                    <div class="text-rotate mx-auto text-center">
                        ძირწვი
                    </div>
                </th>
            </tr>

            <tr>
                <th rowspan="2">
                    <div class="text-rotate">
                        სამასალე
                    </div>
                </th>

                <th rowspan="2">
                    <div class="text-rotate">
                        ნახევრად - სამასალე
                    </div>
                </th>

                <th rowspan="2">
                    <div class="text-rotate">
                        საშეშე
                    </div>
                </th>

                <th colspan="2">
                    მ.შ
                </th>
            </tr>

            <tr>
                <th>
                    <div class="text-rotate">
                        ხმობადი
                    </div>
                </th>

                <th>
                    <div class="text-rotate">
                        ფაოტი
                    </div>
                </th>

                <th>
                    <div class="text-rotate">
                        ზეხმელი-სამასალე
                    </div>
                </th>

                <th>
                    <div class="text-rotate">
                        ზეხმელი-შეშა
                    </div>
                </th>
            </tr>

            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
            </tr>
            </thead>

            <tbody>
            <tr
                v-for="(item, index) in gaoTable"
                :key="index"
            >
                <td class="text-center p-0" colspan="12">
                    <tr>
                        <td colspan="9">{{ item.key }}</td>
                    </tr>

                    <tr
                        v-for="(item, index) in item.option"
                        :key="index"
                    >
                        <td class="border border-start-0" style="width: 136px;"> {{ item.diameter }}</td>

                        <td class="border border-start-0" style="width: 129px;">
                            {{ item.categories.samasale ? item.categories.samasale :  '&nbsp;' }}
                        </td>

                        <td class="border border-start-0"  style="width: 257px;">
                            {{ item.categories.nakhevrad_samasale ? item.categories.nakhevrad_samasale :  '&nbsp;' }}
                        </td>

                        <td class="border border-start-0"  style="width: 100px;">
                            {{ item.categories.sasheshe ? item.categories.sasheshe :  '&nbsp;' }}
                        </td>

                        <td class="border border-start-0"  style="width: 118px;">
                            {{ item.categories.zrdadi_khmobadi ? item.categories.zrdadi_khmobadi :  '&nbsp;' }}
                        </td>

                        <td class="border border-start-0"  style="width: 99px;">
                            {{ item.categories.zrdadi_pauti ? item.categories.zrdadi_pauti :  '&nbsp;' }}
                        </td>

                        <td class="border border-start-0"  style="width: 241px;">
                            {{ item.categories.zekhmeli_samasale ? item.categories.zekhmeli_samasale :  '&nbsp;' }}
                        </td>

                        <td class="border border-start-0" style="width: 187px;">
                            {{ item.categories.zekhmeli_shesha ? item.categories.zekhmeli_shesha :  '&nbsp;' }}
                        </td>

                        <td class="border border-start-0 border-end-0"  style="width: 103px;">
                            {{ item.categories.dzirkvi ? item.categories.dzirkvi :  '&nbsp;' }}
                        </td>
                    </tr>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "GaoTreesAccountingTab",

    data() {
        return {
            gaoTable: []
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
        ]),

        addedTreesData() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).gaoAddedTreesArr
        }
    },

    mounted() {
        // Группировка по registered_tree
        const groupedByTree = this.addedTreesData.reduce((acc, tree) => {
            const key = tree.registered_tree;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(tree);
            return acc;
        }, {});

        // Группировка по диаметру внутри каждой группы по имени
        for (const treeName in groupedByTree) {
            groupedByTree[treeName] = groupedByTree[treeName].reduce((acc, tree) => {
                const key = tree.diameter;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(tree);
                return acc;
            }, {});
        }

        // Подсчет категорий внутри каждой группы по имени и диаметру
        for (const treeName in groupedByTree) {
            for (const diameter in groupedByTree[treeName]) {
                const categoriesCount = groupedByTree[treeName][diameter].reduce((acc, tree) => {
                    const category = tree.category;
                    acc[category] = (acc[category] || 0) + 1;
                    return acc;
                }, {});
                groupedByTree[treeName][diameter] = categoriesCount;
            }
        }

        // Функция для замены грузинских символов на латинские и замены пробелов на "_"
        function normalizeString(str) {
            return str.replace(/ა/g, "a")
                .replace(/ბ/g, "b")
                .replace(/გ/g, "g")
                .replace(/დ/g, "d")
                .replace(/ე/g, "e")
                .replace(/ვ/g, "v")
                .replace(/ზ/g, "z")
                .replace(/თ/g, "t")
                .replace(/ი/g, "i")
                .replace(/კ/g, "k")
                .replace(/ლ/g, "l")
                .replace(/მ/g, "m")
                .replace(/ნ/g, "n")
                .replace(/ო/g, "o")
                .replace(/პ/g, "p")
                .replace(/ჟ/g, "zh")
                .replace(/რ/g, "r")
                .replace(/ს/g, "s")
                .replace(/ტ/g, "t")
                .replace(/უ/g, "u")
                .replace(/ფ/g, "p")
                .replace(/ქ/g, "k")
                .replace(/ღ/g, "gh")
                .replace(/ყ/g, "q")
                .replace(/შ/g, "sh")
                .replace(/ჩ/g, "ch")
                .replace(/ც/g, "ts")
                .replace(/ძ/g, "dz")
                .replace(/წ/g, "ts")
                .replace(/ჭ/g, "ch")
                .replace(/ხ/g, "kh")
                .replace(/ჯ/g, "j")
                .replace(/ჰ/g, "h")
                .replace(/ /g, "_")
                .replace(/-/g, "_");
        }

        // Преобразование объекта groupedByTree в массив объектов key: option

        this.gaoTable = Object.entries(groupedByTree).map(([treeName, treeOptions]) => {
            const optionsArray = Object.entries(treeOptions).map(([diameter, categories]) => {
                const normalizedCategories = Object.keys(categories).reduce((acc, category) => {
                    acc[normalizeString(category)] = categories[category];
                    return acc;
                }, {});
                return { diameter: diameter, categories: normalizedCategories };
            });
            return { key: treeName, option: optionsArray };
        });

        console.log(typeof this.gaoTable[0].option[0].categories, this.gaoTable[0].option[0].categories);

    }

}
</script>

<style scoped lang="scss">
//.text-rotate {
//    writing-mode: vertical-rl;
//    text-orientation: mixed;
//    transform: rotate(-180deg)
//}

.table tr td,
div.border,
div.border-end,
div.border-top,
div.border-bottom {
    border-color: #4d5154 !important;
}

.item__row:nth-child(odd) {
    background: #2c3034 !important;
}
</style>