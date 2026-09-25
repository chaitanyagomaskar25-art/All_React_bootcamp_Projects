import React from 'react'

const Main = () => {
  return (
    <main className='main'>
        <section className='hero'>
          <h1>Welcome to my React App</h1>
          
        </section>
        <section className='content'>
          <p>This is simple React application to demostrastion the structure of a React component.</p>
          <p>Features of React</p>
          <ol>
            <li>Component-Based: React allows you yo build encapsulated components that mange their own state, then compose them to make complex UIs.</li>
            <li>Declarative: React makes it easy to create interactive UIs. design views for each state in your application, and React will efficiently update and render just the right components when your data changes. </li>
            <li>Learn Once, Write Anywhere: You can develop new features in react without rewritting existing code. React can also render on the server using Node and power mobile aps using React Native</li>
          </ol>
        </section>
      </main>
  )
}

export default Main
