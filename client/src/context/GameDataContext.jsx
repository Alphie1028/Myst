import React, { createContext, useState, useEffect} from "react";

const GameDataContext = createContext();

export const GameDataContextProvider = ({children}) =>{
    const [gameData, setGameData] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/games/1/')
            .then(response => response.json())
            .then(data => setGameData(data))
            .catch(error => console.log(error))

    }, []);

    return(
        <GameDataContext.Provider value={{children}}>
            {children}
        </GameDataContext.Provider>
    )
}

export default GameDataContext;