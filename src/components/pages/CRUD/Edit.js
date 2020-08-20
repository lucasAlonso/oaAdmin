import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase/firebseConfig';

const Edit = ({
    match: {
        params: { id },
    },
    history,
    match,
}) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [sala, setSala] = useState('');
    const [key, setKey] = useState('');

    const Todo = db.collection('Todo');

    useEffect(() => {
        const Todo = TodoRef.current;
        Todo.doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const { name, lastname, sala } = doc.data();
                    setKey(doc.id);
                    setName(name);
                    setLastname(lastname);
                    setSala(sala);
                } else {
                    console.log('No Such doc');
                }
            });
    }, [id]);

    const onSubmit = () => {
        const Todo = TodoRef.current;
        const updateRef = Todo.doc(key);
        updateRef
            .set({
                nombre,
                apellido,
                sala,
            })
            .then(() => {
                setKey('');
                setName('');
                setLastname('');
                setSala('');
                history.pushState('/show/' + match.params.id);
            })
            .catch((error) => {
                console.error('error editing doc: ', error);
            });
    };

    return (
        <div className='container'>
            <div className='panel panel-default'>
                <div className='panel-heading' />
                <div className='panel/body'>
                    <h4>
                        <link to={'/show/${key'}> Lista de Alumnos</link>
                    </h4>
                    <form>
                        <div className='form-group'>
                            <label htmlFor={'name'}>Nombre</label>
                            <input
                                type='text'
                                className='form-control'
                                name='nombre'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Nombre'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor={'lastname'}>Apellido</label>
                            <input
                                type='text'
                                className='form-control'
                                name='lastname'
                                value={name}
                                onChange={(e) => setLastame(e.target.value)}
                                placeholder='Apellido'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor={'sala'}>Sala</label>
                            <input
                                type='text'
                                className='form-control'
                                name='sala'
                                value={name}
                                onChange={(e) => setSala(e.target.value)}
                                placeholder='Sala'
                            />
                        </div>
                        <button onClick={onSubmit} type='submit'>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
