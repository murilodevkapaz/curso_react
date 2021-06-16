import React from 'react';
import './app.css';

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragment from './components/basics/Fragment';
import Aleatorio from './components/basics/Aletaotório';
import Card from './components/layout/Card';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import TestFather from './components/basics/TestFatherMurilo';
import TestChild from './components/basics/TestChildMurilo';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProduto';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/usuarioInfo';
import TestEventoCond from './components/condicional/TestEventoCond';
import ComunicacaoDiretaPai from './components/comunicacão/DiretaPai';
import ComunicacaoIndiretaPai from './components/comunicacão/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default _ =>
    <div className="app">
        <h1>Fundamentos React</h1>

        <div className="cards">
            <Card titulo="#14 Mega Sena " color="#82B0D9">
                <Mega />
            </Card>

            <Card titulo="#13 Contador " color="#82B0D9">
                <Contador numeroInicial={11} />
            </Card>

            <Card titulo="#12 Componente Controlado" color="#ADB3BF">
                <Input />
            </Card>


            <Card titulo="#11 Comunicação Direta" color="#92a249">
                <ComunicacaoIndiretaPai />
            </Card>

            <Card titulo="#10 Comunicação Direta" color="#60171C">
                <ComunicacaoDiretaPai />
            </Card>

            <Card titulo="Test Evento Condicional" color="#FF432E">
                <TestEventoCond />
            </Card>

            <Card titulo="#9 Renderização condicional:IF" color="#82B0D9">
                <UsuarioInfo usuario={{ nome: "Fernando" }} />
            </Card>

            <Card titulo="#8 Renderização condicional" color="#82B0D9">
                <ParOuImpar numero={21} />
            </Card>

            <Card titulo="#7 Desafio repeticao" color="#FF432E">
                <TabelaProdutos />
            </Card>
            <Card titulo="#6 Repetição" color="#bb00d8">
                <ListaAlunos />
            </Card>
            <Card titulo="#Test Murilo" color="#AEB5BA">
                <TestFather lastName="Paz">
                    <TestChild name="Murilo" />
                    <TestChild name="Cleane" />
                    <TestChild name="Daniel" />
                    <TestChild name="Rebeca" />
                </TestFather>
            </Card>
            <Card titulo="#5 Componente com Filhos" color="#f6abb6">
                <Familia sobrenome="Ferraz">
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#4 Aleatório" color="#080">
                <Aleatorio />
            </Card>
            <Card titulo="#Fragment" color="#005b96 ">
                <Fragment />
            </Card>
            <Card titulo="#2 Com parametro" color="#451e3e">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!"
                    nota={9.3}
                />
            </Card>
            <Card titulo="#1 Primeiro Componente" color="#54b2a9">
                <Primeiro />
            </Card>
        </div>
    </div>
