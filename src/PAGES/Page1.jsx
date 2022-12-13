import React from "react"
import  Table  from "react-bootstrap/Table"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function dbjson()
{
    const [rows, setRows] = useState([])
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [idade, setIdade] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3002/Romances')
        .then((Response) => setRows(Response.data))
        .then((error) => console.log(error))
    },[])
    //----------Inserindo valores----------//
    const inputNome = (e) =>{
        setName(e.target.value)
    }
    const inputEmail = (e) =>{
        setEmail(e.target.value)
    }
    const inputIdade = (e) =>{
        setIdade(e.target.value)
    }
    function postName()
    {
        axios.post('',{nome: name, email: email, idade: idade } )
        .then(axios.get(''))
        then((Response) => setRows(Response.data))
        .then((error) => console.log(error))

    }


    return(
        <Table striped bordered hover>
        <thead>
            <tr>
                <header>
                    <label>Nome</label>
                    <input onChange={ (e) => inputNome(e) } /> {' '}
                    <label>E-mail</label>
                    <input onChange={ (e) => inputEmail(e) } /> {' '}
                    <label>idade</label>
                    <input onChange={ (e) => inputIdade(e) } /> {' '}
                    <Button variant="primary" onClick={() => postName() }>inserir</Button>{' '}
                </header>
            </tr>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
            {rows.map((row) => (
            <tr key={row.id}>
             <td>{row.id}</td>
             <td>{row.nome}</td>
             <td>{row.email}</td>
             <td>{row.idade}</td>
             <td><Button variant="primary">Editar</Button>{' '}</td>
             <td><Button variant="danger">Excluir</Button>{' '}</td>
           </tr>
            ))}
         
        </tbody>
      </Table>
    ) 
}