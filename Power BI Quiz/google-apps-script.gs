/**
 * Google Apps Script for Power BI Quiz backend
 * 1. Create a Google Sheet
 * 2. Go to Extensions > App Script
 * 3. Paste this code and Replace the sheetId
 * 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() == 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Score', 'Total', 'Status']);
    }
    
    // Append data
    sheet.appendRow([
      data.timestamp,
      data.fullname,
      data.email,
      data.score,
      data.total,
      data.status
    ]);
    
    // Send Email to User
    if (data.status === 'Pass') {
      sendEmail(data);
    }

    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': err }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function sendEmail(data) {
  var subject = "ประกาศผลการทดสอบหลักสูตร Power BI - " + data.fullname;
  var body = "สวัสดีคุณ " + data.fullname + ",\n\n" +
             "คุณได้ทำแบบทดสอบหลักสูตร Power BI เรียบร้อยแล้ว\n" +
             "คะแนนที่คุณได้รับ: " + data.score + " / " + data.total + "\n" +
             "สถานะ: " + (data.status === 'Pass' ? 'ผ่านเกณฑ์ (Passed)' : 'ไม่ผ่านเกณฑ์ (Failed)') + "\n\n" +
             "ขอแสดงความนับถือ,\nฝ่ายพัฒนาหลักสูตร Power BI";
             
  MailApp.sendEmail(data.email, subject, body);
}
