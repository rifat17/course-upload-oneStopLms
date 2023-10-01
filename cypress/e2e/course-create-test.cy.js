import LoginPage from "../pages/Login";
import { generateRandomString } from "../helpers/cypress-utils";

describe.skip("Create new course", () => {
  const loginPage = new LoginPage();
  const randomCourseTitle = generateRandomString(5);
  const previewVideo = "selenium.mp4";
  const coverImage = "cover.jpg";
  const thumbnailImage = "thumbnail.jpg";

  before(() => {
    loginPage.userlogin("marufrahman897@gmail.com", "Samtest1");
    cy.wait(15000);
  });
  it("User can go to course creation page by clicking add course", () => {
    cy.contains("Add Course").click();
    cy.wait(5000);
  });
  it("Course name should be 15 to 60 character", () => {
    cy.wait(2000);
    cy.get(":nth-child(1) > .form-control").clear().type(randomCourseTitle);
  });
  it("User can enter course title", () => {
    cy.wait(2000);
    cy.get(":nth-child(1) > .form-control")
      .clear()
      .type(randomCourseTitle + " Test Course for automation");
  });

  //To verify that course slug will be created automatically
  it("Course slug should be created automatically", () => {
    cy.get("form > :nth-child(3)").should(
      "include.text",
      "test-course-for-automation"
    );
  });

  //To verify that user can select instructor name by searching
  it("User can select instructor name by searching", () => {
    cy.get(
      ":nth-child(4) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3"
    ).type("Tanvir{enter}");
    cy.wait(5000);
    cy.get("#react-select-2-option-0").click();
  });
  //To verify that user can see course category by clicking on "Categories" field
  it("User can see course category by clicking on Categories field", () => {
    cy.get(
      ":nth-child(5) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3"
    ).click();
    cy.wait(2000);
    cy.get("#react-select-3-option-0").click();
    cy.get(".c-main").click();
  });

  it("Create new course button is working after giving all valid information", () => {
    cy.get(".form-submit").click();
    cy.wait(2000);
    cy.get(".modal-body > .action-block > .form-submit").click();
    cy.wait(5000);
    cy.get(".Toastify__toast-body").should(
      "include.text",
      "Course created successfully"
    );
  });

  //To verify that user can upload preview video
  it.skip("User can upload preview video", () => {
    cy.get("a > .border").click({ force: true });

    // Attach the file using the file input element
    cy.get(".form-control-plaintext").attachFile(previewVideo);
    cy.get(
      ":nth-child(3) > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });

  //To verify that user can upload course image
  it.skip("User can upload course image", () => {
    cy.wait(10000);
    cy.get(".col-xl-12 > .float-right").click({ force: true });
    cy.get(":nth-child(1) > .d-flex > .d-block > input").attachFile(coverImage);
    cy.get(":nth-child(2) > .d-flex > .d-block > input").attachFile(
      thumbnailImage
    );
    cy.xpath("//button[normalize-space()='Upload']").click();
    cy.wait(2000);
    cy.xpath("//button[normalize-space()='Upload']").click();
    cy.wait(12000);
  });

  //To verify that a user can successfully edit the title of a course
  it.skip("User can edit the title of the course", () => {
    cy.wait(12000);
    cy.get(
      ".card-body > :nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .form-control"
    )
      .clear()
      .type("Edited Test Course for automation");
  });

  //To verify that user should be able to add course tags
  it.skip("User can add course tags", () => {
    cy.get(
      ":nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3"
    ).click({ force: true });
    cy.get("#react-select-5-option-0").click();
    cy.get(".card-body").click({ force: true });
  });
  //To verify that a user can successfully select a course level from a dropdown menu
  it.skip("User can select course level from a dropdown menu", () => {
    // Select an option by its value
    cy.get('select[name="skill_level"]').select("intermediate");
  });
    it("User can input course price", () => {
      cy.get('input[name="price"]').clear().type('1000');

    });
    //To verify that discount allow checkbox is working
    it("User can check discount allow checkbox", () => {
      cy.get('#flexCheckIndeterminate').click();
    });
    it("User can input discounted course price", () => {
      cy.get('input[name="discounted_price"]').clear().type('200');

    });
});
