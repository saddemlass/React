import Button from "./button";

export default function ProjectSideBar({ onStartAddProject,projects,onSelectproject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project)=>(
           <li key={project.id}>
           <button onClick={()=>onSelectproject(project.id)}>
             {project.title}
           </button>
 
         </li>
        )
       )}

       
      
      </ul>
    </aside>
  );
}
