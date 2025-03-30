import React from "react";
import {FaGithub, FaPlus} from 'react-icons/fa'
import {Container, Form, SubmitButtom} from "./styles"

export default function Main(){
    return(
        <Container>

            <h1>
                <FaGithub size={25}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={()=>{}}>
                <input type="text" placeholder="Adicionar Repositorio"/>

                <SubmitButtom>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButtom>
            </Form>

        </Container>
    )
}