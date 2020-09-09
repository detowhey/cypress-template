/// <refence types ="cypress"/>


describe("Primeiro teste", () => {
    beforeEach(() => {
        cy.visit("https://todomvc-app-for-testing.surge.sh/")

        cy.get('.new-todo', {
            timeout: 6000
        }).type("Clean room{enter}")
        });
        
    


    it('Navegar para TodoMVC App', () => {
        
    })

    it('Click Radio Button', () => {
        let botaoRadio = cy.get('.toggle')

        botaoRadio.should("not.be.checked")
        botaoRadio.click()
        botaoRadio.should("be.checked")
    })

    it('Label contains text', () => {
        let label = cy.get("label")

        label.should("have.text", "Clean room")
        label.should("have.css", "text-decoration-line", "line-through")
    })

    it('', () => {
        cy.contains("Clear").click()
        cy.get('.todo-list').should("not.have.descendants", "li")
    })
})
