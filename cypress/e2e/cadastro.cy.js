describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Liu Kang',
            cpf: '93885288087',
            email: 'houria7361@uorak.com',
            whatsapp: '51943507238',
            endereco: {
                cep: '94859410',
                rua: 'Rua Aldo Rodrigues da Silva',
                numero: '738',
                complemento: 'Ap 147',
                bairro: 'Jardim Algarve',
                cidade_uf: 'Alvorada/RS'
            },
            metodo_entrega: 'Moto',
            cnh_digital: 'Nova-CNH.jpg'

        }
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh_digital)

        cy.get('button[type="submit"]').click()

    })
})