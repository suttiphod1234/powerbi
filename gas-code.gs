/**
 * Google Apps Script for handling Quiz Results
 * 1. Open Google Sheets (sheets.new)
 * 2. Extensions > Apps Script
 * 3. Paste this code
 * 4. Deploy > New Deployment > Web App
 * 5. Execute as: Me
 * 6. Who has access: Anyone
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 1. Record in Google Sheets
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.score,
      data.total
    ]);
    
    // 2. Send Email to User
    var subject = "ผลการทดสอบ: Data Model & Advanced DAX - " + data.name;
    var body = "สวัสดีคุณ " + data.name + ",\n\n" +
               "คุณทำคะแนนได้: " + data.score + " จาก " + data.total + " คะแนน\n\n" +
               "ขอบคุณที่ร่วมสนุกกับเรา!";
    
    MailApp.sendEmail(data.email, subject, body);

    // 3. Send Notification to Admin (New)
    var adminEmail = "3designs.th@gmail.com";
    var adminSubject = "[New Score] Quiz Data Model & Advanced DAX - " + data.name;
    var adminBody = "มีผู้ทำแบบทดสอบใหม่:\n\n" +
                    "ชื่อ: " + data.name + "\n" +
                    "อีเมล: " + data.email + "\n" +
                    "คะแนน: " + data.score + " / " + data.total + "\n" +
                    "เวลา: " + data.timestamp;
                    
    MailApp.sendEmail(adminEmail, adminSubject, adminBody);

    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err).setMimeType(ContentService.MimeType.TEXT);
  }
}
