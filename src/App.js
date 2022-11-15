import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards';
import Alert from './components/Alerts/Alert';
import { useState } from 'react';
import NewCard from './components/NewCard/NewCard';

function App() {

  const arrayInformation = [
    {
      name: "Santiago",
      image: "https://picsum.photos/id/237/200/300"
    },
    {
      name: "Miguel Angel",
      image: "https://picsum.photos/seed/picsum/200/300"
    }
  ]

  const [msg, setMsg] = useState(false)

  const showMsg = () => {
    setMsg(!msg)
  }

  return (
    <div className="App">
      <Navbar title='Title' />
      <div className='d-flex justify-content-center text-center'>
      {
        arrayInformation.map(person => <Cards name = {person.name} image = {person.image} />)
      }
      </div>
      <div className='d-flex justify-content-center mb-2'> 
        <button type='button' className='btn btn-primary' onClick={showMsg}>Click on me to show the message!</button>
      </div>
      <div className='d-flex justify-content-center'>
        {
          msg === true ?
          <Alert message="Hello people!" /> : 
          ''
        }
      </div>
      <div className='mt-3 d-flex justify-content-center flex-column align-items-center'>
        <NewCard student='Santiago' info='Student information' grade={2} />
        <NewCard student='Santiago' info='Student information' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
