    const str1 = "éclair";
    const str2 = "eclair";

    // Normal comparison
    let normal = str1 > str2 ? "éclair > eclair" :
                 str1 < str2 ? "éclair < eclair" : "éclair == eclair";

    // localeCompare (default)
    let result1 = str1.localeCompare(str2);
    console.log()


