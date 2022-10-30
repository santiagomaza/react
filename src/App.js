import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards';

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

  return (
    <div className="App">
      <Navbar title='Title' />
      <div className='d-flex justify-content-center'>
      {
        arrayInformation.map(person => <Cards name = {person.name} image = {person.image} />)
      }
      </div>
      <Footer />
    </div>
  );
}

export default App;
