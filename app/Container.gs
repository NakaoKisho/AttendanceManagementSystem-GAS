class Container {
  constructor(e) {
    attendanceController = new AttendanceController(e);
    attendanceSpreadsheet = new AttendanceSpreadsheet();
    idPathQuery = new IdPathQuery(e.parameter);
    user = new User();
    currentDatetime = Date();
  }
}
