let dragable=document.getElementById("color");
let baseX=0,baseY=0;
dragable.addEventListener("mousedown",e=>{
	let startX=e.clientX,startY=e.clientY;
	let up = (e)=>{
		baseX+=e.clientX-startX;
		baseY+=e.clientY-startY;
		document.removeEventListener("mousemove",move);
		document.removeEventListener("mouseup",up);
	}
	let move = (e)=>{
		let range = getNearest(e.clientX,e.clientY);
		range.insertNode(dragable);
		//console.log(e,dragable);
		//dragable.style.transform=`translate(${baseX+e.clientX-startX}px,${baseY+e.clientY-startY}px)`;
	}
	document.addEventListener("mousemove",move);
	document.addEventListener("mouseup",up);
});
let ranges=[];
let container = document.getElementById("container");
for(let i =0;i<container.childNodes[0].textContent.length;i++){
	let range = document.createRange();
	range.setStart(container.childNodes[0],i);
	range.setEnd(container.childNodes[0],i);
	//console.log(range.getBoundingClientRect());
	ranges.push(range);
}
function getNearest(x,y){
	let min = Infinity;
	let nearest = null;
	for(let range of ranges){
		let rect = range.getBoundingClientRect();
		let distance= (rect.x-x)**2 + (rect.y-y)**2;
		if(distance < min ){
			nearest = range;
			min = distance;
		}
		return nearest;
	}
}
document.addEventListener("selectstart",e=>{e.preventDefault();})