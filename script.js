$(function() {
var data =
[
    {
        name: "Jet Airways",
        duration: 100,
        price: 3400,

    },
    {
        name: "Air India",
        duration: 120,
        price: 7300,

    },
    {
        name: "Indigo",
        duration: 110,
        price: 5300,

    },
    {
        name: "Indigo",
        duration: 140,
        price: 9000,

    },
    {
        name: "Indigo",
        duration: 250,
        price: 4500,

    },
    {
        name: "Air India",
        duration: 130,
        price: 3000,

    },
    {
        name: "Air India",
        duration: 145,
        price: 2900,

    },
    {
        name: "Jet Airways",
        duration: 140,
        price: 6400,

    },
]

function appendData(array){
    $("#result").empty();
    var num;
    var hours;
    var rhours; 
    var minutes;
    var rminutes;

    for(let i=0;i<array.length;i++){
        function timeConvert(n) {
            num = n;
            hours = (num / 60);
            rhours = Math.floor(hours);
            minutes = (hours - rhours) * 60;
            rminutes = Math.round(minutes);
            // return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
            return rhours + " hr(s) and " + rminutes + " min(s)";
        }
        var formattedTime = timeConvert(array[i].duration)

        $("#result").append(

            '<div class="row flight-data-row">'+

                '<div class="col-sm-4"> '+
                    '<div class="flight-name">'+
                        '<p>'+array[i].name+'</p>'+
                    '</div>'+
                '</div>'+
                '<div class="col-sm-4"> '+
                    '<div class="flight-duration">'+
                        '<p>'+formattedTime+'</p>'+                        
                    '</div>'+
                '</div>'+
                '<div class="col-sm-4"> '+
                    '<div class="flight-price">'+
                        '<p>'+array[i].price+'</p>'+
                    '</div>'+
                '</div>'+

            '</div>'    
        )
    }
};

appendData(data);

$('input:checkbox').click(function(){
    var checkedFlight;
    $("#result").html("");
    $("input:checkbox").each(function(){

        if ($(this).prop('checked') == true){
            checkedFlight = $(this).val();
            var filteredData = data.filter(function (item) {
                return item.name == checkedFlight;
            });
            console.log("filtered data goes here");
            console.log(filteredData);
            // appendData(filteredData);
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
            appendData(data);
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
    appendData(filteredData);
}

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

$('.clear-btn').click(function(){
    
    console.log($('input').val());

    $("input").each(function(){
        ($(this).val(""));
    }); 

    $("input:checkbox").each(function(){
        $(this).prop("checked", false);
    }); 

    appendData(data);
});


}); // DOCUMENT READY