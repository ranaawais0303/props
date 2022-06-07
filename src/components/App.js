import contacts from "../AddCard";
import Card from "./Card";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      src={contact.src}
      number={contact.number}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1>My contact</h1>
      <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGGiw7MeY2ehg/profile-displayphoto-shrink_100_100/0/1632843440968?e=1660176000&v=beta&t=FKKoWFR3iuY4tw16W22dyO7gKjAOG2tkpAQMbhZrF78" />

      {contacts.map(createCard)}

      {/*
      <Card
        name={contacts[1].name}
        src={contacts[1].src}
        number={contacts[1].number}
        email={contacts[1].email}
      />
      <Card
        data={contacts.map((info) => {
          return info;
        })}
      /> */}
    </div>
  );
}

export default App;
