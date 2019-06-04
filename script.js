var data =
[
    {
        name: "Jet Airways",
        duration: "2hour10min",
        price: 3400,

    },
    {
        name: "Air India",
        duration: "1hour10min",
        price: 2300,

    },
    {
        name: "Indigo",
        duration: "3hour10min",
        price: 1000,

    },
    {
        name: "Jet Airways",
        duration: "21hour10min",
        price: 3400,

    },
    
]

console.log("Array of Overall Data");
console.log(+data);



var jetFlights = data.filter(item => item.name == "Jet Airways");
console.log("Jet Airways Flights");
console.log(jetFlights);

var airIndiaFlights = data.filter(item => item.name == "Air India");
console.log("Air India Flights");
console.log(airIndiaFlights);

var indigoFlights = data.filter(item => item.name == "Indigo");
console.log("Indigo Flights");
console.log(indigoFlights);
// var jet2 = data.filter(function (item) {
// 	return item.name == "jet";
// });
// console.log(jet2);