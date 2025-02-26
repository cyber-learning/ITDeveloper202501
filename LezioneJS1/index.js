/*
// dichiaro la variabile x
var x;

// operazione di assegnamento (cioè una operazione di scrittura)
x = 99;

console.log(x);
*/


/*
var x;

x = 5;
console.log(x); // 5

x = 99; // sovrascrivere
console.log(x); // 99
*/

/*
var x;
x = 5;

var y;
y = x;

console.log(x); // 5
console.log(y); // 5
*/

/*
var x;
x = 5;

var y;
y = x;

x = 99;

console.log(x);
console.log(y); // 5 oppure 99 ????
*/



/*
// dichiaro la variabile x e inizializzo il valore della variabile
var x = 99;

console.log(x);

x = 100;

console.log(x);
*/


// snake case
// var eta_utente_giovanni;

// camel case
// var etaUtenteGiovanni;



// var firstname;
// firstname = 'Eric';
// console.log(firstname);

/*
var fullname;
fullname = 'Eric Cartman';
console.log(fullname);
*/

/*
var isMale;
isMale = false;
console.log(isMale);
*/


/*
var x;
x = 5;

var y;
y = 3;

var z;
z = x % y;  // resto della divisione

console.log(z);
*/


/*
var x;
x = 4;

// x = x + 3;
// x += 3;

// x = x - 3;
x -= 3;

console.log(x);
*/


/*
var x;
x = 4;

// x = x + 1;
x++;

// x = x - 1;
// x--;

console.log(x);
*/


/*
var x;
x = 4;

var y;

// x = x + 1;
// y = x;
// y = ++x;

// y = x;
// x = x + 1;
// y = x++;

++x;
y = x;

console.log(x);
console.log(y);
*/


/*
var firstname = 'Eric';
var lastname = 'Cartman';

var fullname;
fullname = firstname + ' ' + lastname;    // operatore concatenazione

console.log(fullname);
*/


/*
var firstname = 'Eric';
var lastname = 90;  // 90 -> '90'

var fullname;
fullname = firstname + lastname;    // conversione di tipo implicita

console.log(fullname);
*/



/*
var x = '10'; // '10' -> 10
var y = 90;

var z = x * y;
console.log(z);
*/



/*
var x = 5;
var y = 4;

var z;
z = x == y;

console.log(z);
*/

/*
var x = 'eric';
var y = 'eric';

var z;
z = x == y;

console.log(z);
*/


/*
var x = false;
var y = false;

var z;
z = x == y;

console.log(z);
*/


/*
var x = '10';
var y = 10;

var z;
z = x == y;

console.log(z);
*/


/*
var x = '10';
var y = 10;

var z;
z = x === y;

console.log(z);
*/



/*
var haiLaMacchina = false;
var haiLaBenzina = false;

var puoiViaggiare;
puoiViaggiare = haiLaMacchina && haiLaBenzina;

console.log(puoiViaggiare);
*/


/*
var haiEthernet = false;
var haiIlWifi = false;

var haiInternet = haiEthernet || haiIlWifi;
console.log(haiInternet);
*/

/*
var isSunnyDay = false;
var isUmbrellaRequired = !isSunnyDay;
console.log(isUmbrellaRequired);
*/




/*
Un cinema proietta un film vietato ai minori di 14 anni.

Data l'età del cliente, da salvare in una variabile, valutare se al cliente è permesso
l'accesso in sala oppure no stampando in console un messaggio quale:
    è ammesso in sala: true
    è ammesso in sala: false
*/


/*
var age = 50;   // simulo l'input da parte dell'utente
var minAge = 14;

var isAdmitted = age >= minAge;
console.log('è ammesso in sala: ' + isAdmitted);
*/

/*
# Esercizio - Operatori Relazionali e Operatori Logici
Una palestra ammette solo donne curvy dove il curvy è valutato tramite l'indice di massa corporea.

BMI=peso/altezza²   peso in kg e altezza metri

BMI >= 25 => curvy

Dati il genere, l'altezza e il peso del cliente valutare se al cliente è permesso l'iscrizione alla palestra.
    è ammesso in palestra: true
    è ammesso in palestra: false
*/


var isFemale = false;
var weight = 80;    // kg
var height = 1.5;   // metri

var bmi = weight / (height * height);

var isAdmitted = isFemale && bmi >= 25;
console.log('è ammesso in palestra: ' + isAdmitted);












