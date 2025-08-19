export default function TabButton ({children, onSelect}){


// document.querySelector('button').addEventListener('click', () => {
//         console.log('Button clicked!');
//     });

// function handleClick(){
//     console.log("hello SLA people");
    
// 



    return (
        <li>
            <button onClick={onSelect}>{children}</button></li>
    )
}