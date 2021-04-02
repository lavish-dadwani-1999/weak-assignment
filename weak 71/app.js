var inputlanguage =document.querySelector(".input-language")



// var table = document.getElementsByTagName("table")
// console.log(table)
// console.log(table.textContent)

// console.log(table.textContent)
console.log("conected")
var tr = [...document.querySelector("table").querySelectorAll("tr")]

console.log(tr)

for ( td of tr){
   var lan= td.querySelectorAll("td")[3]
   var language = lan
   console.log(language)
}
// for(i=1;i<=9;i=i+1){
//     var lan= tr.querySelector("td")[3]
//     console.log(lan)
// }

function serchlanguage(event){
    
    event.preventDefault()
    var language = event.target.language.value
    for (i =1;i<=9;i=i+1){
        var tablelan = document.getElementById("table-lan").rows[i].cells[3].innerText
        if(language!=tablelan){
            console.log(tablelan.parentElement)
        }

     }
     
    
}

inputlanguage.addEventListener("submit",serchlanguage)