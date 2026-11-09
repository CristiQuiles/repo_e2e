describe("tarea completada",()=> {
    it("tarea completada",()=>{
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get('.new-todo').type("Sacar al perro {enter}")
        cy.get('.toggle').click()
        cy.get(':nth-child(3) > a').click()


    })
})