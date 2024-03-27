let statusTF=false
// boleana //
let object=[]
// array é uma variavel com muitas coisas dentro//

function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
}
function draw(){
    image(video, 0,0,400,400)
    if(statusTF){
        detector.detect(video,gotResult)
       for(var i=0;i<object.length;i++){
        nome=object[i].label
        presison=object[i].confidence
        presison=Math.floor(presison*100)
        x=object[i].x
        y=object[i].y
        width=object[i].width
       height=object[i].height
       stroke("red")
       noFill()
       text(nome+" "+presison+"%",x,y)
       rect(x,y,width,height)
    } 
    }
}
function start(){
    detector=ml5.objectDetector("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log("carregar modelo")
    statusTF=true
}
function gotResult(error,results){
    if(error){
        console.error(error)
    
    }
    else{
        console.log(results)
        object=results
    }
}