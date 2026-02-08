function  gonoVote(array) {
    if ( !Array.isArray(array)) {
        return "Invalid";
    }
    let ha_count = 0;
    let na_count = 0;
    for (let element of array) {
        if ( element === "ha") {
            ha_count = ha_count+1;
        }
        else
            na_count = na_count+1;
    }
    if ( ha_count > na_count) {
        return true;
    }
    else if( ha_count < na_count){
        return false;
    }
    else
        return "equal";
}