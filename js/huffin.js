$(document).ready(function(){

        $('#mission').on('click',function(){

            $('#themission').toggle()
        })
        
        
        $("#themission").hide();


  
$("#entry").submit(change)

    function change(){
        $("#city-type").val();
        $('#name').show()
        var name= $("#city-type").val();
        if (name === "Christopher" || name === "Chris" || name === "cristopher"){
            $("#name").append('<h2>Christopher</h2><img  class=christopher src="images/photo 8.jpg"> <p> iugfwgiufeiugwefgiugiuwfeguiwefguiewf </p> ');
            } else {
            $("#name").append('<p>guhwrhuowheohoeohouwhfowehuofhwouhefwuoefhwef</p>')
    }

}

$('#name').hide()


  $('#hide').click(onHideButtonClick)
  $('#show').click(onShowButtonClick)

  function onHideButtonClick(){
      currentIndex -=1
      $('#quotes').html('li', [currentIndex])
  }
  
  function onShowButtonClick(){
    currentIndex -=1
    $('#quotes').html('li', [currentIndex])

    $("#hide").hide();


    $('#submit-btn').click(updateDisplay);
       
  
    function updateDisplay(){
        event.preventDefault();
        var city = $('#city-type').val();
        console.log(city);
   
        if (city === "New York City" || city === "nyc" || city === "New York"){
        $("body").css("background-image","url('images/nyc.jpg')");
        } else if (city === "austin" || city === "Austin" || city === "ATX"){
        $("body").css("background-image","url('images/austin.jpg')")
        } else if (city === "LA" || city === "Los Angeles" || city === "la"){
        $("body").css("background-image","url('/images/austin.jpg')")
        } else if (city === "sf" || city === "san francisco" || city === "San Francisco"){
            $("body").css("background-image","url('images/sf.jpg')")
        }else if (city === "sydney" || city === "Sydney"){
            $("body").css("background-image","url('images/sydney.jpg')")
        }




        var city = $('#city-type').val('');

    }
    
  };
    });