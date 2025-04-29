export default function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let middle = Math.floor((start + end) / 2)
        let guess = arr[middle]
        if(target === guess) return middle
        if(target > guess) { start  = middle + 1 }
        if(target < guess) {end = middle - 1}
    } 
    return null
}

//Exercise 1:
/*Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma
pesquisa binária. Qual seria o número máximo de etapas que você levaria
para encontrar o nome desejado?*/
//Resposta: 7 etapas.

/*Suponha que você duplique o tamanho da lista. Qual seria o número
máximo de etapas agora?*/
//Resposta: 8 etapas porque log2(128) = 256, 2^8 = 256 e 2^7 = 128 que eh o mesmo que log2(256)=8.


