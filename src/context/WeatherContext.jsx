import { useState, createContext, useContext } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
    const [weather, setWeather] = useState();

    return <WeatherContext.Provider value={{ weather }}>
        {children}
    </WeatherContext.Provider>
}