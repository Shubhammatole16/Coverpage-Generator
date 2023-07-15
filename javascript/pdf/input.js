const nametake  = document.querySelector('.takename input')
const rolltake  = document.querySelector('.takeroll input')
const subjecttake  = document.querySelector('.takesubject')
const downloader = document.querySelector('.download')
const titletake = document.querySelector('.taketitle input')
const reporttake = document.querySelector('.takereport input')


const outputname = document.querySelector('.submitted .name')
const outputtitle = document.querySelector('.titles .title')
const subjecttitle = document.querySelector('.titles .subjecttitle')
const reporttitle = document.querySelector('.titles .reportno')
const rolltitle = document.querySelector('.submitted .subrollno')

var subforpdf;
var reportnoforpdf;
var titleforpdf;
var nameforpdf;
var rollnoforpdf;



nametake.addEventListener('input', ()=>{
    outputname.innerText  = nametake.value
    nameforpdf = nametake.value
})
titletake.addEventListener('input',()=>{
    outputtitle.innerText = titletake.value
    titleforpdf = titletake.value
})
subjecttake.addEventListener('change',()=>{
    subjecttitle.innerText =  subjecttake.value
    subforpdf = subjecttake.value
})
reporttake.addEventListener('input',()=>{
    reporttitle.innerText = reporttake.value   
    reportnoforpdf=reporttake.value
})
rolltake.addEventListener('input',()=>{
    rolltitle.innerText = rolltake.value 
    rollnoforpdf=rolltake.value 
})
downloader.addEventListener('click',()=>{
    savePdf()
})
