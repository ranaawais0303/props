import contacts from "./AddCard";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>My contact</h1>
      <Card
        name={contacts[0].name}
        src={contacts[0].src}
        number={contacts[0].number}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        src={contacts[1].src}
        number={contacts[1].number}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
