import { useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Alice', phone: '111-1111' },
    { id: 2, name: 'Bob', phone: '222-2222' },
    { id: 3, name: 'Charlie', phone: '333-3333' },
  ]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (target) => {
    setSelected(target);
  };
  const handleDelete = (targetId) => {
    if (selected?.id === targetId) {
      setSelected(null);
    }
    setContacts((prev) => prev.filter(({ id }) => id !== targetId));
  };
  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <button onClick={() => handleSelect(contact)}>View</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selected !== null && (
        <div className="contact-detail">
          <p>Name: {selected.name}</p>
          <p>Phone: {selected.phone}</p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
