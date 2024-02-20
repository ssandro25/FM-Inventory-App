export default {
    getForestArea: state => state.forestArea,
    getForestAreaID: state => state.forestAreaID,
    getQuarterID: state => state.quarterID,
    getLiterID: state => state.literID,

    // 1 Macket
    getSoilCategory: state => state.soilCategory,
    getLongTermUseLease: state => state.longTermUseLease,
    getExposition: state => state.exposition,
    getInclination: state => state.inclination,
    getElevation: state => state.elevation,
    getGfdu: state => state.gfdu,
    getErosionType: state => state.erosionType,
    getErosionDegree: state => state.erosionDegree,

    // 2 Macket
    getActivity: state => state.activity,
    getTargetSpecies: state => state.targetSpecies,
}