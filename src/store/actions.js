export default {
    setTaxCard({state}, value) {
        state.taxCard.push(value)

        console.log(state.taxCard)
    },

    setForesterName({state}, name) {
        state.foresterName = name
    }
}