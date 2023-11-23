/// <refence types ="cypress"/>


describe("Primeiro teste", () => {
    beforeEach(() => {
        cy.visit("https://softdesign.com.br/")
    });

    it('Get title page', () => {
        
        cy.title().should("equal", "SoftDesign - Soluções Digitais Transformadoras")
    });
});
