import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

// React.FC => React Function Component
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repository">
          <img
            src="https://avatars1.githubusercontent.com/u/13751617?s=460&u=82baf0ba4c80683321617710f7201aaa23134f98&v=4"
            alt="Rodolfo Marriel"
          />
          <div>
            <strong>Projeto</strong>
            <p>Algum projeto</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars1.githubusercontent.com/u/13751617?s=460&u=82baf0ba4c80683321617710f7201aaa23134f98&v=4"
            alt="Rodolfo Marriel"
          />
          <div>
            <strong>Projeto</strong>
            <p>Algum projeto</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars1.githubusercontent.com/u/13751617?s=460&u=82baf0ba4c80683321617710f7201aaa23134f98&v=4"
            alt="Rodolfo Marriel"
          />
          <div>
            <strong>Projeto</strong>
            <p>Algum projeto</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars1.githubusercontent.com/u/13751617?s=460&u=82baf0ba4c80683321617710f7201aaa23134f98&v=4"
            alt="Rodolfo Marriel"
          />
          <div>
            <strong>Projeto</strong>
            <p>Algum projeto</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars1.githubusercontent.com/u/13751617?s=460&u=82baf0ba4c80683321617710f7201aaa23134f98&v=4"
            alt="Rodolfo Marriel"
          />
          <div>
            <strong>Projeto</strong>
            <p>Algum projeto</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
