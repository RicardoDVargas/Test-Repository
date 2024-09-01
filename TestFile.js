function calcular(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultado = valor1 + valor2;
    document.getElementById('resultado').innerText = `The result is ${resultado}`;
}
document.getElementById("buttonAnimation").addEventListener("click", function(){
    this.style.backgroundColor = "#3700b3";
    this.textContent = "Adding!";
    this.style.transform = "scale(0.95)";
    
    setTimeout(() => {
        this.style.backgroundColor = "#8100ea";
        this.textContent = "Calculate";
        this.style.transform = "scale(1)";
    }, 200);

});