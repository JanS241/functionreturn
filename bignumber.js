// big number

const hundredcheck = function(number){
 if (number <= 100) return false;
   else return true;
};

console.log('Is 101 greater than hundred? '+ hundredcheck(101));

console.log('Is 98 greater than hundred? '+  hundredcheck(98));

// this function do something, it check a number, is not producing anything.

// Bouncer at a club

const bouncer = function(maxpeople, inpeople, peopleage){
  if (inpeople >= maxpeople) return 'to busy now, come back later';
   else if (peopleage<18) return 'this club is for adults only';
   else return 'Welcome, come in';  
};

console.log ( 'answer 100,98,21: '+ bouncer(100,98,21));
console.log ( 'answer 100-101-21 :' + bouncer(100,101,21));
console.log ( 'answer 100,98,17 : '+ bouncer(100,98,17));

// this functions controls something, is does not produce anythmg

//calculate the average

const calcaverage = function(nr1,nr2,nr3,nr4,nr5,round){
  if (round === false) return ((nr1+nr2+nr3+nr4+nr5)/5);
  else return Math.round((nr1+nr2+nr3+nr4+nr5)/5);
};

console.log('gemiddelde van 1+2+3+4+5 niet afgerond : '+ calcaverage(1,2,3,4,5,false));

console.log('gemiddelde van 3+9+12+34+61 niet afgerond : '+ calcaverage(3,9,12,34,61,false));

console.log('gemiddelde van 3+9+12+34+61 wel afgerond : ' + calcaverage(3,9,12,34,61,true));

// deze functie produceert het gemiddelde van een aantal getallen.