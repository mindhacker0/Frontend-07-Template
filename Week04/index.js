//字典树
let $=Symbol("$");
class Trie{
	constructor(){
		this.root=Object.create(null);
	}
	insert(word){
		let node = this.root;
		for(let c of word){
			if(!node[c]) node[c]=Object.create(null);
             node=node[c];
		}
		if(!($ in node)) node[$]=0;
		node[$]++;
	}
	most(){
		let max=0;
		let maxWord=null;
		let visit = (node,word)=>{
			if(node[$] && node[$]>max){max=node[$];maxWord=word;}
			for(let p in node){
				visit(node[p],word+p)
			}
		}
		visit(this.root,"");
		console.log(max,maxWord);
	}
}
function randomWord(length){
	var s = "";
	for(let i=0;i<length;i++){
		s+=String.fromCharCode(Math.random()*26+97);
	}
	return s;
}
let trie=new Trie();
for(let i=0;i<100000;i++){
	trie.insert(randomWord(4));
}
trie.most();
//console.log(trie);
function kmp(source,pattern){
	console.log(pattern);
	let next=new Array(pattern.length).fill(0);
	{
		let i=1;j=0;
		while(i<pattern.length){
			if(pattern[i]=== pattern[j]){
				++j;++i;
				next[i]=j;
			}else{
				if(j>0){
				   j=next[j];
			    }else{
					++i;
				}
			}
			console.log(j,i,next);
		}
		console.log(next);
	}
	{
		let i=0,j=0;
		while(i<source.length){
			if(pattern[j]=== source[i]){
				++i;++j;
			}else{
				if(j>0){
					j=next[j];	
				}else{
					++i;
				}
			}
			if(j===pattern.length){
			    return i-j;
			}
		}
		return -1;
	}
}
console.log(kmp("abababcebced","abcababx"));
function find(source,pattern){
	let starCount=0;
	for(let i=0;i<pattern.length;i++){
		if(pattern[i] === "*"){
			starCount++;
		}
	}
	if(starCount===0){
		for(let i=0;i<pattern.length;i++){
			if(pattern[i]!== source[i] && pattern[i]!== "?")
				return false;
		}
		return;
	}
	let i=0;
	let lastIndex=0;
	
	for(i=0;pattern[i]!=="*";i++){
		if(pattern[i]!== source[i] && pattern[i]!== "?")
			return false;
	}
	lastIndex = i;
	for(let p=0;p<starCount-1;p++){
		i++;
		let subPattern="";
		while(pattern[i]!== "*"){
			subPattern+=pattern[i];
			i++;
		}
		
		let reg=new RegExp(subPattern.replace(/\?/g,"[\\s\\S]"),"g");
		reg.lastIndex = lastIndex;
		console.log(reg.exec(source));
	    if(!reg.exec(source)) return false;
		lastIndex=reg.lastIndex;
	}
	for(let j=0;j<=source.length-lastIndex && pattern[pattern.length-j]!=="*";j++){
		if(pattern[pattern.length-j]!==source[source.length-j] && pattern[pattern.length-j]!== "?")
			return false;
	}
	return true;
}
find("abcabcabxaac","a*b?*b?x*c");
