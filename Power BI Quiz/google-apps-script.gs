function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = JSON.parse(e.postData.contents);
    
    if (data.type === 'survey') {
      return handleSurvey(data);
    } else {
      return handleQuiz(data);
    }
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function handleQuiz(data) {
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

  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'type': 'quiz' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleSurvey(data) {
  // Spreadsheet ID: 1cJeaGJp9roRo3OdLuORzb_nOZlHtWt3hC7i3SDej3Pk
  var ss = SpreadsheetApp.openById('1cJeaGJp9roRo3OdLuORzb_nOZlHtWt3hC7i3SDej3Pk');
  var sheet = ss.getSheetByName('ซีต(แบบสำรวจ)') || ss.getSheets()[0];
  
  // Add headers if sheet is empty
  if (sheet.getLastRow() == 0) {
    sheet.appendRow([
      'Timestamp', 'Full Name', 'Email', 'Dates', 'Age', 'Gender', 'Department',
      'Q1_1', 'Q1_2', 'Q1_3', 'Q1_4',
      'Q2_1', 'Q2_2', 'Q2_3',
      'Q3_1', 'Q3_2', 'Q3_3',
      'Positive', 'Improve', 'Other'
    ]);
  }
  
  // Append data
  sheet.appendRow([
    data.timestamp,
    data.fullname,
    data.email,
    data.training_dates,
    data.age,
    data.gender,
    data.department,
    data.q1_1, data.q1_2, data.q1_3, data.q1_4,
    data.q2_1, data.q2_2, data.q2_3,
    data.q3_1, data.q3_2, data.q3_3,
    data.feedback_positive,
    data.feedback_improve,
    data.feedback_other
  ]);

  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'type': 'survey' }))
    .setMimeType(ContentService.MimeType.JSON);
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
