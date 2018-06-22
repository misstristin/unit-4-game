

    // Add code to have the computer guess a random number between 19 and 120
    
    var ranNum = Math.ceil((Math.random()*100)+19);

    // jewel object within Array

    var jewels = [{
                    name: 'jewelOne',
                    class: 'btn btn-choice btn-success jewel'
                  },
                  {
                    name: 'jewelTwo',
                    class: 'btn btn-choice btn-danger jewel'
                   },
                   {
                   name: 'jewelThree',
                   class: 'btn btn-choice btn-primary jewel'                
                   },
                   {
                    name: 'jewelFour',
                    class: 'btn btn-choice btn-warning jewel'
                   }];
     
    var button, jewelVal, jewelClicked;
    var clicked = [];
    var total;
 

    // append jewels and give random values

    for (var index in jewels){
				button = $('<button>');
        jewelVal = Math.ceil(Math.random()*12);
				button.attr('data-jewelval', jewelVal);
        button.attr('class', jewels[index].class);
        button.attr('id', jewels[index].id);
				$('#jewelBox').append(button);
      }
      
    // Reveals random winning number and clicked random numbers within jewels

   $(document).on('click', 'button', function() {
    $('#computer-pick').text(ranNum);
    jewelClicked = $(this).attr('data-jewelval');
    $(this).text(jewelClicked);
    clicked.push(jewelClicked);
    $('#choicesToAdd').text(clicked);

    // adds the clicked jewels together

    var total = 0;
    for(index in clicked){
    total += (parseInt(clicked[index]));
    $('#totalAdded').text(total);
    }
 
    // clears the game so you can play again - new random numnber, new crystal values

    if (total == ranNum){
      alert(ranNum +'! You did it! Score equals computer!');
      total = 0;
      ranNum = Math.ceil((Math.random()*100)+19);
      $('#computer-pick').text(ranNum);
      $('#totalAdded').text(total);
      lastGuess = clicked.length;
      clicked.splice(0,lastGuess);
      $('#choicesToAdd').text(clicked);
     
      $('#jewelBox').empty();
      for (var index in jewels){
				button = $('<button>');
        jewelVal = Math.ceil(Math.random()*12);
				button.attr('data-jewelval', jewelVal);
        button.attr('class', jewels[index].class);
        button.attr('id', jewels[index].id);
				$('#jewelBox').append(button);
      }

    } else if (total > ranNum){
      alert(total +'... Sorry, you overdid it a bit. Try again.');
      total = 0;
      ranNum = Math.ceil((Math.random()*100)+19);
      $('#computer-pick').text(ranNum);
      $('#totalAdded').text(total);
      lastGuess = clicked.length;
      clicked.splice(0,lastGuess);
      $('#choicesToAdd').text(clicked);
      
      $('#jewelBox').empty();
      for (var index in jewels){
				button = $('<button>');
        jewelVal = Math.ceil(Math.random()*12);
				button.attr('data-jewelval', jewelVal);
        button.attr('class', jewels[index].class);
        button.attr('id', jewels[index].id);
				$('#jewelBox').append(button);
      }
    }

    });