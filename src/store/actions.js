export default {
    setForesterName({state}, name) {
        state.foresterName = name

        localStorage.setItem('foresterName', JSON.stringify(state.foresterName))
    },

    setNewForestArea({state}, value) {
        state.forestArea.push(value)

        // localStorage.setItem('ForestArea', JSON.stringify(state.forestArea))
    },

    setNewWorkSpace({state}, value) {
        state.workSpace.push(value)

        localStorage.setItem('workSpace', JSON.stringify(state.workSpace))
    },

    setForestAreaID({state}, id) {
        state.forestAreaID = id
    },

    setQuarterID({state}, id) {
        state.quarterID = id
    },

    setLiterID({state}, id) {
        state.literID = id
    },

    setForestArea({state}, value) {
        state.forestArea = value

        localStorage.setItem('forestArea', JSON.stringify(state.forestArea))
    },


}