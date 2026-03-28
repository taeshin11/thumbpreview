// Code.gs — Deploy as Web App
// Handles both data collection (POST) and visitor counting (GET)

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),                    // Timestamp
    data.thumbnailFilename || '',  // Filename
    data.videoTitle || '',         // Custom title
    data.channelName || '',        // Custom channel name
    data.userAgent || '',          // User-Agent
    data.screenResolution || '',   // Screen resolution
    data.referrer || ''            // Referrer URL
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  // Visitor counter endpoint
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('visitors');
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('visitors');
    sheet.getRange('A1').setValue('total');
    sheet.getRange('B1').setValue(0);
    sheet.getRange('A2').setValue('date');
    sheet.getRange('B2').setValue('');
    sheet.getRange('A3').setValue('today_count');
    sheet.getRange('B3').setValue(0);
  }

  var today = new Date().toISOString().split('T')[0];
  var lastDate = sheet.getRange('B2').getValue();
  var todayCount = sheet.getRange('B3').getValue();
  var totalCount = sheet.getRange('B1').getValue();

  if (lastDate !== today) {
    sheet.getRange('B2').setValue(today);
    sheet.getRange('B3').setValue(1);
    todayCount = 1;
  } else {
    todayCount++;
    sheet.getRange('B3').setValue(todayCount);
  }

  totalCount++;
  sheet.getRange('B1').setValue(totalCount);

  return ContentService
    .createTextOutput(JSON.stringify({ today: todayCount, total: totalCount }))
    .setMimeType(ContentService.MimeType.JSON);
}
