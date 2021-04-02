import axios from "axios"

import ms from "ms"

console.log(ms)
 console.log(axios)
console.log("conected")

var baseurl = "https://reqres.in"

axios.get(`${baseurl}/api/users`).then(function(rest){
    console.log(rest.data)
}).catch(function(err){
    console.log(err)
})

axios.post(`${baseurl}/api/user`,{
    name:"lavish dadwani",
    job:"student"
}).then(function(res){
    console.log(res.data)
})
.catch(function(err){
    console.log(err)
})



// assig 72

var inputsec = document.querySelector(".input-sec")
var demo = document.querySelector("#demo")
function minisec(event){
    event.preventDefault()
    var sec= event.target.mins.value
    var minesec=ms(sec)
    console.log(minesec)
    demo.innerHTML=minesec
}

inputsec.addEventListener("submit",minisec)