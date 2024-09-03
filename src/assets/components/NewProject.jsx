import { useRef } from "react";
import Input from "./input";
import Modal from "./modal";

export default function NewProject({ onadd }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const modal = useRef();

  function handlesave() {
    const titleentered = title.current.value;
    const descriptionentered = description.current.value;
    const duedateentered = duedate.current.value; 
    if(titleentered.trim() === '' || descriptionentered.trim() === '' || duedateentered.trim() === '') {
      modal.current.open();
      return;
    }
    
    onadd({
      title: titleentered,
      description: descriptionentered,
      duedate: duedateentered,
    });
    
    title.current.value = "";
    description.current.value = "";
    duedate.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} buttoncaption="Okay">
        <h2>Error</h2>
        <p>You haven't entered a valid value.</p>
        <p>Please insert a valid value.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">Cancel</button>
          </li>
          <li>
            <button 
              onClick={handlesave} 
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
