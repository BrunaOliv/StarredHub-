import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Container, Owner, Loading, BackButton} from './styles';
import api from '../../services/api';
import {FaArrowLeft} from 'react-icons/fa'

export default function Repositorio(){
    const { repositorio } = useParams();
    const [repositorioSelecionado, setRepositorios] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        async function load(){
            const [repositorioData, issueData] = await Promise.all([
                api.get(`/repos/${repositorio}`),
                api.get(`repos/${repositorio}/issues`,  {params: {state: 'open', per_page: 5}})
            ])
            console.log(repositorioData.data);
            setRepositorios(repositorioData.data);
            setIssues(issueData.data);
            setLoading(false);
        }

        load();
    }, [repositorio]);


    if(loading){
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }

    return(
        <Container>
            <BackButton to="/">
                <FaArrowLeft color="#000" size={30} />
            </BackButton>

            <Owner>
                <img src={repositorioSelecionado.owner.avatar_url} alt={repositorioSelecionado.owner.login} />
                <h1>{repositorioSelecionado.name}</h1>
                <p>{repositorioSelecionado.description}</p>
            </Owner>
        </Container>
    )
}