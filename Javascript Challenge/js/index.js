
document.getElementById('background-btn').addEventListener('click', function(){
    var backgroundImage = document.getElementById('newimg')
    var newimg = document.getElementById('background').style.background = "url(https://tse3.mm.bing.net/th?id=OIP.9odqGbL7FVM3B1pVWE3g4AHaEK&pid=Api&P=0&w=274&h=155)" 
})

document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;
    var newPosition = parseInt(position) - 10;
    document.getElementById('ball').style.left = newPosition + 'px';
});

document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

