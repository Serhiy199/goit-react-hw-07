import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { list } from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={list}>
            {visibleContacts.map(list => (
                <Contact list={list} key={list.id} />
            ))}
        </ul>
    );
}
