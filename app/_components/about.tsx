import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="rounded-lg p-6 shadow-lg">
        <h2 className="mb-4 text-center text-3xl font-bold">Sobre Mim</h2>
        <div className="flex flex-col items-center md:flex-row md:space-x-6">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <p className="mb-4">
              Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras
              e eficientes para desafios complexos. Minha jornada no
              desenvolvimento de software me levou a adquirir uma sólida base em
              diversas tecnologias e ferramentas modernas, permitindo-me
              trabalhar em projetos de ponta a ponta com uma abordagem
              full-stack. Aqui estão algumas das principais tecnologias e
              ferramentas que utilizo no meu dia a dia:
            </p>
            <ul className="mb-4 list-inside list-disc">
              <li>
                <strong>TypeScript</strong>: Utilizo TypeScript para garantir
                que meu código JavaScript seja robusto e escalável, aproveitando
                os benefícios da tipagem estática para evitar erros comuns e
                melhorar a manutenção do código.
              </li>
              <li>
                <strong>React</strong>: Desenvolvo interfaces de usuário
                dinâmicas e responsivas com React, criando componentes
                reutilizáveis e otimizados para uma experiência de usuário
                fluida e interativa.
              </li>
              <li>
                <strong>Node.js</strong>: No back-end, utilizo Node.js para
                construir APIs rápidas e eficientes, aproveitando a natureza
                assíncrona e a vasta comunidade de pacotes disponíveis no npm.
              </li>
              <li>
                <strong>Prisma</strong>: Para gerenciar o acesso a bancos de
                dados, utilizo Prisma como meu ORM (Object-Relational Mapping)
                preferido, facilitando a modelagem de dados e as consultas
                complexas com segurança e eficiência.
              </li>
              <li>
                <strong>Serverless</strong>: Aproveito a arquitetura serverless
                para construir aplicações escaláveis e de alta disponibilidade,
                utilizando serviços como AWS Lambda e Azure Functions para
                executar código sob demanda sem a necessidade de gerenciar
                servidores.
              </li>
              <li>
                <strong>Docker</strong>: Utilizo Docker para containerizar
                aplicações, garantindo que elas rodem de maneira consistente em
                qualquer ambiente, facilitando o desenvolvimento, teste e
                implantação contínua.
              </li>
              <li>
                <strong>Ferramentas de Teste</strong>: Adoto uma abordagem de
                desenvolvimento orientada a testes (TDD) utilizando ferramentas
                como Jest e Cypress para garantir que meu código seja confiável
                e de alta qualidade.
              </li>
              <li>
                <strong>CI/CD</strong>: Integro práticas de Continuous
                Integration e Continuous Deployment (CI/CD) em meus fluxos de
                trabalho para automatizar testes e implantações, garantindo que
                novas funcionalidades sejam entregues rapidamente e sem falhas.
              </li>
            </ul>
            <p>
              Ao longo da minha carreira, trabalhei em uma variedade de
              projetos, desde websites estáticos a aplicações empresariais
              complexas. Estou sempre em busca de novas tecnologias e métodos
              para melhorar meu trabalho e estou empolgado para enfrentar novos
              desafios. Vamos construir algo incrível juntos!
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/profile2.jpg"
              className="h-full w-full transform rounded-lg border border-gray-300 object-cover grayscale transition-transform hover:scale-105 hover:grayscale-0"
              alt="Profile Image"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
