let attendanceController = null;
let attendanceSpreadsheet = null;
let idPathQuery = null;
let user = null;
let currentDatetime = null;

function doGet(e) {
  try {
    new Container(e);
  } catch(error) {
    return ContentService.createTextOutput(error);
  }

  attendanceController.index();

  return ContentService.createTextOutput("出勤が完了しました");
}
