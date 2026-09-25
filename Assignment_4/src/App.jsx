import './App.css'
import Cards from './Component/Cards';

const App = () => {
  const isLoggedIn = true;
  const isAdmin = true;
  const hasError = false;
  let msg;

  if (hasError) {
    msg = <p >Error occurred!</p>;
  } else if (isLoggedIn && isAdmin) {
    msg = <Cards />
  } else if (isLoggedIn) {
    msg = <h1>Welcome, Thanks to logged in </h1>;
  } else {
    msg = <h1>Please Login</h1>;
  }


  return (
    <div>
      {msg}
    </div>
  )
   
}

export default App


