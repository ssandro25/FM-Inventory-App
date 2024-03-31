<template>
    <!--    <div class="col-lg-6 col-12 p-0 table-responsive">-->
    <div class="table-responsive">
        <table
            v-for="(item, index) in gaoTable"
            :key="index"
            class="table table-bordered table-dark table-striped mt-3"
        >
            <thead>
            <tr>
                <th rowspan="7">
                    <div class="text-rotate">
                        დიამეტრი
                    </div>
                </th>

                <th colspan="13">
                    ტყის ელემენტი ({{ item.key }})
                </th>
            </tr>

            <tr>
                <th colspan="13">
                    სიმაღლის თანრიგი
                </th>
            </tr>

            <tr>
                <th colspan="2">
                    ხეთა რიცხვი
                </th>

                <th rowspan="5">
                    <div class="text-rotate">
                        &#8721; G
                    </div>
                </th>

                <th colspan="6">
                    ზრდადი ხეების მარაგი, მ3
                </th>

                <th colspan="2">
                    ზეხმელი
                </th>

                <th colspan="2">
                    ძირკვი
                </th>
            </tr>

            <tr>
                <th rowspan="4">
                    <div class="text-rotate">
                        სულ
                    </div>
                </th>

                <th rowspan="4" style="width: 65px;">
                    <div class="text-rotate">
                        მ.შ სმსლ
                    </div>
                </th>

                <th colspan="6">
                    ხის ღეროს
                </th>

                <th rowspan="4">
                    <div class="text-rotate">
                        ხეების რაოდენობა
                    </div>
                </th>

                <th rowspan="4">
                    <div class="text-rotate">
                        მარაგი, მ3
                    </div>
                </th>

                <th rowspan="4">
                    <div class="text-rotate">
                        რაოდენობა
                    </div>
                </th>

                <th rowspan="4">
                    <div class="text-rotate">
                        მარაგი, მ3
                    </div>
                </th>
            </tr>

            <tr>
                <th rowspan="3">
                    <div class="text-rotate">
                        საერთო
                    </div>
                </th>

                <th rowspan="3">
                    <div class="text-rotate">
                        მ.შ სამასალე
                    </div>
                </th>

                <th colspan="4">
                    მ.შ საერთოდან
                </th>
            </tr>

            <tr>
                <th colspan="2">
                    ხმობადი
                </th>

                <th colspan="2">
                    ფაუტი
                </th>
            </tr>

            <tr>
                <th>
                    <div class="text-rotate">
                        ხეთა რაოდენობა
                    </div>
                </th>

                <th>
                    <div class="text-rotate">
                        მარაგი, მ3
                    </div>
                </th>

                <th>
                    <div class="text-rotate">
                        ხეთა რაოდენობა
                    </div>
                </th>

                <th>
                    <div class="text-rotate">
                        მარაგი, მ3
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-info text-center fst-italic">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
            </tr>
            <tr v-for="(item, index) in item.option"
                :key="index"
            >
                <td>{{ item.diameter }}</td>
                <td>{{ item.count }}</td>
                <td></td>
                <td>{{ calc(item.count, item.diameter) }}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td>სულ</td>
                <td>
                    {{
                        (Number(item.categoryCountMap.samasale) || 0) +
                        (Number(item.categoryCountMap.nakhevrad_samasale) || 0) +
                        (Number(item.categoryCountMap.sasheshe) || 0) +
                        (Number(item.categoryCountMap.zrdadi_khmobadi) || 0) +
                        (Number(item.categoryCountMap.zrdadi_pauti) || 0) +
                        (Number(item.categoryCountMap.zekhmeli_samasale) || 0) +
                        (Number(item.categoryCountMap.zekhmeli_shesha) || 0) +
                        (Number(item.categoryCountMap.dzirkvi) || 0)
                    }}
                </td>
                <td></td>
                <td>teeeeeest</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td>1 ჰა-ზე</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="3">საშუალო ხის კვეთის ფართობი, მ2</td>
                <td colspan="11"></td>
            </tr>
            <tr>
                <td colspan="3">საშუალო დიამეტრი, სმ</td>
                <td colspan="11"></td>
            </tr>
            <tr>
                <td colspan="3">საშუალო სიმაღლე, მ</td>
                <td colspan="11"></td>
            </tr>
            <tr>
                <td colspan="3">ფართობი სიხშირე</td>
                <td colspan="11"></td>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "GaoTreesAccountProcessing",

    data() {
        return {
            gaoTable: [],
        }
    },

    watch: {
        addedTreesData: {
            handler() {
                this.groupTreedData()
            },
            deep: true
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',

            'getBasalAreaCalculate'
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

    methods: {
        groupTreedData() {
            if (this.addedTreesData) {
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
                            acc[key] = {count: 0, trees: []};
                        }
                        acc[key].count++; // Увеличиваем счетчик количества деревьев с данным диаметром
                        acc[key].trees.push(tree);
                        return acc;
                    }, {});
                }


                // Подсчет категорий внутри каждой группы по имени и диаметру
                for (const treeName in groupedByTree) {
                    for (const diameter in groupedByTree[treeName]) {
                        const categoriesCount = groupedByTree[treeName][diameter].trees.reduce((acc, tree) => {
                            const category = tree.category;
                            acc[category] = (acc[category] || 0) + 1;
                            return acc;
                        }, {});
                        groupedByTree[treeName][diameter].categories = categoriesCount;
                    }
                }

                // Функция для замены грузинских символов на латинские и замены пробелов на "_"
                const normalizeString = (str) => {
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
                    const optionsArray = Object.entries(treeOptions).map(([diameter, data]) => {
                        const normalizedCategories = Object.keys(data.categories).reduce((acc, category) => {
                            acc[normalizeString(category)] = data.categories[category];
                            return acc;
                        }, {});
                        return {diameter: diameter, count: data.count, categories: normalizedCategories};
                    });
                    return {key: treeName, option: optionsArray};
                });

                this.gaoTable.forEach(item => {
                    const categoryCountMap = {};
                    item.option.forEach(option => {
                        Object.entries(option.categories).forEach(([category, count]) => {
                            categoryCountMap[category] = (categoryCountMap[category] || 0) + count;
                        });
                    });
                    item.categoryCountMap = categoryCountMap;
                });
            }
        },

        calc(treesAmount, diameter) {
            treesAmount = parseInt(treesAmount);
            diameter = parseInt(diameter);

            const matchingObject = this.getBasalAreaCalculate.find(obj => parseInt(obj.treesAmount) === treesAmount && parseInt(obj.diameter) === diameter)

            if (matchingObject) {
                return matchingObject.basalArea;
            } else {
                const defaultObject = this.getBasalAreaCalculate.find(obj => parseInt(obj.treesAmount) === 1 && parseInt(obj.diameter) === diameter)

                if (defaultObject) {
                    return treesAmount * defaultObject.basalArea;
                }
            }
        }

    },

    mounted() {
        this.groupTreedData()
    }
}
</script>

<style scoped lang="scss">
//.text-rotate {
//    writing-mode: vertical-rl;
//    text-orientation: mixed;
//    transform: rotate(-180deg)
//}
</style>