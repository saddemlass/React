import { useState} from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import Sections from "./sections";
import Tabs from "./tabs";

export default function Example(){
    const[SelectedTopic,setSelectedTopic]= useState();
  
    function handleclick(selctedButton){
      
      setSelectedTopic(selctedButton);
      console.log(SelectedTopic);
  }
    return (
        
        <Sections TITLE="examples" id='examples'>
            <Tabs buttonContainer="menu" buttons={<> 
            <TabButton IsSelected={SelectedTopic==='components'} onSelect={()=>handleclick('components')}>Components</TabButton>
            <TabButton IsSelected={SelectedTopic==='JSX'} onSelect={()=>handleclick('JSX')}>JSX</TabButton>
            <TabButton IsSelected={SelectedTopic==='props'} onSelect={()=>handleclick('props')}>Props</TabButton>
            <TabButton IsSelected={SelectedTopic==='state'} onSelect={()=>handleclick('state')}>State</TabButton>

                </>
            }>
          {!SelectedTopic&& <p>please select a topic </p>}
          {SelectedTopic&& 
          <div id='tab-content'>
            <h3>
              {EXAMPLES[SelectedTopic].title}
            </h3>

            <p>
              {EXAMPLES[SelectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[SelectedTopic].code}

              </code>
            </pre>
          </div>
           }
            </Tabs>
          
        
          
        </Sections>
    );
}