function  finalScore(omr) {
    if ( typeof(omr) !== "object") {
        return "Invalid";
    }
    if ( (omr.right+omr.wrong+omr.skip) === 100) {
        let results = (100 -omr.skip) - (omr.wrong + (omr.wrong*.5))
        return Math.round(results);
    }
    
}