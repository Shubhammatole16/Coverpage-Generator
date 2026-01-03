function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
function searchandscroll(){
if (searchtxtforscroll=='coverpage'){
  scrollToSection('cover-page')
}
}