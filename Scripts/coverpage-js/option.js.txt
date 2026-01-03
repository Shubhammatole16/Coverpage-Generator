const nameSelector = document.querySelector('.name-selector input')
const rollNoSelector = document.querySelector('.roll-no-selector input')
const subjectSelector = document.querySelector('.subject-selector')
const downloader = document.querySelector('.download')
const titleSelector = document.querySelector('.title-selector input')
const reportNoSelector = document.querySelector('.report-no-selector input')
const searchtxt = document.querySelector('.text-input input')

const outputName = document.querySelector('.submitted .name')
const outputTitle = document.querySelector('.titles .title')
const subjectTitle = document.querySelector('.titles .subject-title')
const reportNoTitle = document.querySelector('.titles .report-no')
const rollNoTitle = document.querySelector('.submitted .sub-roll-no')
var subforpdf;
var reportnoforpdf;
var titleforpdf;
var nameforpdf;
var rollnoforpdf;
var searchtxtforscroll;


nameSelector.addEventListener('input',()=>{
    outputName.innerText = nameSelector.value 
    nameforpdf=nameSelector.value 
})
titleSelector.addEventListener('input',()=>{
    outputTitle.innerText = titleSelector.value
    titleforpdf=titleSelector.value
})
subjectSelector.addEventListener('change',()=>{
    subjectTitle.innerText = subjectSelector.value
    subforpdf=subjectSelector.value
})
reportNoSelector.addEventListener('input',()=>{
    reportNoTitle.innerText = reportNoSelector.value   
    reportnoforpdf=reportNoSelector.value
})
rollNoSelector.addEventListener('input',()=>{
    rollNoTitle.innerText = rollNoSelector.value 
    rollnoforpdf=rollNoSelector.value 
})
searchtxt.addEventListener('input',()=>{
    searchtxtforscroll=searchtxt.value.toLowerCase().replace(/\s/g, '');
})

downloader.addEventListener('click',()=>{
    savePdf()
})