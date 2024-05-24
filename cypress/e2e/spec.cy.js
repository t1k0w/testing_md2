import AppointmentPage from '../pageObjects/AppointmentPage';

describe('Appointment Booking Tests', () => {
  beforeEach(() => {
    AppointmentPage.visit();
  });

  it('Scenario 1 - Make an Appointment', () => {
    AppointmentPage.goToAppointmentPage();
    AppointmentPage.login('John Doe', 'ThisIsNotAPassword');
    AppointmentPage.fillAppointmentForm('Seoul CURA Healthcare Center', 'yes', 'Medicaid', '30', 'Apr', '2024', 'CURA Healthcare Service');
    AppointmentPage.validateAppointmentDetails('Seoul CURA Healthcare Center', 'yes', 'Medicaid', '30/04/2024', 'CURA Healthcare Service');
  });

  it('Scenario 2 - Appointment history empty', () => {
    AppointmentPage.goToAppointmentPage();
    AppointmentPage.login('John Doe', 'ThisIsNotAPassword');
    AppointmentPage.checkHistoryEmpty();
  });
});

