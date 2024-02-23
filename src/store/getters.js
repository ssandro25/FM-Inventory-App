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

    // 3 Macket
    getDominantSpecies: state => state.dominantSpecies,
    getSiteIndex: state => state.siteIndex,
    getSiteIndexType: state => state.siteIndexType,
    getForestType: state => state.forestType,
    getLocationType: state => state.locationType,

    // 31_6 Macket
    getHeight: state => state.height,
    getAge: state => state.age,
    getGrowingTreesSpecies: state => state.growingTreesSpecies,

    // 32_7 Macket
    getDistribution: state => state.distribution,
    getDistributionPercent: state => state.distributionPercent,
    getTreeType: state => state.treeType
}