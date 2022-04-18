$(document).ready(function () {
    $('body').keydown(function (event) {
        // console.log(event.which);
        // console.log(String.fromCharCode(event.which))
        document.getElementById(String.fromCharCode(event.which)).play();
    })

    audios = document.getElementsByTagName('audio');
    audios = [...audios];
    // console.log(audios);

    audios.forEach(anything => {
        anything.addEventListener('play', function() {
            // console.log("splat")
            document.getElementById('display').innerText=anything.id;
        })
    })
    
    buttons = document.getElementsByClassName('drum-pad');
    buttons = [...buttons];
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // console.log(button.value);
            document.getElementById('display').innerText= button.id;
            document.getElementById(button.value).play();
        })
    })

})



