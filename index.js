const metros = prompt ("Insira o valor em metros:")
const unidade = prompt (
    "Qual unidade de medida deve ser convertido:" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)")

switch (unidade){
    case "1": 
        alert ("O " + metros + " em milímetro é igual a " + metros * 1000)
        break
    case "2": 
        alert ("O " + metros + " em centímetro é igual a " + metros * 100)
        break
    case "3": 
        alert ("O " + metros + " em milímetro é igual a " + metros * 10 )
        break
    case "4": 
        alert ("O " + metros + " em decâmetro é igual a " + metros / 10 )
        break
    case "5": 
        alert ("O " + metros + " em hectômetro é igual a " + metros / 100 )
        break
    case "6": 
        alert ("O " + metros + " em quilômetro é igual a " + metros / 1000 )
        break
    default: 
        alert ("Opção inválida, por favor tente novamente")
    }