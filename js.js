var Qbutton = document.getElementById('Qbtn');
var Wbutton = document.getElementById('Wbtn');
var Ebutton = document.getElementById('Ebtn');
var Rbutton = document.getElementById('Rbtn');
var Tbutton = document.getElementById('Tbtn');
var Ybutton = document.getElementById('Ybtn');
var Ubutton = document.getElementById('Ubtn');
var Ibutton = document.getElementById('Ibtn');
var Obutton = document.getElementById('Obtn');
var allButton=document.getElementsByClassName('keyBTN')[0];

var Qmusic=document.getElementById('Qsound');
var Wmusic=document.getElementById('Wsound');
var Emusic=document.getElementById('Esound');
var Rmusic=document.getElementById('Rsound');
var Tmusic=document.getElementById('Tsound');
var Ymusic=document.getElementById('Ysound');
var Umusic=document.getElementById('Usound');
var Imusic=document.getElementById('Isound');
var Omusic=document.getElementById('Osound');

document.body.addEventListener('keydown', function (e) {
    var key = e.key.toUpperCase();

    switch (key) {
        case 'Q':
            Qmusic.play();
            Qbutton.style.backgroundColor = 'Yellow';
            console.log(Qmusic);
            break;
        case 'W':
            Wmusic.play();
            Wbutton.style.backgroundColor = 'Yellow';
            console.log(Wmusic);
            break;
        case 'E':
            Emusic.play();
            Ebutton.style.backgroundColor = 'Yellow';
            console.log(Emusic);
            break;
        case 'R':
            Rmusic.play();
            Rbutton.style.backgroundColor = 'Yellow';
            console.log(Rmusic);
            break;
        case 'T':
            Tmusic.play();
            Tbutton.style.backgroundColor = 'Yellow';
            console.log(Tmusic);
            break;
        case 'Y':
            Ymusic.play();
            Ybutton.style.backgroundColor = 'Yellow';
            console.log(Ymusic);
            break;
        case 'U':
            Umusic.play();
            Ubutton.style.backgroundColor = 'Yellow';
            console.log(Umusic);
            break;
        case 'I':
            Imusic.play();
            Ibutton.style.backgroundColor = 'Yellow';
            console.log(Imusic);
            break;
        case 'O':
            Omusic.play();
            Obutton.style.backgroundColor = 'Yellow';
            console.log(Omusic);
            break;
        default:
            alert('Kindly press among the shown keyboard buttons on the screen.');
    }
});

document.body.addEventListener('keyup', function (e) {
    var key = e.key.toUpperCase();

    switch (key) {
        case 'Q':
            Qbutton.style.backgroundColor = '';
            break;
        case 'W':
            Wbutton.style.backgroundColor = '';
            break;
        case 'E':
            Ebutton.style.backgroundColor = '';
            break;
        case 'R':
            Rbutton.style.backgroundColor = '';
            break;
        case 'T':
            Tbutton.style.backgroundColor = '';
            break;
        case 'Y':
            Ybutton.style.backgroundColor = '';
            break;
        case 'U':
            Ubutton.style.backgroundColor = '';
            break;
        case 'I':
            Ibutton.style.backgroundColor = '';
            break;
        case 'O':
            Obutton.style.backgroundColor = '';
            break;
    }
});
