import { CORE_CONCEPTS } from "../../data";
import COreCOncepts from "./CoreConcepts";
export default function Coreconcept(){
    return (
        <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=> <COreCOncepts  key={conceptItem.title} {...conceptItem}/>)};
        
        </ul>
        </section>

    );
}