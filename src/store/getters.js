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
    getTreeType: state => state.treeType,
    getTreeHeight: state => state.treeHeight,

    // 24_9 Macket
    getSoilCharacter: state => state.soilCharacter,
    getSoilMechanicalComposition: state => state.soilMechanicalComposition,
    getMoistureDegree: state => state.moistureDegree,
    getChordsQuality: state => state.chordsQuality,
    getSoilDensity: state => state.soilDensity,

    // 37_10 Macket
    getAnthropogenicTransformationType: state => state.anthropogenicTransformationType,
    getAnthropogenicTransformationQuality: state => state.anthropogenicTransformationQuality,

    // 28_12 Macket
    getAccessibilityCategory: state => state.accessibilityCategory,
    getTransportType: state => state.transportType,

    // 40_13 Macket
    getDisasterType: state => state.disasterType,
    getSustainability: state => state.sustainability,

    // 16_15 Macket
    getRawMaterialCategory: state => state.rawMaterialCategory,
    getWoodySpecies: state => state.woodySpecies,
    getUnit: state => state.unit,
    getAccessible: state => state.accessible,

    // 14_16 Macket
    getAccountingCategory: state => state.accountingCategory,
    getPlantsType: state => state.plantsType,
}