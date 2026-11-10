describe("Borrar tarea",()=> {
    it("Borrar tarea",()=>{
        cy.visit("https://todomvc.com/examples/react/dist/")
        cy.get(".new-todo").type("Sacar al perro{enter}")
        cy.get(".todo-list li").contains("Sacar al perro").parents("li").find(".destroy").click({ force: true })
        cy.get(".todo-list").should("not.contain", "Sacar al perro")
    
    })
})