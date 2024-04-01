<template>
    <div class="overflow-auto">
        <div style="width: max-content">
            <div class="sticky-lg-top">
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
            </div>

            <div class="bg-dark item__row"
                 v-for="(item, index) in groupTreesData"
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
                                {{ item.categories.samasale ? item.categories.samasale : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 257px;">
                                {{ item.categories.nakhevrad_samasale ? item.categories.nakhevrad_samasale : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 100px;">
                                {{ item.categories.sasheshe ? item.categories.sasheshe : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 118px;">
                                {{ item.categories.zrdadi_khmobadi ? item.categories.zrdadi_khmobadi : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 99px;">
                                {{ item.categories.zrdadi_pauti ? item.categories.zrdadi_pauti : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 241px;">
                                {{ item.categories.zekhmeli_samasale ? item.categories.zekhmeli_samasale : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 187px;">
                                {{ item.categories.zekhmeli_shesha ? item.categories.zekhmeli_shesha : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2" style="width: 103px;">
                                {{ item.categories.dzirkvi ? item.categories.dzirkvi : '&nbsp;' }}
                            </div>

                            <div class="border border-start-0 text-center p-2 border-end-0 fw-bold" style="width: 103px;">
                                {{ item.count }}
<!--                                {{-->
<!--                                    (Number(item.categories.samasale) || 0) +-->
<!--                                    (Number(item.categories.nakhevrad_samasale) || 0) +-->
<!--                                    (Number(item.categories.sasheshe) || 0) +-->
<!--                                    (Number(item.categories.zrdadi_khmobadi) || 0) +-->
<!--                                    (Number(item.categories.zrdadi_pauti) || 0) +-->
<!--                                    (Number(item.categories.zekhmeli_samasale) || 0) +-->
<!--                                    (Number(item.categories.zekhmeli_shesha) || 0) +-->
<!--                                    (Number(item.categories.dzirkvi) || 0)-->
<!--                                }}-->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex bg-secondary text-dark fw-bold">
                    <div class="p-2 border border-top-0" style="width: 136px;">სულ ({{ item.key }})</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 129px;">{{ item.categoryCountMap.samasale }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 257px;">{{ item.categoryCountMap.nakhevrad_samasale }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 100px;">{{ item.categoryCountMap.sasheshe }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 118px;">{{ item.categoryCountMap.zrdadi_khmobadi }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 100px;">{{ item.categoryCountMap.zrdadi_pauti }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 240.3px;">{{ item.categoryCountMap.zekhmeli_samasale }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 188px;">{{ item.categoryCountMap.zekhmeli_shesha }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 104px;">{{ item.categoryCountMap.dzirkvi }}</div>
                    <div class="p-2 border border-top-0 border-start-0 text-center d-flex align-items-center justify-content-center" style="width: 104px;">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "GaoTreesAccountingTab",

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
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

    mounted() {
        console.log(this.groupTreesData)
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