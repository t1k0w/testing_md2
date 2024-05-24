import AppointmentPage from '../pageObjects/AppointmentPage';

describe('Appointment Booking Tests', () => {
  beforeEach(() => {
    AppointmentPage.visit();
  });

  it('Scenario 1 - Make an Appointment', () => {
    AppointmentPage.goToAppointmentPage();
    AppointmentPage.login('JohnDoe', 'ThisIsNotAPassword');
    AppointmentPage.fillAppointmentForm('Seoul CURA Healthcare Center', true, 'Medicaid', '2050-12-30', 'CURA Healthcare Service');
    AppointmentPage.validateAppointmentDetails('Seoul CURA Healthcare Center', true, 'Medicaid', '2050-12-30', 'CURA Healthcare Service');
  });

  it('Scenario 2 - Appointment history empty', () => {
    AppointmentPage.goToAppointmentPage();
    AppointmentPage.login('JohnDoe', 'ThisIsNotAPassword');
    AppointmentPage.checkHistoryEmpty();
  });
});