<template>
    <div class="col-lg-6 col-12 p-0 table-responsive">
        <table class="table table-bordered table-dark table-striped mt-3">
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
                        კვეთის ფართობი, მ2
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

                <th rowspan="4">
                    <div class="text-rotate">
                        მ.შ სამასალე
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
        </table>

    </div>
</template>

<script>
export default {
    name: "GaoTreesAccountProcessing"
}
</script>

<style scoped lang="scss">
.text-rotate {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(-180deg)
}
</style>