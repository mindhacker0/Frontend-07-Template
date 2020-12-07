let map=localStorage['map']?JSON.stringify(localStorage['map']):new Array(10000).fill(0);
let container=document.getElementById("container");
for(let y=0;y<100;y++){
    for(let x=0;x<100;x++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        if(map[y*100+x]===1)cell.style.backgroundColor="black";
        cell.addEventListener("mousemove",()=>{
            if(mousedown){
                if(clear){
                    cell.style.backgroundColor="";
                    map[y*100+x]=0;
                }else{
                    cell.style.backgroundColor="black";
                    map[y*100+x]=1;
                }
            }
        });
        container.appendChild(cell);
    }
}
let clear=false;
let mousedown=false;
document.addEventListener("mousedown",e=>{
    mousedown=true;
    clear=(e.which===3)
});
document.addEventListener("mouseup",e=>mousedown=false);
document.addEventListener("contextmenu",e=>e.preventDefault());
function sleep(time){
    return new Promise(function(rs,rj){
        setTimeout(rs,time);
    })
}
async function path(map,start,end){//Breadth-first search
    var queue=[start];
    async function insert(x,y){
        if(x<0||x>=100||y<0||y>=100) return;//border restrict
        if(map[y*100+x]) return;//wall restrict,also passed restrict
        await sleep(30);
        container.children[y*100+x].style.backgroundColor="lightgreen";
        map[y*100+x]=2;//sign that we have passed
        queue.push([x,y]);
    }
    while(queue.length){
        let [x,y]=queue.shift();
        console.log(x,y);
        if(x===end[0] && y===end[1]){
            return true;
        }
        await insert(x-1,y);//left
        await insert(x,y-1);//top
        await insert(x+1,y);//right
        await insert(x,y+1);//bottom
    }
    return false;
}
path(map,[3,4],[55,87]);