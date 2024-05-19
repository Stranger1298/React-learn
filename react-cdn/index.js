// ReactDOM.render(<h1>Hello everyone</h1>,document.querySelector('#root'))

// ReactDOM.render(<h1>Hello everyone</h1>,document.getElementById('root'))

// let i=0;
// function add(){
//     i++
//     console.log(i);
//     rendercontent()
// }
// const display=document.getElementById('root')

// const rendercontent=()=>{
//     let content=(
//         <div>
//         <button id="btn" onClick={add}>Tap here!!</button>
//         <h1>{i}</h1>
//         </div>
//         )
//         ReactDOM.render(content,display)
// }

// rendercontent()

//Navbar
const display = document.getElementById('root')

    let content=(
        <div>
        <h1>Brand</h1>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Pricing</li>
        </ul>
        
        </div>
        )
        ReactDOM.render(content,display)