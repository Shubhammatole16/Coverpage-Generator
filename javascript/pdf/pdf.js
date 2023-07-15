const element = document.querySelector('.canvas')
var semCount = 3;

let coverpageTitle = "";

window.jsPDF = window.jspdf.jsPDF




function savePdf() {
  var bigSize = 24
  var textSize = 14
  var doc = new jsPDF({
    orientation: "potrait",
    format: "a4",
  })



  //--------------COLLEGE NAME PART-----------------
  doc.setFontSize(16)
  doc.setFont("times", "bolditalic")
  doc.text("Aldel Education  Trusts", 105, 20, null, null, "center")
  doc.setFont("times", "bold")
  doc.setFontSize(bigSize)
  doc.text("ST. JOHN COLLEGE OF \n ENGINEERING AND MANAGEMENT", 105, 30, null, null, "center")
  doc.setFontSize(14)
  doc.text("Vevoor, Manor Road, Palghar(East)", 105, 49, null, null, "center")
  doc.setFontSize(16)
  doc.setFont("times", "normal")
  doc.text("(A Christian Religions Minority Institution)", 105, 58, null, null, "center")
  doc.setFontSize(18)
  doc.setFont("times", "bold")
  doc.text("[NAAC Accredited with Grade 'A']", 105, 68, null, null, "center")
  doc.setFontSize(textSize)
  //-------------COLLEGE LOGO PART------------------
  doc.addImage("images/college-logo.png", "PNG", 80, 70, 60, 60, "center")
  //-------------Subject Title Part----------------
  doc.setFont("times", "normal")
  doc.setFontSize(22)
  doc.text("( Department of Computer Science )", 105, 133, null, null, "center")

  doc.setFont("times", "bold")
  doc.setFontSize(22)
  doc.text(subforpdf, 105, 155, null, null, "center");
  //-----------reportno title part ------------------

  doc.setFont("times", "bold")
  doc.setFontSize(22)
  doc.text(reportnoforpdf.toUpperCase(), 105, 167, null, null, "center")
  //-----------report main title part ------------------
  doc.setFont("times", "bold")
  doc.setFontSize(22)
  doc.text(titleforpdf.toUpperCase(), 105, 178, null, null, "center")
  //-----------Submitted by part ------------------
  doc.setFont("times", "bold")
  doc.setFontSize(20)
  doc.text('Submitted By:', 105, 202, null, null, "center")
  //-----------Name part--------------- 
  doc.setFont("times", "normal")
  doc.setFontSize(18)
  doc.text(nameforpdf, 105, 211, null, null, "center")
  //-----------Roll NO part--------------- 
  doc.setFont("times", "bold")
  doc.setFontSize(20)
  doc.text('Seat No:', 105, 225, null, null, "center")
  doc.setFont("times", "normal")
  doc.setFontSize(18)
  doc.text(rollnoforpdf, 105, 234, null, null, "center")
  //-----------Signature part--------------- 
  doc.setFont("times", "bold")
  doc.setFontSize(16)
  doc.text("(FACULTY SIGNATURE)", 173, 285, null, null, "center")
  doc.text("(HOD SIGNATURE)", 35, 285, null, null, "center")
  doc.save(nameforpdf + " - ( " + subforpdf + " ).pdf")
}
