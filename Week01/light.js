class TraffiLight{
	constructor(warp){
		this.wapper=document.getElementById(warp);
		this.child=this.init();
	}
	init(){
		let arr=[];
		for(let i=0;i<3;i++){
			let elem=document.createElement("div");
			elem.classList.add("light-item");
			arr.push(elem);
			this.wapper.append(elem);
		}
		return {
			red:arr[0],
			green:arr[1],
			yellow:arr[2]
		}
	}
	lightRed(){
	   this.child[0].classList.add("red-light");
	}
	lightGreen(){
	   this.child[1].classList.add("green-light");
	}
	lightYellow(){
	   this.child[2].classList.add("yellow-light");
	}
	sleep(time){
		return new Promise(function(rs,rj){
			setTimeout(rs,time);
		})
	}
	static clear(){
	    this.wapper.innerHTML("");	
	}
	run(){
		
	}
}
console.log(new TraffiLight("cnt"));