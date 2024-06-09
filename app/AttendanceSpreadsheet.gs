class AttendanceSpreadsheet {
  constructor() {
    const prop = PropertiesService.getScriptProperties();
    this.spreadsheetId = prop.getProperty('attendanceSpreadsheetId');
    this.setSheet();
  }

  setSheet() {
    const spreadsheet = SpreadsheetApp.openById(this.spreadsheetId);
    const sheetName = "勤怠";
    this.sheet = spreadsheet.getSheetByName(sheetName);
  }

  getSheet() {
    return this.sheet;
  }

  getNextRange() {
    const nextRowCount = 1;
    const nextRow = sheet.getLastRow() + nextRowCount;
    const startColumnCount = 1;
    const rowCount = 1;
    const columnCount = sheet.getLastColumn();

    return range = 
      this.sheet.getRange(nextRow, startColumnCount, rowCount, columnCount);
  }
}
