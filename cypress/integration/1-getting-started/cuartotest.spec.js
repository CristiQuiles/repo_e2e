describe("Editar tarea",()=> {
    it("Editar tarea",()=>{
        cy.visit("https://todomvc.com/examples/react/dist/")
        cy.get(".new-todo").type("Sacar al perro{enter}")
        cy.get(".todo-list").contains("Sacar al perro")
        cy.get(".todo-list li").contains("Sacar al perro").dblclick()
        cy.get(".todo-list li").clear()
        cy.get(".todo-list li").type("Ir a la compra{enter}")
        cy.get('.todo-list li').should('have.length', 1)
       

        

        
        


    })
})