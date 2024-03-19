import React, { useState } from 'react'

const FormHooks = () => {
    const [list] = useState(['Leticia', 'Enzo', 'Kayro', 'Gustavo'])
    const [number, setNumber] = useState(15)
    const [user] = useState(
        [
            { id: 1, name: 'Jose Carlos', idade: 44 },
            { id: 2, name: 'Maria Rosa', idade: 25 },
            { id: 3, name: 'Ana Sofia', idade: 31 },
            { id: 4, name: 'Paulo Jose', idade: 21 },
            { id: 5, name: 'Marcus Daniel', idade: 25 },
            { id: 6, name: 'Victor Hugo', idade: 34 },
            { id: 7, name: 'Viktoria Kamilly', idade: 19 },
            { id: 8, name: 'Pedro Lucas', idade: 37 }
        ]
    )
    return (
        <>
            <div>
                <p>
                    <strong>Valor de numero:</strong> {number}
                </p>
                <button onClick={() => { setNumber(32); console.log(number) }}>Mudar</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <table>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            idade
                        </th>
                    </tr>
                    {
                        user.map((pessoa) => (
                            <tr key={pessoa.id}>
                                <td>{pessoa.id}</td>
                                <td>{pessoa.name}</td>
                                <td>{pessoa.idade}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </>
    )
}

export default FormHooks