/// <refence types ="cypress"/>


describe("Get title page", () => {
    beforeEach(() => {
        cy.visit("https://softdesign.com.br/")
    });

    it('Get title page', () => {
        
        cy.title().should("equal", "SoftDesign - Soluções Digitais Transformadoras")
    });
});
