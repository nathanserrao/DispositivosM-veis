import React, { createContext, useState } from 'react'

const ThemeContext = createContext({
    theme: 'Light',
    toggleTheme: () => {},
})
    export const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState('Light')

        const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'Light' ? 'Dark' : 'Light'))
    }

return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
)
}

export default ThemeContext