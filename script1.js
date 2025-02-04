document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("please enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML+=`<div class="task">
        <span id="taskname">
        ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete"><i class="fa-regular fa-trash-can"></i>
        </button>
        </div>`;
    
        var current_task=document.querySelectorAll(".delete");
        for(i=0;i<current_task.length;i++){
          current_task[i].onclick=function A(){
            this.parentNode.remove();
          }
        }
        var tasks=document.querySelectorAll(".task");
        for(i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
              this.classList.toggle('complete');
            }
          }
        
          document.querySelector('#newtask input').value="";
        }
      }  
  