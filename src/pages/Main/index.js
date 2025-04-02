import React, {useState, useCallback} from "react";
import {FaGithub, FaPlus, FaSpinner} from 'react-icons/fa'
import {Container, Form, SubmitButton} from "./styles"
import api from '../../services/api'

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setLoading(true);

        async function submit(){ 
            try{
                const response = await api.get(`repos/${newRepo}`)

                const data = {
                    name: response.data.full_name,
                }
    
                setRepositorios([...repositorios, data]);
                setNewRepo('');
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
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

                <SubmitButton loadingButton={loading}>
                    {
                        loading? (
                            <FaSpinner color="#FFF" size={14}/>
                        ) :
                         (<FaPlus color="#FFF" size={14}/>)
                    }
                </SubmitButton>
            </Form>

        </Container>
    )
}