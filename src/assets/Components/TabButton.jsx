export default  function TabButton({ children, onSelect,IsSelected }){
   
    return( <li>
        <button  className={IsSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>

    );
} 
//export default  function TabButton({children}){
    //return( <li>
      //  <button>{children}</button>
    //</li>

  //  );
//}
