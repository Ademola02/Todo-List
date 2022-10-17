let inp = document.getElementById('inp');
let display = document.getElementById('display');
let task = [];

let ogg=JSON.parse(localStorage.getItem('todos'))
task=ogg || []

desc()
function push() {
  
  let obj ={inp:inp.value,done:false}
    task.push(obj)
   
    desc()
}

//  function desc localStorage.setItem('todos',JSON.stringify(task) )(){
    
//      let count= 1
//      let time=setInterval(function(){
//          log(count)
//          if (count==10) {
//            clearInterval(time)  
//          }
//         count++
//      }
//  ,1000)
    
    
//    setInterval(function desc(){
//    count= display.innerHTML
//         if (count==obj){ 
//         display.innerHTML +=`<tr>
//                               <td>${index + 1}</td>
//                               <td>${obj.inp}</td>
//                               <td><i class="${obj.done? 'fa fa-check': ''}" id="done${index}"></i></td>
//                               <td><button class="btn text-white bg-warning" onclick="done(${index})">${obj.done?'UNDO':'DONE'}</button></td>
//                               <td><button class="btn text-white bg-danger" onclick="del(${index})">delete</button></td> 
//                               </tr>`
//                             }                    
// },1000)}
// localStorage.clear()
function desc(){
    display.innerHTML = '';
    task.forEach(function(obj,index) {
        display.innerHTML +=`<tr>
                              <td>${index + 1}</td>
                              <td>${obj.inp}</td>
                              <td><i class="${obj.done? 'fa fa-check': ''}" id="done${index}"></i></td>
                              <td><button class="btn text-white bg-success" onclick="done(${index})">${obj.done?'UNDO':'DONE'}</button></td>
                              <td><button class="btn text-white bg-danger" onclick="del(${index})">delete</button></td> 
                              </tr>`                       
 });

}

let btn=document.querySelectorAll('button');
  function done(index) {   
     if (task[index].done) 
     {
    //  console.log(task[index].done)
      task[index].done=false;
    // btn[index].style.backgroundColor='green'
      localStorage.setItem('todos',JSON.stringify(task))
     } 
     else{
      task[index].done=true;
      // console.log('fdg')
      btn[index].style.backgroundColor='bg-danger' 
      localStorage.setItem('todos',JSON.stringify(task))
     }
     desc()
  }


 function del(index){
    task.splice(index,1)
    
    localStorage.setItem('todos',JSON.stringify(task))
    desc()
   
  }
  
//   function change(params){
    //    
    //    if (clickCount==1) {
    //   
    //    btn[params].style.color ='black';
    // }