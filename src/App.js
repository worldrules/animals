import { useState } from "react";


const getRandomAnimal = () => {
    const animals = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

console.log(getRandomAnimal())

function App() {
    const [animals, setAnimals] = useState([]);



    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };



    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{animals}</div>
        </div>
    );
}

export default App;