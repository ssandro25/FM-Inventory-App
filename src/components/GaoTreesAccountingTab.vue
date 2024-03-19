<template>
    <div class="col-lg-6 col-12 p-0 table-responsive">
        <table class="table table-bordered table-dark table-striped mt-3">
            <thead>
            <tr>
               <th rowspan="4">
                   <div class="text-rotate">
                       მერქნიანი სახეობა
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
                        სამასალე
                    </div>
                </th>

                <th>
                    <div class="text-rotate">
                        შეშა
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
            <tr v-for="n in 5" :key="n">
                <td v-for="n in 9" :key="n">&nbsp;</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "GaoTreesAccountingTab"
}
</script>

<style scoped lang="scss">
.text-rotate {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(-180deg)
}
</style>