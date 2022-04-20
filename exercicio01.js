const dados = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
    ];
    /*Imprima no console a quantidade de pessoas Total.*/
    console.log(`A quantidade total de  pessoas na lista é ${dados.length}`);
    document.write(`A quantidade total de  pessoas na lista é ${dados.length}<br>`);

    /*Imprima no console a quantidade de pessoas pessoas do sexo Feminino.*/
    let resultado = dados.filter(elemento => elemento.sexo === 'F');
    console.log(`A quantidade de  pessoas  do sexo feminino é ${resultado.length}`);
    document.write(`A quantidade de  pessoas  do sexo feminino é ${resultado.length}<br>`);

    /*Imprima no console a soma do salário de todas as pessoas.*/
    let salarioTotal = dados.reduce((acumulador, proximo) => acumulador + proximo.salario, 0);
    console.log(`A soma de todos os salários é R$: ${salarioTotal.toFixed(2)}`);
    document.write(`A soma de todos os salários é R$: ${salarioTotal.toFixed(2)}<br>`);

    /*Imprima no console a soma do salario de todos as pessoas do sexo Masculino*/
    let totalSalarioM = dados.filter(elemento => elemento.sexo === 'M')
                             .reduce((acumulador, proximo) => acumulador + proximo.salario, 0);
    console.log(`A soma de todos  os salário do sexo masculino é R$: ${totalSalarioM.toFixed(2)}`);
    document.write(`A soma de todos  os salário do sexo masculino é R$: ${totalSalarioM.toFixed(2)}<br>`);

    /*Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
    contrário falso.*/
    let existe = dados.some(elemento => elemento.salario > 7000);
    if(existe){
        console.log(`Verdadeiro`);
        document.write(`Verdadeiro`);
    }else {
        console.log(`Falso`);
        document.write(`Falso`);
    }

    /*Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.*/
    let indicePessoa = dados.findIndex(elemento => elemento.nome === "Eva Trindade");
    if (indicePessoa != -1){
        console.log(`Encontrou Eva! ${indicePessoa} no array`);
        document.write(` Encontrou Eva! ${indicePessoa} no array`);
    } else{
        console.log(`Não encontrou Eva! ${indicePessoa} no array`);
        document.write(` Não encontrou Eva! ${indicePessoa} no array`);
    }

    /*Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".*/
    /* Imprima os nomes utilizando o MAP. */
    let pessoasSilva = dados.filter(elemento => elemento.nome.indexOf("Silva") >= 0)
                            .map(elemento => console.log(elemento.nome));

