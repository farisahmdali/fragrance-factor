
function cursor(){
    let cur = document.getElementsByClassName("cursor")
    cur = cur[0]

    addEventListener('mouseout',()=>cur.style.display= 'none')
    addEventListener('mouseenter',()=>cur.style.display= 'block')
    
    addEventListener('mousemove',(e)=>{
        let x = e.pageX
        let y = e.pageY
         cur.style.display='block'
        //  console.log(x,y);
         cur.style.left = x+'px'
         cur.style.top = y + 'px'
        
        let a = window.getComputedStyle(e.target)["cursor"]
        if(a==='pointer'){
            cur.style.display='none'
        }
    })
}