// import data from './data2.json'
import fetch from "node-fetch";

// REQUEST FROM COMMAND LINE
var argument = process.argv;
var height_check = argument[2];

// STORE THE RESULTS
var resultado = [];
// TIME ANALISYS PERFORMANCE
var startTime = performance.now();

// DOWNLOADING DATA
fetch("https://mach-eight.uc.r.appspot.com/")
  .then((response) => response.json())
  .then(function (data) {

    // ALGORITHM FOR ANALISYS OF NBA DATA
    var hi_i = data.values.length - 1;
    var hi_j = data.values.length - 2;

    // console.log(data.values.length);
    for (var i = 0; i < data.values.length / 2; i++) {
      // console.log(data.values[i].h_in);

      for (var j = i + 1; j < data.values.length / 2; j++) {
        // console.log(
        //   "-------->",
        //   data.values[j].h_in,
        //   "  ",
        //   data.values[hi_j].h_in
        // );
        var suma1 =
          parseInt(data.values[i].h_in) + parseInt(data.values[j].h_in);
        var suma2 =
          parseInt(data.values[hi_i].h_in) + parseInt(data.values[hi_j].h_in);
        var match = {};
        if (suma1 === parseInt(height_check)) {//139
          
          // console.log("encontrado");
          match.name1 =  data.values[i].first_name + " " + data.values[i].last_name;
          match.name2 =  data.values[j].first_name + " " + data.values[i].last_name;
          resultado.push(match);
        }
        if (suma2 === parseInt(height_check)) {
          // console.log("encontrado");
          match.name1 = data.values[hi_i].first_name + " " + data.values[hi_i].last_name;
          match.name2 = data.values[hi_j].first_name + " " + data.values[hi_j].last_name;
          resultado.push(match);
        }
        hi_j = hi_j - 1;
      }
      hi_i = hi_i - 1;
      hi_j = data.values.length - 2 - 1 - i;
    }

    console.log(" ");
    console.log(" ");
    console.log(resultado);
    console.log(" ");
    console.log(" ");
    var endTime = performance.now();

    console.log(`Your query take ${endTime - startTime} milliseconds`);
  });
