function setProps() {
  const newProps = {
    attendanceSpreadsheetId: 'your-spreadsheet-id',
  }
  
  PropertiesService
    .getScriptProperties()
    .setProperties(newProps)
}
