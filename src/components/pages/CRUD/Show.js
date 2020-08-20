import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase/firebseConfig';

const Show = (props) => {
    const [usuarios, SetUsuarios] = useState([]);

    useEffect(() => {
        const Todo = db.collection('Todo');

        Todo.get().then((docs) => {
            if (!docs.empty) {
                let usuarios = [];
                docs.forEach((doc) => {
                    usuarios.push({
                        key: doc.id,
                        ...doc.data(),
                    });
                });
                SetUsuarios(usuarios);
            }
        });
    }, []);

    const Borrar = (id) => {
        db.collection('todo')
            .doc(id)
            .delete()
            .then(() => {
                console.log('Doc successfully deleted');
            })
            .catch((error) => {
                console.error('Error deleting doc: ', error);
            });
    };

    return (
        <div className='container' style={{ width: 400, padding: '20px' }}>
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <h4>
                        <Link to='/'>Lista de Alumnos</Link>
                    </h4>
                    <table>
                        <threat>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Sala</th>
                            </tr>
                        </threat>
                        <tbody>
                            {usuarios.map(({ nombre, apellido, sala, key }) => {
                                return (
                                    <tr key={key}>
                                        <td>Nombre</td>
                                        <td>Apellido</td>
                                        <td>Sala</td>
                                        <td>
                                            <button>
                                                <Link to={'/edit/${key}'} />
                                            </button>
                                            <button onClick={() => Borrar(key)}>Borrar</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Show;
