const BOARD_CONFIG={
	width:15,
	height:15,
	//cell_width:39,
	//cell_height:39, 
	line_width:1,
}
class Wuziqi{
	constructor(root){
		let canvas=document.createElement("canvas");
		canvas.setAttribute("width",650);
		canvas.setAttribute("height",650);
		this.canvas=canvas;
		this.context=canvas.getContext('2d');
		this.gridArr=[];//record the grid exect point in the board;@item {(x,y):position,type}
        root.appendChild(canvas);
		this.init();
	}
	init(){
		this.drawBoard();
		this.addCheeseMan(10,10,0)
		this.addCheeseMan(90,50,1)
		this.canvas.addEventListener("click",(e)=>{
			
		});
	}
	drawBoard(){//draw the board
		const {context}=this;
		const {width,height,line_width}=BOARD_CONFIG;
		context.beginPath();
		context.lineWidth=line_width;
		for(let i=0;i<height;i++){//horizontal lines
			context.moveTo(20,i*41+20);
            context.lineTo(595,i*41+20);
			context.font="18px serif";
			context.fillText(height-i,610,i*41+25);//draw hint 
		}
		for(let i=0;i<width;i++){//vertical lines
			context.moveTo(i*41+20,20);
            context.lineTo(i*41+20,595);
			context.font="18px serif";
			context.fillText(String.fromCharCode(97+i),i*41+15,620);
		}
		context.stroke();
	}
	addCheeseMan(x,y,type){//(x,y)position,{type}:0.white one;1.black one
	    const {context}=this;
		context.beginPath();
		let radgrad = context.createRadialGradient(x+5,y+5,5,x+5,y+5,30);
		radgrad.addColorStop(0,'#fff');
		type===1 && radgrad.addColorStop(0.4,'#000');
		radgrad.addColorStop(1,'#000');
		context.fillStyle = radgrad;
		context.arc(x+10,y+10,20,0,2*Math.PI,true);
		context.fill();
	}
}
new Wuziqi(document.getElementById("board"));