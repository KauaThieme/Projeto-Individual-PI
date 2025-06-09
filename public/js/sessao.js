function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var login = document.getElementById("login");
    var cadastro = document.getElementById("cadastro");


    if (email != null && nome != null) {
        usuario.innerHTML = 'Olá, ' + nome;
        login.style.display = "none";
    } else {
        quiz.style.display = "none";
        estatisticas.style.display = "none";
        sair.style.display = "none";
        usuario.style.display = "none";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function sair() {
    Swal.fire({
        title: "Deseja sair?",
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
    }).then((result) => {
        if (result.isConfirmed) {
            limparSessao();
        }
    });

}