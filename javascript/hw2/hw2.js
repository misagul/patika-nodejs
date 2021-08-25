if (localStorage.getItem("tasks")) {
    [...JSON.parse(localStorage.getItem("tasks"))].forEach(e => {
        let li = document.createElement("li")
        let textNode = document.createTextNode(e)
        li.appendChild(textNode)
        document.getElementById("list").appendChild(li)
    })
}

let nodeList = document.getElementsByTagName("LI")
for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement("span")
    let text = document.createTextNode("×")
    span.className = "close"
    span.appendChild(text)
    nodeList[i].appendChild(span)
    
    span.onclick = function(e){

        let JSONList= [...JSON.parse(localStorage.getItem("tasks"))]
        ulDOM.removeChild(this.parentElement)
        let txt = this.parentElement.innerText
        txt = txt.substring(0,txt.length-1)
        ind = JSONList.indexOf(txt)
        JSONList.splice(ind,1)
      
        localStorage.setItem("tasks",JSON.stringify(JSONList))
    }
}



const ulDOM = document.querySelector('#list');
const liveToast1= document.querySelector('#liveToast1');
const liveToast2= document.querySelector('#liveToast2');


function newElement(){
    let inputValue = document.querySelector('#task').value;
    inputValue = inputValue.replace(/  +/g, ' ');


    if(inputValue === ' ' || inputValue.length == 0){

        liveToast2.classList.remove('hide')
        liveToast2.classList.add('show')


    }else{
        let li = document.createElement('li')
        li.append(inputValue)

        localStorage.setItem("tasks",
            JSON.stringify(
                [...(
                    JSON.parse(localStorage.getItem("tasks")) || []
                ), inputValue]))

        var span = document.createElement('span')
        span.classList.add('close')
        span.innerText = '×'
        li.append(span)
        ulDOM.append(li)
        inputValue = ''
        span.onclick = function(e){
            ulDOM.removeChild(this.parentElement)
            
        }
        li.onclick = function(e){
            if (li.classList.contains('checked')){
                li.classList.remove('checked')
            }else{
                li.classList.add('checked')
            }
        }
    }
    document.querySelector('#task').value = ''
}
