// import data from './data2.json'
import fetch from "node-fetch";

var resultado = [];

var data = {
  values: [
    { first_name: "Alex",     h_in: "77", h_meters: "1.96", last_name: "Acker" },
    { first_name: "Hassan",   h_in: "76", h_meters: "1.93", last_name: "Adams" },
    { first_name: "Arron",    h_in: "77", h_meters: "1.96", last_name: "Afflalo" },
    { first_name: "Maurice",  h_in: "77", h_meters: "1.96", last_name: "Ager" },
    { first_name: "Alexis",   h_in: "84", h_meters: "2.13", last_name: "Ajinca" },
    { first_name: "LaMarcus", h_in: "83", h_meters: "2.11",  last_name: "Aldridge",},
    { first_name: "Joe",      h_in: "80", h_meters: "2.03", last_name: "Alexander" },
    { first_name: "Malik",    h_in: "82", h_meters: "2.08", last_name: "Allen" },
    { first_name: "Ray",      h_in: "77", h_meters: "1.96", last_name: "Allen" },
    { first_name: "Tony",     h_in: "76", h_meters: "1.93", last_name: "Allen" },
    { first_name: "Morris",   h_in: "78", h_meters: "1.98", last_name: "Almond" },
  ],
};

//  console.log(data['values'].length)
// way1
// for (var i=0 ; i<data.values.length; i++){

//     console.log(data.values[i].h_in)

//     for (var j=i+1 ; j<data.values.length; j++){
//         console.log("-------->", data.values[j].h_in)
//         var suma =parseInt(data.values[i].h_in) + parseInt(data.values[j].h_in)
//         var match={}
//         if (suma=== 163){
//             console.log("encontrado")
//             match.name1=data.values[i].first_name + " " + data.values[i].last_name
//             match.name2=data.values[j].first_name + " " + data.values[i].last_name
//             resultado.push(match)
//         }
//     }
// }

// var hi_i=data.values.length-1;
// var hi_j=data.values.length-2;

// for (var i=0 ; i<data.values.length/2; i++){

//     console.log(data.values[i].h_in, "  ",data.values[hi_i].h_in)
    

//     for (var j=i+1 ; j<data.values.length/2; j++){
       
//         console.log("-------->", data.values[j].h_in, "  ",  data.values[hi_j].h_in)
//         var suma1 =parseInt(data.values[i].h_in) + parseInt(data.values[j].h_in)
//         var suma2 =parseInt(data.values[hi_i].h_in) + parseInt(data.values[hi_j].h_in)
//         var match={}
//         if (suma1=== 163){
//             console.log("encontrado")
//             match.name1=data.values[i].first_name + " " + data.values[i].last_name
//             match.name2=data.values[j].first_name + " " + data.values[i].last_name
//             resultado.push(match)
//         }
//         if (suma2=== 163){
//             console.log("encontrado")
//             match.name1=data.values[hi_i].first_name + " " + data.values[hi_i].last_name
//             match.name2=data.values[hi_j].first_name + " " + data.values[hi_j].last_name
//             resultado.push(match)
//         }
//         hi_j=hi_j-1;

//     }

//     hi_i=hi_i-1;
//     hi_j=data.values.length-2-1-i;
// }

    // console.log(" ");
    // console.log(" ");
    // console.log(resultado);
    // console.log(" ");
    // console.log(" ");





  
// DOWNLOAD WAY2
// var startTime = performance.now()
    // fetch("https://mach-eight.uc.r.appspot.com/")
    //   .then((response) => response.json())
    //   .then(function (data) {
    //     // console.log(data['values'][0])
    //     // console.log(data.values[0].h_in)
    
    //     var hi_i=data.values.length-1;
    //     var hi_j=data.values.length-2;


    //     console.log(data.values.length);
    //     for (var i = 0; i < data.values.length/2; i++) {
    //       console.log(data.values[i].h_in);
    
    //         for (var j = i + 1; j < data.values.length/2; j++) {
    //             console.log("-------->", data.values[j].h_in, "  ",  data.values[hi_j].h_in)
    //             var suma1 =parseInt(data.values[i].h_in) + parseInt(data.values[j].h_in)
    //             var suma2 =parseInt(data.values[hi_i].h_in) + parseInt(data.values[hi_j].h_in)
    //             var match={}
    //             if (suma1=== 139){
    //                 console.log("encontrado")
    //                 match.name1=data.values[i].first_name + " " + data.values[i].last_name
    //                 match.name2=data.values[j].first_name + " " + data.values[i].last_name
    //                 resultado.push(match)
    //             }
    //             if (suma2=== 139){
    //                 console.log("encontrado")
    //                 match.name1=data.values[hi_i].first_name + " " + data.values[hi_i].last_name
    //                 match.name2=data.values[hi_j].first_name + " " + data.values[hi_j].last_name
    //                 resultado.push(match)
    //             }
    //             hi_j=hi_j-1;
    //         }
    //         hi_i=hi_i-1;
    //         hi_j=data.values.length-2-1-i;
    //     }

    
    //     console.log(" ");
    //     console.log(" ");
    //     console.log(resultado);
    //     console.log(" ");
    //     console.log(" ");
    //     var endTime = performance.now()

    //         console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
    //   });



    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      })
      
      readline.question(`What's your name?`, name => {
        console.log(`Hi ${name}!`)
        readline.close()
      })
      


// DOWNLOADING WAY 1

var startTime = performance.now()

fetch("https://mach-eight.uc.r.appspot.com/")
  .then((response) => response.json())
  .then(function (data) {
    // console.log(data['values'][0])
    // console.log(data.values[0].h_in)

    
    console.log(data.values.length);
    for (var i = 0; i < data.values.length; i++) {
      console.log(data.values[i].h_in);

      for (var j = i + 1; j < data.values.length; j++) {
            console.log("-------->", data.values[j].h_in);
            
            var suma = parseInt(data.values[i].h_in) + parseInt(data.values[j].h_in);
            var match = {};
            
            if (suma === 139) {
            //163
            console.log("encontrado");
            match.name1 =
                data.values[i].first_name + " " + data.values[i].last_name;
            match.name2 =
                data.values[j].first_name + " " + data.values[i].last_name;
            resultado.push(match);
            }
      }
    }

    console.log(" ");
    console.log(" ");
    console.log(resultado);
    console.log(" ");
    console.log(" ");
    var endTime = performance.now()

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

  });

console.log("pruebas");

// console.log(data[0]);
