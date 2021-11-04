context("Register", () => {
  it("Enters on the home page and tries to search an CEP", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1400, 900);
    cy.get("input[type=number]").type("11713290");
    cy.contains("Buscar pelo CEP").click();
  });
});
