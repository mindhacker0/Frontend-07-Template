import {createElement,Component} from "./framework";
class Carousel extends Component{
   constructor(params){
      super();
      this.attributes = Object.create(null);
   }
   setAttribute(name,value){
      this.attributes[name] = value;
   }
   render(){
      console.log(this);
      this.root = document.createElement("div");
      this.root.classList.add("carousel");
      let root = this.root;
      for(let record of this.attributes.src){
         let child = document.createElement("div");
         child.style.backgroundImage = `url('${record}')`;
         //child.style.display = "none";
         let image = new Image();
         image.src= record;
         image.onload =function(){
            child.style.width = this.width;
            child.style.height = this.height;
            root.style.width = this.width;
            root.style.height = this.height;
         } 
         this.root.appendChild(child)
      }
      let position = 0;
      this.root.addEventListener("mousedown",event=>{
         console.log("mousedown");
         let children = this.root.children;
         let startX=event.clientX,startY=event.clientY;
         let move = event =>{
            let x = event.clientX -startX,y = event.clientY-startY;
            let current = position - ((x-x%230)/230);
            for(let offset of [-1,0,1]){
               let pos = current + offset;
               pos = (pos+children.length)%children.length;
               children[pos].style.transition = "none";
               children[pos].style.transform = `translateX(calc(${(-pos+offset)* 100}% + ${x%230}px))`;
            }
            console.log(x,y);
         };
         let up = event =>{
            console.log("mouseup");
            let x = event.clientX - startX;
            position-=Math.round(x / 230);
            for(let offset of [0,-Math.sign(Math.round(x / 230) - x + 115*Math.sign(x))]){
               let pos = position + offset;
               pos = (pos+children.length)%children.length;
               children[pos].style.transition = "";
               children[pos].style.transform = `translateX(${(-pos+offset)* 100}%)`;
            }
            document.removeEventListener("mousemove",move);
            document.removeEventListener("mouseup",up);
         }
         document.addEventListener("mousemove",move);
         document.addEventListener("mouseup",up);
      });
      // let currentIndex = 0;
      // setInterval(()=>{
      //    let children = this.root.children;
      //    let nextIndex = (currentIndex+1) % children.length;
      //    console.log(nextIndex);
      //    let current = children[currentIndex];
      //    let next = children[nextIndex];
      //    next.style.transition = "none";
      //    next.style.transform =`translateX(${100 - nextIndex*100}%)`;
      //    setTimeout(()=>{
      //       next.style.transition = "";
      //       current.style.transform =`translateX(${-100 - currentIndex * 100}%)`;
      //       next.style.transform =`translateX(${ - nextIndex * 100}%)`;
      //       currentIndex = nextIndex;
      //    },16); 
      // },3000)
      return this.root;
   }
   mountTo(parent){
      parent.appendChild(this.render());
   }
}
// let a = <div id="a">
//       <span>a</span>
//       <span>b</span>
//       <span>c</span>
//    </div>;
let d = ["https://ftp.bmp.ovh/imgs/2021/03/d58d3575f72b19ac.jpg",
        "https://ftp.bmp.ovh/imgs/2021/03/84c96ccba5999096.jpg",
        "https://ftp.bmp.ovh/imgs/2021/03/acd507eab390d50f.jpg"];
let a =<Carousel src={d}/>;
//document.body.appendChild(a);
a.mountTo(document.body);