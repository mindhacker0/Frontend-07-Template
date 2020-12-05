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
			yellow:arr[1],
			green:arr[2]
		}
	}
	lightRed(state){
	   state?this.child.red.classList.add("red-light"):
	   this.child.red.classList.remove("red-light");
	}
	lightYellow(state){
	   state?this.child.yellow.classList.add("yellow-light"):
	   this.child.yellow.classList.remove("yellow-light");
	}
	lightGreen(state){
	   state?this.child.green.classList.add("green-light"):
	   this.child.green.classList.remove("green-light");
	}
	setGray(){
		this.lightRed(false);
		this.lightGreen(false);
		this.lightYellow(false);
		return this;
	}
	static sleep(time){
		return new Promise(function(rs,rj){
			setTimeout(rs,time);
		})
	}
	static clear(){
	    this.wapper.innerHTML("");	
	}
	run(){//use CallBack callback-hell
	    this.lightRed(true);
		setTimeout(()=>{
			this.setGray().lightYellow(true);
			setTimeout(()=>{
			    this.setGray().lightGreen(true);
			    setTimeout(()=>{this.setGray();},5000);
		    },2000);	
		},10000);
	}
}
class runASPromise extends TraffiLight{//use Promise
	constructor(warp){
		super(warp)
	}
	run(){
		this.lightRed(true);
		TraffiLight.sleep(10000).then((res)=>{
			this.setGray().lightYellow(true);
			return TraffiLight.sleep(2000)
		}).then((res)=>{
			this.setGray().lightGreen(true);
			return TraffiLight.sleep(5000)
		}).then((res)=>{
			this.setGray();
		});
		/*new Promise((rs,rj)=>{
			setTimeout(()=>{
				this.setGray().lightYellow(true);
				rs()
			},10000)
		}).then((res,rj)=>{
			return new Promise((rs,rj)=>{
				setTimeout(()=>{
					this.setGray().lightGreen(true);
					rs()
				},2000)
			});
		}).then((res,rj)=>{
			setTimeout(()=>{this.setGray();},5000);
		})*/
	}
}
class runAsAsync extends TraffiLight{//use async/await
    constructor(warp){
		super(warp)
	}
	async sequence(){
		this.lightRed(true);
		await TraffiLight.sleep(10000);
		this.setGray().lightYellow(true);
		await TraffiLight.sleep(2000);
		this.setGray().lightGreen(true);
		await TraffiLight.sleep(5000);
		this.setGray();
		return "done";
	}
	run(){
		this.sequence().then(()=>{this.run()});//infinite loop
	}
}
class runAsAsyncSymbol extends TraffiLight{//use generator
	constructor(warp){
		super(warp)
	}
	Iterator(fnc){
		let {value,done}=fnc.next();
		if(done) return;
		if(value instanceof Promise) 
		value.then(()=>{this.Iterator(fnc);});
	}
	*asyncIterator(){
		this.lightRed(true);
		yield TraffiLight.sleep(10000);
		this.setGray().lightYellow(true);
		yield TraffiLight.sleep(2000);
		this.setGray().lightGreen(true);
		yield TraffiLight.sleep(5000);
		this.setGray();
	}
	async run(){
		for await (const fnc of this.asyncIterator()){}
	}
}
new runAsAsyncSymbol("cnt").run();