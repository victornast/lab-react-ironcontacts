import contacts from './contacts.json';
import './App.css';

function App() {
  const initialFive = contacts.slice(0, 5);
  console.log(initialFive);
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronContacts</h1>
      </header>
      <section>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {initialFive.map((contact) => {
              return (
                <tr style={{ textAlign: 'left' }} key={contact.id}>
                  <td>
                    <img
                      width="50px"
                      src={contact.pictureUrl}
                      alt={contact.name}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
