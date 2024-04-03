<template>
    <!--    <div class="col-lg-6 col-12 p-0 table-responsive">-->
    <div class="table-responsive">
        <table
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
                    ტყის ელემენტი
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

            <tbody
                v-for="(item, index) in groupTreesDataWithTier"
                :key="index"
            >
            <tr v-if="item.option.small.length" class="table-info text-center fst-italic">
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
            <tr v-if="item.option.small.length">
                <td colspan="14" class="text-center" >{{ item.key }} (ll იარუსი)</td>
            </tr>
            <tr v-for="(itemOption, index) in item.option.small"
                :key="index"
            >
                <td>{{ itemOption.diameter }}</td>
                <td>{{ itemOption.count }}</td>
                <td></td>
                <td>{{ itemOption.calcBasalArea }}</td>
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

            <tr v-if="item.option.small.length">
                <td>სულ</td>
                <td>
                    {{
                        (Number(item.categoryCountMapSmall.samasale) || 0) +
                        (Number(item.categoryCountMapSmall.nakhevrad_samasale) || 0) +
                        (Number(item.categoryCountMapSmall.sasheshe) || 0) +
                        (Number(item.categoryCountMapSmall.zrdadi_khmobadi) || 0) +
                        (Number(item.categoryCountMapSmall.zrdadi_pauti) || 0) +
                        (Number(item.categoryCountMapSmall.zekhmeli_samasale) || 0) +
                        (Number(item.categoryCountMapSmall.zekhmeli_shesha) || 0) +
                        (Number(item.categoryCountMapSmall.dzirkvi) || 0)
                    }}
                </td>
                <td></td>
                <td>{{ item.totalBasalAreaSmall }}</td>
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

            <tr v-if="item.option.small.length">
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
            <tr v-if="item.option.small.length">
                <td colspan="3">საშუალო ხის კვეთის ფართობი, მ2</td>
                <td colspan="11">{{ item.averageBasalAreaSmall }}</td>
            </tr>
            <tr v-if="item.option.small.length">
                <td colspan="3">საშუალო დიამეტრი, სმ</td>
                <td colspan="11">{{ item.averageDiameterSmall }}</td>
            </tr>
            <tr v-if="item.option.small.length">
                <td colspan="3">საშუალო სიმაღლე, მ</td>
                <td colspan="11">{{ item.averageHeightSmall }}</td>
            </tr>
            <tr v-if="item.option.small.length">
                <td colspan="3">ფართობი სიხშირე</td>
                <td colspan="11"></td>
            </tr>
            </tbody>

            <tbody
                v-for="(item, index) in groupTreesDataWithTier"
                :key="index"
            >
            <tr v-if="item.option.large.length" class="table-info text-center fst-italic">
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
            <tr v-if="item.option.large.length">
                <td colspan="14" class="text-center" >{{ item.key }} (l იარუსი)</td>
            </tr>
            <tr v-for="(itemOption, index) in item.option.large"
                :key="index"
            >
                <td>{{ itemOption.diameter }}</td>
                <td>{{ itemOption.count }}</td>
                <td></td>
                <td>{{ itemOption.calcBasalArea }}</td>
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

            <tr v-if="item.option.large.length">
                <td>სულ</td>
                <td>
                    {{
                        (Number(item.categoryCountMapLarge.samasale) || 0) +
                        (Number(item.categoryCountMapLarge.nakhevrad_samasale) || 0) +
                        (Number(item.categoryCountMapLarge.sasheshe) || 0) +
                        (Number(item.categoryCountMapLarge.zrdadi_khmobadi) || 0) +
                        (Number(item.categoryCountMapLarge.zrdadi_pauti) || 0) +
                        (Number(item.categoryCountMapLarge.zekhmeli_samasale) || 0) +
                        (Number(item.categoryCountMapLarge.zekhmeli_shesha) || 0) +
                        (Number(item.categoryCountMapLarge.dzirkvi) || 0)
                    }}
                </td>
                <td></td>
                <td>{{ item.totalBasalAreaLarge }}</td>
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

            <tr v-if="item.option.large.length">
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
            <tr v-if="item.option.large.length">
                <td colspan="3">საშუალო ხის კვეთის ფართობი, მ2</td>
                <td colspan="11">{{ item.averageBasalAreaLarge }}</td>
            </tr>
            <tr v-if="item.option.large.length">
                <td colspan="3">საშუალო დიამეტრი, სმ</td>
                <td colspan="11">{{ item.averageDiameterLarge }}</td>
            </tr>
            <tr v-if="item.option.large.length">
                <td colspan="3">საშუალო სიმაღლე, მ</td>
                <td colspan="11">{{ item.averageHeightLarge }}</td>
            </tr>
            <tr v-if="item.option.large.length">
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

        groupTreesDataWithTier() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).groupTreesDataWithTier
        },
    },

    methods: {
        // calc(treesAmount, diameter) {
        //     treesAmount = parseInt(treesAmount);
        //     diameter = parseInt(diameter);
        //
        //     const matchingObject = this.getBasalAreaCalculate.find(obj => parseInt(obj.treesAmount) === treesAmount && parseInt(obj.diameter) === diameter)
        //
        //     if (matchingObject) {
        //         return matchingObject.basalArea;
        //     } else {
        //         const defaultObject = this.getBasalAreaCalculate.find(obj => parseInt(obj.treesAmount) === 1 && parseInt(obj.diameter) === diameter)
        //
        //         if (defaultObject) {
        //             return treesAmount * defaultObject.basalArea;
        //         }
        //     }
        // },
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