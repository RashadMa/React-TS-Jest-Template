import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    firstName: "Rashad",
    lastName: "Mammadov",
  };

  const nameList = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Bob", lastName: "Johnson" },
  ];

  return (
    <>
      <Person name={personName} />
      <Greet name='Rashad' count={10} isOkay={true} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Hello!</Heading >
    </>
  );
}

export default App
