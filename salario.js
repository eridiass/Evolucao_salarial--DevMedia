import entrada from 'readline-sync'

let salarioMinimo = [
    {ano: 2010, valor: 510.00},
    {ano: 2011, valor: 545.00},
    {ano: 2012, valor: 622.00},
    {ano: 2013, valor: 678.00},
    {ano: 2014, valor: 724.00},
    {ano: 2015, valor: 788.00},
    {ano: 2016, valor: 880.00},
    {ano: 2017, valor: 937.00},
    {ano: 2018, valor: 954.00},
    {ano: 2019, valor: 998.00},
    {ano: 2020, valor: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("Escolha uma das alternativas abaixo:\n");
console.log("1 - Listar os salários minímos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = entrada.question("Informe o número de sua escolha \n");
escolha = Number(escolha);

switch (escolha){
    
    case 1 :
        for (let contador = 0; contador <= salarioMinimo.length-1; contador++){
                let ano = salarioMinimo[contador].ano;
                let salario = salarioMinimo[contador].valor;
                console.log("Ano: "+ano);
                console.log("Salário mínimo: R$"+salario+"\n"); 
                
        }
    break;  

    case 2: 
        for (let contador = 0; contador <= inflacao.length-1; contador++ ){
            let ano = inflacao[contador].ano;
            let taxa = inflacao[contador].ipca;
            console.log("Ano: "+ano);
            console.log("Inflação IPCA: "+taxa+"\n");
        }
    break;   
    
    case 3: 
        for (let contador = 0; contador <= salarioMinimo.length-1; contador++){
            let ano = salarioMinimo[contador].ano;
            let salario = salarioMinimo[contador].valor;
            
            if (contador > 0){
            let salarioAnterior = salarioMinimo[contador-1].valor;
            let diferenca = salario - salarioAnterior;
            let crescimento = (diferenca / salarioAnterior) * 100; 
            let crescimentoFormatado = crescimento.toFixed(2);

            let taxa = inflacao[contador].ipca;
            
            console.log("Ano: "+ano);
            console.log("Salário mínimo: R$"+salario); 
            console.log("Crescimento salarial: "+crescimentoFormatado);
            console.log("Inflação IPCA: "+taxa+"\n");
            }
            else {
                console.log("-");
            }
        }
    break;
        
    default: 
        console.log("Foi informado " +escolha+ ", essa opção é inválida");
    break;
    
}

