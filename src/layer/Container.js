import React from 'react'

const Container = ({children}) => {
    return (
        <main className="flex flex-col flex-wrap h-screen w-screen items-center bg-gradient-to-r from-bg-secondary via-bg-primary to-bg-secondary">
            {children}
        </main>
    )
}

export default Container
