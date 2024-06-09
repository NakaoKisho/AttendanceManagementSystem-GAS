class AttendanceController {
  constructor(e) {
    this.e = e;
  }

  index() {
    const sheet = attendanceSpreadsheet.getSheet();
    const nextRange = this.getNextRange(sheet);
    const values = this.getValues(this.e);
    
    nextRange.setValues(values);
  }

  getValues() {
    const officeId = idPathQuery.getId();
    const userEmail = user.getEmail();

    return [[officeId, userEmail, currentDatetime]];
  }

  getNextRange(sheet) {
    const nextRowCount = 1;
    const nextRow = sheet.getLastRow() + nextRowCount;
    const startColumnCount = 1;
    const rowCount = 1;
    const columnCount = sheet.getLastColumn();

    return sheet.getRange(nextRow, startColumnCount, rowCount, columnCount);
  }
}
