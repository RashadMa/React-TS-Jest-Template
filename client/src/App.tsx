import './App.css'
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet'
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
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
      <Oscar>
        <Heading>
          Oscar goes to...
        </Heading >
      </Oscar>
      <Button handleClick={(e, id) => {
        console.log('"Click me!" button clicked', e, id);
      }} />
      <Input value='' handleChange={(e) => {
        console.log('Event is: ', e)
      }} />
      <Container styles={{
        border: "1px solid gray",
        padding: "20px"
      }} />
    </>
  );
}

export default App
