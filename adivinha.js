const readline = require('readline')
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroSecreto = Math.floor(Math.random() * 100 + 1)

io.setPrompt('Adivinhe o número! (0 a 100): ');
io.prompt()
io.on('line', function(palpite){
    
    let numPalpite = parseInt(palpite);
    
    tentativas = () =>{
        if (numPalpite > numeroSecreto){
            console.log("Errou, o número é menor. Tente novamente:");
            
        }
        else if (numPalpite < numeroSecreto){
            console.log("Errou, o número é maior. Tente novamente:");
            
        }
        
        else {
        console.log("ACERTOU");
        continuarOuNaoJogo()
        
        } 
    }

    continuarOuNaoJogo = () =>{
        io.setPrompt("Deseja jogar novamente? (S/N)")
        io.prompt()
        io.on('line', function(opcao){

            if(opcao === 'S'){
            tentativas()
            } else if(opcao === 'N'){
            process.exit(0)
            } else{
            console.log('Digite uma opção válida (S/N)');
            
            }
        
        })
    
    }  

})