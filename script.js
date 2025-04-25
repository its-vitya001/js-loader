function percent (percent, totalValue) {
   return ((percent/ 100) * totalValue)
}

let canvas = document.querySelector("canvas")
let cnvSize = percent(40, (window.innerHeight+window.innerWidth)/2)
canvas.width = cnvSize;
canvas.height = cnvSize;
let ctx = canvas.getContext("2d");

ctx.beginPath()
ctx.lineWidth = cnvSize/8;
ctx.arc(
   canvas.width/2, 
   canvas.height/2, 
   percent(50, cnvSize)-(ctx.lineWidth/2)-1, 
   0, 2*Math.PI
)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = cnvSize/8;
ctx.strokeStyle = "rgb(255, 0, 0)"
ctx.arc(
   canvas.width/2, 
   canvas.height/2, 
   percent(50, cnvSize)-(ctx.lineWidth/2)-1, 
   2, Math.PI
)
ctx.stroke()
ctx.closePath()