let mezuniyyet = "univeriste";
let yas = "20";

// if((yas >= 18) && (mezuniyyet == "lise")){
//     console.log("yapabilir");
// }else{
//     console.log("yalnish");
// }


if((yas >= 18) || (mezuniyyet == "lise")){
    console.log("yapabilir");
}else{
    console.log("yalnish");
}

// && olduqda her iki teref true olmalidir. biri false olduqda digeride false olur.

// || olduqda ikisinnen biiri truedursa true olur