
function cursor(){
    let cur = document.getElementsByClassName("cursor")
    cur = cur[0]

    addEventListener('mouseout',()=>cur.style.display= 'none')
    addEventListener('mouseenter',()=>cur.style.display= 'block')
    
    let a = document.getElementsByClassName('h')
    for (const k of a) {
       
        k.addEventListener('mouseenter',(e)=>{
           cur.style.width='20px'
        })
        k.addEventListener('mouseout',(e)=>{
           cur.style.width='10px'
        })
    }
    addEventListener('mousemove',(e)=>{
        let x = e.pageX-1
        let y = e.pageY-1
        

         cur.style.display='block'
         cur.style.left = x+'px'
         cur.style.top = y + 'px'

         
         
        })
}
    