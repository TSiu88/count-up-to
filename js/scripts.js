$(document).ready(function(){
  $("#form1").submit(function(event){
    var countBy = parseInt($("#countBy").val());
    var countTo = parseInt($("#countTo").val());
    var countingArray = [];

    console.log(countBy);
    console.log(countTo);

    if( isNaN(countBy)|| isNaN(countTo)){
      alert("Not a number.  Please enter numbers only.");
    }

    for (var index = countBy; index <=countTo; index += countBy) {
      console.log(index);
      countingArray.push(index);
    } 
    $("#numbers").append(countingArray.toString());

    console.log(countingArray);
    
    $(".output").show();
    event.preventDefault();
  });
});