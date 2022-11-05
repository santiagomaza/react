import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards';
import Alert from './components/Alerts/Alert';
import { useState } from 'react';

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
      <div className='d-flex justify-content-center'>
      {
        arrayInformation.map(person => <Cards name = {person.name} image = {person.image} />)
      }
      </div>
      <div>
        <button type='button' className='btn btn-primary mb-3' onClick={showMsg}>Click on me to show the message!</button>
        {
          msg === true ?
          <Alert message="Hello people!" /> : 
          ''
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
