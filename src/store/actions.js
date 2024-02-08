export default {
    setTaxCard({state}, value) {
        state.taxCard.push(value)
        localStorage.setItem('taxCard', JSON.stringify(state.taxCard))
    },

    setForesterName({state}, name) {
        state.foresterName = name

        localStorage.setItem('foresterName', JSON.stringify(state.foresterName))
    },

    setForestArea({state}, value) {
        state.forestArea.push(value)

        localStorage.setItem('ForestArea', JSON.stringify(state.forestArea))
    }
}