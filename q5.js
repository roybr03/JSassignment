function  analzeText(str) {
    if ( typeof str !== "string") {
        return "Invalid";
    }

    let strlen = str.split(" ").join("").length; 
    let array = str.split(" ");
    let longword = array[0];
    for (let word of array) {
        if (  word.length > longword.length) {
            longword = word;
        }

    }
    return {
        longwords: longword,
        token : strlen

    };
}
let str = "I am a little honest person";
console.log(analzeText(str));