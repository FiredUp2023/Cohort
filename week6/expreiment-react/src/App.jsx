import { useState } from 'react'
import './App.css'

export default function App() {
    return (
        <CardWrapper><TextComponent /></CardWrapper>
    )
}

function CardWrapper({children}) {
    return (
        <div style={{ border: "2px solid black", padding: 20, borderRadius: 10}}>
        {children}
        </div>
    )
}

function TextComponent() {
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorum velit obcaecati sed in assumenda eum voluptatibus reiciendis voluptate, iusto odio veniam labore ab provident, accusamus praesentium soluta placeat nam.</p>
    )
}
