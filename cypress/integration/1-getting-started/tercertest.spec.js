describe("Desmarcar tarea completada",()=> {
    it("Desmarcar tarea completada",()=>{
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get('.new-todo').type("Sacar al perro {enter}")
        cy.get('.toggle').click()
        cy.get(':nth-child(3) > a').click()
        cy.get('.toggle').click()
        cy.get(':nth-child(2) > a') .click()
        cy.get('.todo-list li').should('have.length', 1)



    })
})