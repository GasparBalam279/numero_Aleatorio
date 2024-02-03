let numeroMaximo = 10
let numeroSecreto = Math.floor(Math.random()*numeroMaximo+1);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'
let maximoIntentos = 6;


while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Indicame un numero entre 1 y ${numeroMaximo}: `));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario==numeroSecreto){
        //condicion verdadera
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    }else{
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secretos es mayor');
        }
        //Incrementamos el numero cuando no acierta 
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++; 
        //palabrasVeces = `veces `;

        if (intentos > maximoIntentos){
            alert(`Llegaste al numero maximo de ${intentos} intentos. `)
            break;
        }
        //La condicion no se cumplio
        //alert('Lo siento, no acertaste el numero');
    }
}