const btnSubmit = document.querySelector('#btn-submit').addEventListener('click', (e)=>{
    e.preventDefault()

    let productPrice = parseFloat(document.querySelector('#priceProd').value)
    let prodPercentage = parseFloat(document.querySelector('#percentageProd').value)

    if(!productPrice){
        alert('Digite o valor do produto, por favor.')
        return
    }else{
        console.log('Preço válido');
    }

    if(prodPercentage >= 0 && prodPercentage <= 100){
        console.log('Desconto válido');
        
    }
    else{
        alert('Digite o valor do desconto, por favor')
        return
    }
    let precoFinal = productPrice - (productPrice * (prodPercentage / 100))

    let result = document.querySelector('span')
    result.innerText = precoFinal

})