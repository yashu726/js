const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros); array ke andar array create kr deta hai 

// console.log(marvel_heros);

 const allHeros = marvel_heros.concat(dc_heros);  // marge in properly two array

//  console.log(allHeros);

 const all_new_heros = [...marvel_heros, ...dc_heros]  /// spred oprator

//  console.log(all_new_heros);


 //   second type

//  const Array1 = [1,2,3,4,5];
//  const Array2 = [6,7,8,9,10];
//  const Array3 = [0,0,0];
//  const Array4 = [1,3,9,19];
//  const concatAll = Array1.concat(marvel_heros,dc_heros,Array2,Array3)
//  console.log(concatAll)


 const another_array = [1,2,3,4,5,[6,7,8],9,10,11,[12,13,14,[15,16,17,18],19,20],21,22,23]
 const real_another_array = another_array.flat(Infinity);

//  console.log(real_another_array);



 console.log(Array.isArray("yashawant"))
 console.log(Array.from("yashawant"))
 console.log(Array.from({name: "yashu"}))  // important for interview

 const Array1 = 100
 const Array2 = 200
 const Array3 = 300
 const Array4 = 400
 console.log(Array.of(Array1,Array2,Array3,Array4))
//  console.log(concatAll)
 
 
 
