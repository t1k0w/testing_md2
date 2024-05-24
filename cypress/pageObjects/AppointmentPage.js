class AppointmentPage {
  constructor() {
    this.usernameField = '#txt-username';
    this.passwordField = '#txt-password';
    this.loginButton = '#btn-login';
    this.makeAppointmentButton = '#btn-make-appointment';
    this.facilitySelect = '#combo_facility';
    this.applyHospitalReadmission = '#chk_hospotal_readmission';
    this.healthcareProgram = '[name="programs"]';
    this.dateField = '#txt_visit_date';
    this.commentField = '#txt_comment';
    this.bookAppointmentButton = '#btn-book-appointment';
    this.appointmentConfirm = '#summary';
    this.menuIcon = '#menu-toggle';
    this.historyLink = '#sidebar-wrapper > ul > li:nth-child(4) > a';
    this.noAppointment = '#history';
    this.noAppointmentText = 'No appointment.';
  }

  visit() {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  }

  goToAppointmentPage() {
    cy.get(this.makeAppointmentButton).click();
  }

  login(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }

  fillAppointmentForm(facility, readmission, program, date, month, year, comment) {
    cy.get(this.facilitySelect).select(facility);
    if (readmission) {
      cy.get(this.applyHospitalReadmission).check();
    }
    cy.get(this.healthcareProgram).check(program);
    this.setDate(date, month, year);
    cy.get(this.commentField).type(comment);
    cy.get(this.bookAppointmentButton).click();
  }

  setDate(date, month, year) {
    cy.get(this.dateField).click();
    cy.get('.datepicker-switch').contains(year).click();
    cy.get('.datepicker-switch').contains(month).click({force: true});
    cy.get('.datepicker-days .day:not(.new):not(.old)').contains(date).click({force: true});
    cy.get('.datepicker').invoke('attr', 'style', 'display: none');
  }

  validateAppointmentDetails(facility, readmission, program, date, comment) {
    cy.get(this.appointmentConfirm).should('contain', facility)
      .and('contain', readmission ? 'Yes' : 'No')
      .and('contain', program)
      .and('contain', date)
      .and('contain', comment);
  }

  checkHistoryEmpty() {
    cy.get(this.menuIcon).click();
    cy.get(this.historyLink).click();
    cy.get(this.noAppointment).should('contain', this.noAppointmentText);
  }

  validateSidebarIsActive() {
    cy.get('#sidebar-wrapper').should('have.class', 'active');
  }
}

export default new AppointmentPage();