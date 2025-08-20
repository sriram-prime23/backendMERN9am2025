// export default function TabButton ({children, onSelect}){


// // document.querySelector('button').addEventListener('click', () => {
// //         console.log('Button clicked!');
// //     });

// // function handleClick(){
// //     console.log("hello SLA people");
    
// // 



//     return (
//         <li>
//             <button onClick={onSelect}>{children}</button></li>
//     )
// }

export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TAB-BUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}