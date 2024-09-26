// ek key hoti hai or multiple values hoti hai
// key mtlab wo value jo muje har bar check krni hai
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const months = 3;

switch (months) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;

    default:
        console.log("default case match");
        
        break;
}

// check string value

 const name = "yashawant";
 switch (name) {
    case "meena":
        console.log("meena");
        break;
    case "yash":
        console.log("yash");
        break;
    case "yashawant":
        console.log("yashawant");
        break;
    case "kharadi":
        console.log("kharadi");
        break;
 
    default:
        break;
 }