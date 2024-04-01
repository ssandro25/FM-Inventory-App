<template>
    <!--    <div class="col-lg-6 col-12 p-0 table-responsive">-->
    <div class="table-responsive">
        <table
            v-for="(item, index) in groupTreesData"
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
            <tr>
                <td colspan="14" class="text-center" >{{ item.key }}</td>
            </tr>
            <tr v-for="(itemOption, index) in item.option[0]"
                :key="index"
            >
                <td>{{ itemOption.diameter }}</td>
                <td>{{ itemOption.count }}</td>
                <td></td>
                <td>{{ calc(itemOption.count, itemOption.diameter) }}</td>
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
<!--                    {{-->
<!--                        (Number(item.categoryCountMap.samasale) || 0) +-->
<!--                        (Number(item.categoryCountMap.nakhevrad_samasale) || 0) +-->
<!--                        (Number(item.categoryCountMap.sasheshe) || 0) +-->
<!--                        (Number(item.categoryCountMap.zrdadi_khmobadi) || 0) +-->
<!--                        (Number(item.categoryCountMap.zrdadi_pauti) || 0) +-->
<!--                        (Number(item.categoryCountMap.zekhmeli_samasale) || 0) +-->
<!--                        (Number(item.categoryCountMap.zekhmeli_shesha) || 0) +-->
<!--                        (Number(item.categoryCountMap.dzirkvi) || 0)-->
<!--                    }}-->
                </td>
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

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',

            'getBasalAreaCalculate'
        ]),

        groupTreesData() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).groupTreesData
        },
    },

    methods: {
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
        },
    },

}
</script>

<style scoped lang="scss">
//.text-rotate {
//    writing-mode: vertical-rl;
//    text-orientation: mixed;
//    transform: rotate(-180deg)
//}
</style>