$(document).ready(function(){

$(document).on("click", "button.submit", submitAns);
  var db = "../../models";

  function submitAns(event) {
      event.preventDefault();


//-------- insert data into data 2 begin--------
      var $q1 = $('input[name=sel_answer1]:checked', '#q1').val();
      var $q2 = $('input[name=sel_answer2]:checked', '#q2').val();
      var $q3 = $('input[name=sel_answer3]:checked', '#q3').val();
      var $q4 = $('input[name=sel_answer4]:checked', '#q4').val();
      var $q5 = $('input[name=sel_answer5]:checked', '#q5').val();
      var $q6 = $('input[name=sel_answer6]:checked', '#q6').val();
      var $q7 = $('input[name=sel_answer7]:checked', '#q7').val();
      var $q8 = $('input[name=sel_answer8]:checked', '#q8').val();
      var $q9 = $('input[name=sel_answer9]:checked', '#q9').val();
      var $q10 = $('input[name=sel_answer10]:checked', '#q10').val();

      var userAnswer = {
          q1: $q1,
          q2: $q2,
          q3: $q3,
          q4: $q4,
          q5: $q5,
          q6: $q6,
          q7: $q7,
          q8: $q8,
          q9: $q9,
          q10: $q10,
          Data1Id:
      };
      submitQ(userAnswer);
    }

    function submitQ(user){
      $.post("/api/data2s", user, function(){
        window.location.href = "/all";
      });
    };


//------------end---------------

});

