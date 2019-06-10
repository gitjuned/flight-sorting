$(function() {
var data =
[
    {
        name: "Jet Airways",
        duration: "100mins",
        price: 3400,

    },
    {
        name: "Air India",
        duration: "120mins",
        price: 7300,

    },
    {
        name: "Indigo",
        duration: "110mins",
        price: 5300,

    },
    {
        name: "Indigo",
        duration: "140mins",
        price: 9000,

    },
    {
        name: "Indigo",
        duration: "250mins",
        price: 4500,

    },
    {
        name: "Air India",
        duration: "130mins",
        price: 3000,

    },
    {
        name: "Air India",
        duration: "145mins",
        price: 2900,

    },
    {
        name: "Jet Airways",
        duration: "140mins",
        price: 6400,

    },
]

function appendData(){
    console.log("inside iffi");
    $("#result").empty();
    for(let i=0;i<data.length;i++){

        $("#result").append(

            '<div class="row flight-data-row">'+

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
};

appendData();

var tempArray = [];
var totalCheckedFlights = [];
var totalUnCheckedFlights = [];
var airlineSelected = [];
var checkedFlight;



$('input:checkbox').click(function(){
    $("#result").html("");
    $("input:checkbox").each(function(){

        if ($(this).prop('checked') == true){
            checkedFlight = $(this).val();
            var filteredData = data.filter(function (item) {
                return item.name == checkedFlight;
            });
            console.log("filtered data goes here");
            console.log(filteredData);
            for(let i=0;i<filteredData.length;i++){
                $("#result").append(

                    '<div class="row flight-data-row">'+

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
            console.log("else block");
            console.log($(this).val());
        }
        if(($("input:checkbox:checked").length === 0)){
            console.log("all unchecked block");
            appendData();
            return false;
        }
    });   
});


function sortByTime(){
    $("#result").empty();
    console.log("else block");
    var time = $("#duration").val();
    console.log(time);
    var filteredData = data.filter(function (item) {
        return item.duration >= time;
    });
    for(let i=0;i<filteredData.length;i++){
        $("#result").append(
            '<div class="row flight-data-row">'+

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
    console.log(filteredData);  
}


$("#duration").keyup(function(){
    if(($(this).val()) == ""){
        console.log("hey there");
        appendData();
    }
});

$('.duration-btn').click(function(){
    sortByTime();
});


function sortByPrice(){
    $("#result").empty();
    var price = $("#price").val();
    console.log(price);
    var filteredData = data.filter(function (item) {
        return item.price >= price;
    });
    for(let i=0;i<filteredData.length;i++){
        $("#result").append(
            '<div class="row flight-data-row">'+

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
    console.log(filteredData);  
}

$('.price-btn').click(function(){
    sortByPrice();
});


}); // DOCUMENT READY