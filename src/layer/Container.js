import React from 'react'

const Container = ({children}) => {
    return (
        <main className="flex flex-col items-center">
            {children}
        </main>
    )
}

export default Container
