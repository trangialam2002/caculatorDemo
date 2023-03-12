var screen=document.querySelector(".screen");
var arr=document.querySelectorAll(".list_item .item");
var str=new String()
var ans=0
arr.forEach(function(btn){
    btn.onclick=function(e){
        if(this.innerText=="AC"){
            screen.innerText=0
            str=""
        }
        else if(this.innerText=="DEL"){
            var text=screen.innerText
            if(text.length>0){
                screen.innerText=text.slice(0,text.length-1)
                str=screen.innerText
            }else{
                screen.innerText=0
            }
        }
        else if(this.innerText=="="){
            screen.innerText=eval(str)
            ans=eval(str)
            str=""
            
        }
        else if(this.innerText=="ANS"){
            str=ans
            screen.innerText=str
        }
        else{
            str+=this.innerText
            screen.innerText=str
        }
    
    }
});