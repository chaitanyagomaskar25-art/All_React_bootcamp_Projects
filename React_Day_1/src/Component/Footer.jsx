// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='footer'>
//         <p>&copy; 2024 My React App. All rights reserved.</p>
//       </footer>
//   )
// }

// export default Footer


import React from 'react'

const Footer = ({name,lastName}) => {
  return (
    <div>
      <h1>Bye Bye {name} {lastName}</h1>
    </div>
  )
}

export default Footer
