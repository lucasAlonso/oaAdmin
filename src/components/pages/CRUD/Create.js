import React, { useState } from 'react';
import { db } from '../../../firebase/firebseConfig';
import { auth } from '../../../firebase/firebseConfig';

const Create = (props) => {
    const initExptesValues = {
        aliasExpte: '',
        tipoExpte: '',
        comitennte: '',
        presupuesto: '',
    };
    const [infoExpte, setInfoExpte] = useState(initExptesValues);

    const [userLogedData, setUserLogedData] = useState('');
    // user se busca con auth.currentUser
    const Exptes = db.collection('Exptes');

    const onSubmit = (e) => {
        e.preventDefault();
        setUserLogedData(auth.currentUser);
        Exptes.doc(userLogedData.uid).add({
            infoExpte
        }).then((docRef) => {
            setKey(initExptesValues);
            setUserLogedData('');
        });
    };

    return (
        <div className='container'>
            <div className='panel panel-deafault'>
                <div className='panel-body'>
                    <h4>Lista de Alumnos</h4>
                    <FormLabel>
                        <div className='form-group'>
                            <label for='name'>Nombre</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Nombre'
                            />
                        </div>
                        <div className='form-group'>
                            <label for='lastname'>Apellido</label>
                            <input
                                type='text'
                                className='form-control'
                                name='lastname'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder='Apellido'
                            />
                        </div>
                        <div className='form-group'>
                            <label for='name'>Sala</label>
                            <input
                                type='text'
                                className='form-control'
                                name='sala'
                                value={sala}
                                onChange={(e) => setSala(e.target.value)}
                                placeholder='Sala'
                            />
                        </div>
                        <button onClick={onSubmit} type='submit'>
                            Enviar
                        </button>
                    </FormLabel>
                </div>
            </div>
        </div>
    );
};
