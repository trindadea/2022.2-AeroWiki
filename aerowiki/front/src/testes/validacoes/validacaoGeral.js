function verificaCampoPreenchido(nome) {
    if (nome) return true
    return false
}

function verificaComprimento(nome, min, max) {
    if (nome.length >= min && nome.length <= max) return true
    return false
}

function verificaCaracteres(nome) {
    const possuiCaracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(nome);
    const possuiCaracteresNumericos = /\d/.test(nome);

    return !(possuiCaracteresEspeciais || possuiCaracteresNumericos);
}

function verificaEmail(email) {
    const regex = /.{2,}@.{2,}\..{2,}/;
    return regex.test(email);
}

function verificaNumerico(matrícula) {
    return /^[0-9]+$/.test(matrícula);
}

function maiorIdade(dataNascimento) {
    // Obtém a data atual
    const dataAtual = new Date();

    // Converte a data de nascimento para um objeto Date
    const dataNascimentoObj = new Date(dataNascimento);

    const diferencaAnos = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();
    return diferencaAnos >= 18;
}

function verificaCPF(cpf) {
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcula os dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    const resto = (soma * 10) % 11;
    const digito1 = (resto === 10 || resto === 11) ? 0 : resto;

    if (digito1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    const resto2 = (soma * 10) % 11;
    const digito2 = (resto2 === 10 || resto2 === 11) ? 0 : resto2;

    return digito2 === parseInt(cpf.charAt(10));
}

module.exports = {
    verificaCampoPreenchido,
    verificaComprimento,
    verificaCaracteres,
    verificaEmail,
    verificaNumerico,
    maiorIdade,
    verificaCPF
}