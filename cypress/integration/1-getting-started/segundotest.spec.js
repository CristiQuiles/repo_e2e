describe("Agregar tareas",()=> {
    it("Agregar una tarea a la lista",()=>{
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get(".new-todo").type("Tarea 1{enter}")
        cy.get(".todo-list").contains("Tarea 1")

    })
})