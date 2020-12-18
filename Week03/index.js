var regexp=/([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;
var dictoinary=["number","whitespace","LineTerminator","*","/","+","-"];
function* tokenize(source){
    var result = null;
    var lastIndex = 0;
    while(true){
        //console.log(regexp.lastIndex,lastIndex);
        lastIndex=regexp.lastIndex;
        result=regexp.exec(source);
        //console.log(regexp.lastIndex,lastIndex,result);
        if(!result) break;
        if(regexp.lastIndex-lastIndex>result[0].length) break;
        let token={
            type:null,
            value:null
        }
        for(var i=1;i<=dictoinary.length;i++){
            if(result[i]) token.type=dictoinary[i-1];
        }
       token.value=result[0]
       yield token;
    }
    yield {type:"EOF"}
}
for(let token of tokenize("1024 + 10*25")){
    console.log(token);
}