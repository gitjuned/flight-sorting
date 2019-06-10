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
        duration: "1hour10min",
        price: 1800,

    },
    {
        name: "Indigo",
        duration: "5hour40min",
        price: 9000,

    },
    {
        name: "Indigo",
        duration: "3hour50min",
        price: 3000,

    },
    {
        name: "Air India",
        duration: "3hour30min",
        price: 3000,

    },
    {
        name: "Air India",
        duration: "1hour40min",
        price: 2900,

    },
    {
        name: "Jet Airways",
        duration: "21hour10min",
        price: 6400,

    },
]


var tempArray = [];
var totalCheckedFlights = [];
var totalUnCheckedFlights = [];
var airlineSelected = [];
var checkedFlight;
var filteredData=[];

$('input:checkbox').click(function(){
    $("#result").html("");
    $("input:checkbox").each(function(){

        if ($(this).prop('checked') == true){
            checkedFlight = $(this).val();
            filteredData = data.filter(function (item) {
                return item.name == checkedFlight;
            });
            console.log("filtered data goes here");
            console.log(filteredData);
            for(let i=0;i<filteredData.length;i++){
                
                $("#result").append(

                    '<div class="row">'+

                        '<div class="col-sm-4"> '+
                            '<div class="flight-name">'+
                                '<p>'+filteredData[i].name+'</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-sm-4"> '+
                            '<div class="flight-duration">'+
                                '<p>'+filteredData[i].duration+'</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-sm-4"> '+
                            '<div class="flight-price">'+
                                '<p>'+filteredData[i].price+'</p>'+
                            '</div>'+
                        '</div>'+

                    '</div>'    
                )
            }

            }

        else{
        
            // var filteredData = data.filter(function (item) {
            //     return item;
            // });
            // console.log("oops");
            
        }
    }); 
});


function appendData(){
    for(let i=0;i<data.length;i++){

        $("#result").append(

            '<div class="row">'+

                '<div class="col-sm-4"> '+
                    '<div class="flight-name">'+
                        '<p>'+data[i].name+'</p>'+
                    '</div>'+
                '</div>'+
                '<div class="col-sm-4"> '+
                    '<div class="flight-duration">'+
                        '<p>'+data[i].duration+'</p>'+
                    '</div>'+
                '</div>'+
                '<div class="col-sm-4"> '+
                    '<div class="flight-price">'+
                        '<p>'+data[i].price+'</p>'+
                    '</div>'+
                '</div>'+

            '</div>'    
        )
    }
}

appendData();
 
// var jetFlights = data.filter(item => item.name == "Jet Airways");
// console.log("Jet Airways Flights");
// console.log(jetFlights);

// var airIndiaFlights = data.filter(item => item.name == "Air India");
// console.log("Air India Flights");
// console.log(airIndiaFlights);

// var indigoFlights = data.filter(item => item.name == "Indigo");
// console.log("Indigo Flights");
// console.log(indigoFlights);


// var jet2 = data.filter(function (item) {
// 	return item.name == "Jet Airways";
// });
// console.log(jet2);