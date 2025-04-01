/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){

    const somaQuadradoPares = numeros
        return somaQuadradoPares
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((soma, n) => soma + n, 0);

        console.log(somaQuadradoPares);

}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    // TODO: Insira seu código estruturado aqui   
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
