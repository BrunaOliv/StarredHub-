import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Container} from './styles';
import api from '../../services/api';

export default function Repositorio(){
    const { repositorioRota } = useParams();
    const [repositorio, setRepositorios] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        async function load(){
            const [repositorioData, issueData] = await Promise.all([
                api.get(`/repos/${repositorioRota}`),
                api.get(`repos/${repositorioRota}/issues`,  {params: {state: 'open', per_page: 5}})
            ])

            setRepositorios(repositorioData);
            setIssues(issueData);
            setLoading(false);
        }

        load();
    }, [repositorioRota])


    return(
        <Container>
            
        </Container>
    )
}