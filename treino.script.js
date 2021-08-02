function calcular() {
  var pN = document.getElementById('pN')
  var sN = document.getElementById('sN')
  var n1 = Number(pN.value)
  var n2 = Number(sN.value)
  var res = document.getElementById('res')

  var escolha = document.getElementsByName('escolha')
  if(escolha[0].checked) {
      var resultado = n1 + n2
      res.innerHTML = ` ${n1} + ${n2} = ${resultado}`
       
    }
    else if(escolha[1].checked) {
       var resultado = n1 - n2
       res.innerHTML = ` ${n1} - ${n2} = ${resultado}`
       
    }
    else if(escolha[2].checked){
        var resultado = n1 * n2
        var arredondado = resultado.toFixed(2)
        res.innerHTML = ` ${n1} x ${n2} = ${arredondado}`
       
    }
    else if (escolha[3].checked){
        var resultado = n1 / n2
        var arredondado = resultado.toFixed(2)
        res.innerHTML = ` ${n1} / ${n2} = ${arredondado}`
        
    }
  
}

function calcularMoeda() {
   var valor1 = document.getElementById('valor')
   var pM = document.getElementsByName('moedas')
   var sM = document.getElementsByName('moedas2')
   var resM = document.getElementById('resM')
   if (pM[0].checked && sM[1].checked){
       var valor = Number(valor1.value)
       var conv = valor * 108.28
       var conv = conv.toFixed(3)
       
    resM.innerHTML = `a conversão de ${valor} dólares para yenes é: ${conv}`
    }
    else if (pM[0].checked && sM[2].checked){
        var valor = Number(valor1.value)
        var conv = valor * 0.83005
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} dólares para euro é: ${conv}`
     }
     else if (pM[0].checked && sM[3].checked){
        var valor = Number(valor1.value)
        var conv = valor * 5.54420
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} dólares para reais é: ${conv}`
     }
     else if (pM[1].checked && sM[0].checked){
        var valor = Number(valor1.value)
        var conv = valor * 0.00924
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} yenes para dólares é: ${conv}`
     }
     else if (pM[1].checked && sM[2].checked){
        var valor = Number(valor1.value)
        var conv = valor * 0.00767
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} yenes para euros é: ${conv}`
     }
     else if (pM[1].checked && sM[3].checked){
        var valor = Number(valor1.value)
        var conv = valor * 0.05122
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} yenes para reais é: ${conv}`
     }
     else if (pM[2].checked && sM[0].checked){
        var valor = Number(valor1.value)
        var conv = valor * 1.20460
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} euros para dólar é: ${conv}`
     }
     else if (pM[2].checked && sM[1].checked){
        var valor = Number(valor1.value)
        var conv = valor * 130.37
        var conv = conv.toFixed(3)
        
     resM.innerHTML = `a conversão de ${valor} euros para yenes é: ${conv}`
     }
     else if (pM[2].checked && sM[3].checked){
        var valor = Number(valor1.value)
        var conv = valor * 6.67853
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} euros para real é: ${conv}`
     }
     else if (pM[3].checked && sM[0].checked){
        var valor = Number(valor1.value)
        var conv = valor * 0.18025
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} reais para dólar é: ${conv}`
     }
     else if (pM[3].checked && sM[1].checked){
        var valor = Number(valor1.value)
        var conv = valor * 19.51
        var conv = conv.toFixed(3)
        
     resM.innerHTML = `a conversão de ${valor} reais para yenes é: ${conv}`
     }
     else if (pM[3].checked && sM[2].checked){
        var valor = Number(valor1.value)
        var conv = valor * 0.14962
        var conv = conv.toFixed(2)
        
     resM.innerHTML = `a conversão de ${valor} reais para euros é: ${conv}`
     }
}    