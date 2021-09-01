let catalogo1 = [
  bici1 = {
    nome:'fulmine',
    peso: 7
  },
  bici2 ={
    nome:'tuono',
    peso: 4
  },
  bici3 ={
    nome:'saetta',
    peso: 4
  }
]
let kili= catalogo1[0].peso;
for ( let i = 0 ; i<3; i ++) {
  if( catalogo1[i].peso < kili){
    kili = catalogo1[i].peso;
    var leggera = catalogo1[i];
  }
  else if (catalogo1[i].peso == kili && i!=0){
    leggera.push=catalogo1[i]
  }
}
console.log(leggera)
let {nome , peso} = leggera;
console.log(`nome: ${nome}, peso: ${peso}`);

// bonus
let prova = (a) => {
     let catalogo= a;
     
     let kili= catalogo1[0].peso;
    for ( let i = 0 ; i<3; i ++) {
       
        if( catalogo[i].peso < kili){
          kili = catalogo[i].peso;
          var leggera = catalogo[i];
        }
        else if (catalogo[i].peso == kili && i!=0){
          leggera.push=catalogo[i]
        }
      }
      
      return leggera;
}
console.log(prova(catalogo1));



// esercizio 2
let squadre=[
    {
        nome:'brescia',
        punti:0,
        falli: 0
    },
    {
        nome:'reggina',
        punti:0,
        falli: 0
    },
    {
        nome:'salernitana',
        punti:0,
        falli: 0
    }

]
let nuovo=[];
for (let i = 0; i <squadre.length; i++ ){
    squadre[i].punti = Math.floor(Math.random() * 80);
    squadre[i].falli = Math.floor(Math.random() * 100);
    let {punti} = squadre[i];
    let {falli} = squadre[i];
     nuovo.push({punti, falli});
}

console.log(squadre); 
console.log(nuovo);

// esercizio 3


let wet= () =>{
    let array= [];
    for (let i = 0; i < 10 ;i++){
         array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

vet = wet();
console.log(vet);
let a = 0;
let b = 0;
do {
    a =  Math.floor(Math.random() * 100);
    b =  Math.floor(Math.random() * 100);
} while ( a > b);
console.log( a , b);

function centro(vettore, a, b){
    let corto =[];

    corto =  vettore.filter((numero) =>{
        if (numero<b && numero >a){
            return true;
        }
        return false;

    } )
    return corto;
}
console.log(centro(vet,a,b));
 
