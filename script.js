
function verificar() { //Função para executar onclick no botão  verificar, chamada em HTML.
    
    var data = new Date() // Criação de variável que retorna um objeto com a data atual.
    var ano = data.getFullYear() // Criação de variável que atribui à data o ano completo; ex. 2023 e não 23.
    var fano = document.getElementById('txtano') //Criação de variável que busca o elemento digitado pelo usuário dentro caixa de texto  que foi criada em HTML.
    //txtano significa caixa de texto em que é digitado o ano
    var res = document.getElementById('res') //Criação de variável da div com id='res' atribuída em HTML. Com o objetivo de imprimir a resposta.
    if (fano.value == 0 || fano.value > ano) //Se o valor do ano digitado for igual à 0 e o valor ano digitado for maior que a variável ano:
    {
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')//Criação de variável que retorna o sexo determinado pelo usuário, atribuído através da marcação em 'radsex' marcação essa criada em HTML.
        var idade = ano - fano.value //var idade é igual ao ano atual - ano escrito pelo usúário (  o value é declarado, pois fano é um texto, logo para fazer uso de operadores lógicos sem que haja concatenação, precisamos utilizá-lo.)
        var img = document.createElement('img') //Criação de uma tag img pelo JS, através da var. 
        img.setAttribute('id', 'foto')// Atribui o id 'foto' à tag img já criada.
        var gen = '' //variável indefinida cuja a propriedade será atribuída após a verificação do if.
        if(fsex[0].checked)  {
            gen = 'masculino'
            if(idade <= 10){
                //Criança
            img.setAttribute('src', 'fotobebe.m.jpg')    
            }
            else if (idade < 21){
                //Jovem
            img.setAttribute('src', 'fotojovem.m.jpg')
            }
            else if (idade < 50){
               //Adulto
            img.setAttribute('src', 'fotoaduto.m.jpg')   
            }
            else{
                //Idoso
            img.setAttribute('src', 'fotoidoso.m.jpg')
            }

         }
         else if (fsex[1].checked) { 
            gen = 'feminino' 
            if(idade <= 10){
                //Criança
                img.setAttribute('src', 'fotobebe.f.jpg')  

            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotojovem.f.jpg') 
            }
            else if (idade < 50){
               //Adulto
               img.setAttribute('src', 'fotoadulto.f.jpg')  
            }
            else{
                //Idoso
                img.setAttribute('src', 'fotoidoso.f.jpg')
            }
 
        }  
        res.style.textAlign = 'center' // Estilizando a tag img pelo JS.
        res.innerHTML = (`Detectamos o gênero ${gen}, com ${idade} anos de idade.`)

        res.appendChild(img)//Chamando a img criada para aparecer nessa secção. Imagem essa que será definida após o algorítimo que estima a idade ser executado.

        } 
       
    }


