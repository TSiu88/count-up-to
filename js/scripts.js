$(document).ready(function(){
  $("#form1").submit(function(event){
    var countBy = parseInt($("#countBy").val());
    var countTo = parseInt($("#countTo").val());
    var countingArray = [];

    console.log(countBy);
    console.log(countTo);

    if( isNaN(countBy)|| isNaN(countTo)){
      alert("Not a number.  Please enter numbers only.");
    } else if (countBy < 0 || countTo < 0){
      alert("Entered negative number.  Please enter positive numbers only.")
    } else if (countBy > countTo){
      alert("Can not count by a number larger than count to.")
    }
    else{
      for (var index = countBy; index <=countTo; index += countBy) {
        console.log(index);
        countingArray.push(index);
      } 
      $("#numbers").append(countingArray.toString());

      console.log(countingArray);
    }
    
    $(".output").show();
    event.preventDefault();
  });
});