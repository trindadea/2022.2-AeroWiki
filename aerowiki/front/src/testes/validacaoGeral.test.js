var testes = require('./validacoes/validacaoGeral')

describe('Nome', ()=> {
    it('verifica se o nome está preenchido', () =>{
        expect(testes.verificaCampoPreenchido('Arthur')).toEqual(true)
        expect(testes.verificaCampoPreenchido('')).toEqual(false)
    })

    it('verifica se possui entre 3 e 32 caracteres', () =>{
        expect(testes.verificaComprimento('Ana', 3, 32)).toEqual(true)
        expect(testes.verificaComprimento('Charlingtonglaevionbeecheknavare', 3, 32)).toEqual(true)
        expect(testes.verificaComprimento('A', 3, 32)).toEqual(false)
        expect(testes.verificaComprimento('Charlingtonglaevionbeecheknavare dos Anjos Mendonça', 3, 32)).toEqual(false)
    })

    it('verifica se o nome possui caracteres especiais ou numéricos', () =>{
        expect(testes.verificaCaracteres('Ana')).toEqual(true)
        expect(testes.verificaCaracteres('**Ana123**')).toEqual(false)
        expect(testes.verificaCaracteres('_Tr1nd@d3_')).toEqual(false)
    })
})

describe('Email', ()=> {
    it('verifica se o email está preenchido', () =>{
        expect(testes.verificaCampoPreenchido('teste@gmail.com')).toEqual(true)
        expect(testes.verificaCampoPreenchido('')).toEqual(false)
    })

    it('verifica se o email é do formato (pelo menos 2 caracteres + @ + pelo menos 2 caracteres + . + pelo menos 2 caracteres)', () =>{
        expect(testes.verificaEmail('email@email.com')).toEqual(true)
        expect(testes.verificaEmail('ab')).toEqual(false)
        expect(testes.verificaEmail('ab@c')).toEqual(false)
        expect(testes.verificaEmail('ab@gmail')).toEqual(false)
        expect(testes.verificaEmail('ab@gmail.c')).toEqual(false)
        expect(testes.verificaEmail('a@gmail.com')).toEqual(false)
        expect(testes.verificaEmail('eu@eu.eu')).toEqual(true)
    })
})

describe('Matricula', ()=> {
    it('verifica se a matrícula está preenchida', () =>{
        expect(testes.verificaCampoPreenchido('180098080')).toEqual(true)
        expect(testes.verificaCampoPreenchido('')).toEqual(false)
    })

    it('verifica se a matrícula contém exatamente 9 dígitos', () =>{
        expect(testes.verificaComprimento('180098080', 9, 9)).toEqual(true)
        expect(testes.verificaComprimento('2100101019', 9, 9)).toEqual(false)
    })

    it('verifica se a matrúcla contém apenas caracteres numéricos', () =>{
        expect(testes.verificaNumerico('110181765')).toEqual(true)
        expect(testes.verificaNumerico('Oie')).toEqual(false)
        expect(testes.verificaNumerico('11/0181765')).toEqual(false)
    })
})

describe('Data de Nascimento', ()=> {
    it('verifica se a data foi preenchida', () =>{
        expect(testes.verificaCampoPreenchido('1991-01-23')).toEqual(true)
        expect(testes.verificaCampoPreenchido('')).toEqual(false)
    })

    it('verifica se a data de nascimento é referente a uma pessoa maior de idade', () =>{
        expect(testes.maiorIdade('1991-01-23')).toEqual(true)
        expect(testes.maiorIdade('2023-12-04')).toEqual(false)
        expect(testes.maiorIdade('2026-12-04')).toEqual(false)
    })
})

describe('CPF', ()=> {
    it('verifica se o CPF contém exatamente 11 caracteres', () =>{
        expect(testes.verificaComprimento('09876514110', 11, 11)).toEqual(true)
        expect(testes.verificaComprimento('098.765.141-10', 11, 11)).toEqual(false)
    })

    it('verifica se o CPF contém apenas caracteres numéricos', () =>{
        expect(testes.verificaNumerico('09876514110')).toEqual(true)
        expect(testes.verificaNumerico('098.765.141-10')).toEqual(false)
    })

    it('verifica se o CPF é válido', () =>{
        expect(testes.verificaCPF('02268118169')).toEqual(true)
        expect(testes.verificaCPF('39916073104')).toEqual(true)
        expect(testes.verificaCPF('00000000000')).toEqual(false)
        expect(testes.verificaCPF('11111111111')).toEqual(false)
        expect(testes.verificaCPF('22222222222')).toEqual(false)
    })
})