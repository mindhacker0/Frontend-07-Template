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
async function findPath(map,start,end){//Breadth-first search
    let queue=new Sorted([start],(a,b)=>distance(a)-distance(b));
	let table=Object.create(map);
	function distance(point){
		return (point[0]-end[0])**2+(point[1]-end[1])**2;
	}
    async function insert(x,y,pre){
        if(x<0||x>=100||y<0||y>=100) return;//border restrict
        if(table[y*100+x]) return;//wall restrict,also passed restrict
        await sleep(5);
        container.children[y*100+x].style.backgroundColor="lightgreen";
        table[y*100+x]=pre;//sign that we have passed
        queue.give([x,y]);
    }
    while(queue.length){
        let [x,y]=queue.take();
        console.log(x,y);
        if(x===end[0] && y===end[1]){
			let path=[];
			while(x!=start[0]||y!=start[1]){
				path.push(map[y*100+x]);
				[x,y]=table[y*100+x];
				await sleep(30);
				container.children[y*100+x].style.backgroundColor="purple";
			}
			console.log(path);
            return path;
        }
        await insert(x-1,y,[x,y]);//left
        await insert(x,y-1,[x,y]);//top
        await insert(x+1,y,[x,y]);//right
        await insert(x,y+1,[x,y]);//bottom
		
		await insert(x-1,y-1,[x,y]);
        await insert(x+1,y-1,[x,y]);
        await insert(x-1,y+1,[x,y]);
        await insert(x+1,y+1,[x,y]);
    }
    return null;
}
class Sorted{
	constructor(data,compare){
		this.data=data.slice();
		this.compare=compare|| ((a,b)=>a-b);
	}
	take(){
		if(!this.data.length)return;
		let min=this.data[0];
		let minIndex=0;
		for(let i=0;i<this.data.length;i++){
			if(this.compare(this.data[i],min)<0){
			    min=this.data[i];
				minIndex=i;
			}
		}
		this.data[minIndex]=this.data[this.data.length-1];
		this.data.pop();
		return min;
	}
	give(v){
		this.data.push(v);
	}
	get length(){return this.data.length}
}