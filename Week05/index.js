let callbacks=new Map();
let reactivties=new Map();
let usedReactivties=[];
let object={
	r:1,
	g:1,
	b:1
}
let po = reactive(object);
effect(()=>{
	document.getElementById("r").value=po.r;
});
effect(()=>{
	document.getElementById("g").value=po.g;
});
effect(()=>{
	document.getElementById("b").value=po.b;
});
effect(()=>{
	document.getElementById("color").style.backgroundColor=`rgb(${po.r},${po.g},${po.b})`;
});
document.getElementById("r").addEventListener("input",e=>{
	po.r=e.target.value;
});
document.getElementById("g").addEventListener("input",e=>{
	po.g=e.target.value;
});
document.getElementById("b").addEventListener("input",e=>{
	po.b=e.target.value;
});
function effect(callback){
	//callbacks.push(callback);
	usedReactivties=[];
	callback();
	console.log(usedReactivties);
	for(let reactivity of usedReactivties){
		if(!callbacks.has(reactivity[0])){
			callbacks.set(reactivity[0],new Map());
		}
		if(!callbacks.get(reactivity[0]).has(reactivity[1])){
			callbacks.get(reactivity[0]).set(reactivity[1],[]);
		}
		callbacks.get(reactivity[0]).get(reactivity[1]).push(callback);
	}
}
function reactive(object){
	if(reactivties.has(object))
	return reactivties.get(object);
	let proxy = new Proxy(object,{
	  set(obj,prop,val){
		  obj[prop]=val;
		  if(callbacks.get(obj))
			if(callbacks.get(obj).get(prop)) 
			for(let callback of callbacks.get(obj).get(prop)){
			  callback();
			}
		  //console.log(obj,prop,val);
		  return obj[prop];
	  },
	  get(obj,prop){
		  usedReactivties.push([obj,prop])
		  console.log("get",obj,prop);
		  if(typeof obj[prop] === "object")
			return reactive(obj[prop]);
		  return obj[prop];
	  }
	});
	reactivties.set(object,proxy);
	return proxy;
}