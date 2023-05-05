// TELA DE LOGIN


// TELA DE CADASTRO 


// TELA ALTERAR SENHA
let btn_alterar = document.getElementById("btn-alterar");
let campo_nova_senha = document.getElementById("inp-nova-senha");
let campo_repetir_senha = document.getElementById("inp-repetir-senha");

campo_nova_senha.addEventListener("keypress", (clique)=>{
    if(clique.key === "Enter"){
        btn_alterar.click()
    }
})

campo_repetir_senha.addEventListener("keypress", (clique)=>{
    if(clique.key === "Enter"){
        btn_alterar.click()
    }
})

btn_alterar.addEventListener("click", () => {
    if (campo_nova_senha.value == "" && campo_repetir_senha.value == "") {
        alert("Os campos não podem ficar vazios!");
    } else if (campo_nova_senha.value != campo_repetir_senha.value) {
        alert("As senhas não coincidem!");
    } else if (campo_nova_senha.value === campo_repetir_senha.value) {
        if ((campo_nova_senha.value.length < 8) && (campo_repetir_senha.value.length < 8)) {
            alert("A senha precisa de pelo menos 8 caracteres")
            return 0
        }
        alert("Senha alterada com sucesso!");
        console.log(campo_nova_senha.value) //Apenas para saber qual senha foi cadastrada no console
        campo_nova_senha.value = "";
        campo_repetir_senha.value = "";
    } else {
        alert("Preencha os campos para prosseguir");
    }
});