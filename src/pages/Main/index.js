import React, {useState, useCallback} from "react";
import {FaGithub, FaPlus} from 'react-icons/fa'
import {Container, Form, SubmitButtom} from "./styles"
import api from '../../services/api'

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit(){ 
            const response = await api.get(`repos/${newRepo}`)

            const data = {
                name: response.data.full_name,
            }

            setRepositorios([...repositorios, data]);
            setNewRepo('');
        }

        submit();

    }, [newRepo, repositorios])

    function handleinputchange(e){
        setNewRepo(e.target.value);
    }

    return(
        <Container>

            <h1>
                <FaGithub size={25}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Adicionar Repositorio"
                value={newRepo}
                onChange={handleinputchange}
                />

                <SubmitButtom>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButtom>
            </Form>

        </Container>
    )
}