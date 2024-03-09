export default {
    setForesterName({state}, name) {
        state.foresterName = name

        localStorage.setItem('foresterName', JSON.stringify(state.foresterName))
    },

    setNewForestArea({state}, value) {
        state.forestArea.push(value)

        // localStorage.setItem('ForestArea', JSON.stringify(state.forestArea))
    },

    setForestArea({state}, value) {
        state.forestArea = value

        localStorage.setItem('forestArea', JSON.stringify(state.forestArea))
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

    // Work Space
    setNewWorkSpace({state}, value) {
        state.workSpace.push(value)

        localStorage.setItem('workSpace', JSON.stringify(state.workSpace))
    },

    setWorkSpace({state}, value) {
        state.workSpace = value

        localStorage.setItem('workSpace', JSON.stringify(state.workSpace))
    },

    setWorkSpaceID({state}, id) {
        state.workSpaceID = id
    },

    setForestryWS_ID({state}, id) {
        state.forestryWS_ID = id
    },

    setQuarterWS_ID({state}, id) {
        state.quarterWS_ID = id
    },
}