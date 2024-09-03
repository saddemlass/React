import { useState } from "react";
import NewProject from "./assets/components/newproject";
import NoProjectSelected from "./assets/components/NoProjectSelected";
import ProjectSideBar from "./assets/components/projectsidebar";
import SelectedProject from "./assets/components/Selelcted Project";


function App() {
  const[projectstate,setProjectstate]=useState({
    selectedprojectId:undefined,
    projects:[],
    tasks:[]
  });
  function handleaddtask(text){
    setProjectstate((prevstate)=>{const newtext={text:text,id:Math.random(),idproject:prevstate.selectedprojectId}
    ;return{
      ...prevstate,tasks:[...prevstate.tasks,newtext],
      
    }})   

  }
  function handledeletetask(id){
    setProjectstate((prevstate)=>{ return{  ...prevstate,tasks:prevstate.tasks.filter((task)=>task.id!==id)}
    
    })

  }
   function handleDelete(){
    setProjectstate((prevstate)=>({
      ...prevstate, selectedprojectId:undefined, projects:prevstate.projects.filter((project)=>project.id!==prevstate.selectedprojectId)
    }))
   }
  function handleselectedproject(id){
    setProjectstate((prevstate)=>({
      ...prevstate,selectedprojectId:id
    })
   )
  }
  function handleselectproject(newdata){
    setProjectstate((prevstate)=>{const newproject={...newdata,id:Math.random()};return{
      ...prevstate,projects:[...prevstate.projects,newproject],
      selectedprojectId:undefined,
    }})
  }
  

  function handleaddselectproject(){
    setProjectstate((prevstate)=>({
      ...prevstate,selectedprojectId:null
    }))
  }
  const projectSelected=projectstate.projects.find(project=>project.id===projectstate.selectedprojectId);
  let content=<SelectedProject project={projectSelected} onDelete={handleDelete}
  onAddtask={handleaddtask}
  onDeletetask={handledeletetask}
  tasks={projectstate.tasks} />;
  if(projectstate.selectedprojectId===undefined){content=<NoProjectSelected onStartAddProject={handleaddselectproject}/>}
    else if (projectstate.selectedprojectId===null){content=<NewProject onadd={handleselectproject} />}
   
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleaddselectproject} projects={projectstate.projects} onSelectproject={handleselectedproject}/>
      {content}
      
    </main>
  )
}

export default App;