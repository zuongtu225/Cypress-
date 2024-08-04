describe("ModuleComponent", () => {
  it("test first of me", () => {
    cy.visit("/watches/collection-chanel-couture-o-clock/");

    cy.get(".text").type(" CHANEL COUTURE O'CLOCK WATCH CAPSULE COLLECTION");
    // get chọn phần tử trên trang bằng selector
    // type() nhập văn bản vào các phần tử của biểu mẫu
  });
});
