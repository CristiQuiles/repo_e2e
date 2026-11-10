describe("Filtrar tareas",()=> {
    it("Filtrar tareas",()=>{
        cy.visit("https://todomvc.com/examples/react/dist/")
        cy.get(".new-todo").type("Sacar al perro{enter}")
        cy.get(".new-todo").type("Ir a la compra{enter}")
        cy.get(".new-todo").type("Ir al parque{enter}")
        cy.get(".new-todo").type("Llevar el coche al taller{enter}")
        cy.get(':nth-child(2) > .view > [data-testid=todo-item-toggle]').click()
        cy.get(':nth-child(4) > .view > [data-testid=todo-item-toggle]').click()
        cy.get('[data-testid=footer-navigation] > :nth-child(3) > a').click()
        cy.get('.todo-list li').should('have.length', 2,4)
        cy.get('[data-testid=footer-navigation] > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .view > [data-testid=todo-item-label]')
        cy.get(':nth-child(2) > .view > [data-testid=todo-item-label]')
        cy.get('[data-testid=footer-navigation] > :nth-child(1) > a').click()




    })
})