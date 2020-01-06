function fetchDogImg() {
    let numberDogs = $('#dogNumber').val();
    fetch('https://dog.ceo/api/breeds/image/random/' + numberDogs)
        .then(response => response.json())
        .then(responseJson => printToScreen(responseJson))
        .catch(error => alert('failed attempt!'));
};

/*
numberDOgs = responseJson.message.length

for (i=0, i < numberDogs, i++) {
    dogMessage = 'responseJson.message.' + i;
}
*/
function printToScreen(responseJson) {
    console.log('starting printtoscreen', responseJson);
    $('.images').html('');
    let numberMessageDogs = responseJson.message.length;
    console.log(numberMessageDogs); 
    for ( i=0; i < numberMessageDogs; i++ ) {
    let dogMessage = `${responseJson.message[i]}`;
    console.log(dogMessage);
    $('.images').append(
        `<br><img src="${dogMessage}" class="results-img">`
      );
    };
};

function watchButton() {
    $('.dog-img-number').on('submit', function(event) {
        event.preventDefault();
        fetchDogImg();
        console.log('watchButton ran');
    });
};


$(console.log('page ready and running'),
    watchButton()
  )
