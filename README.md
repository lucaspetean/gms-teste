# GMS-Teste

Projeto de QA para o Golden Movie Studios

## Descrição
O projeto GMS-Teste tem como objetivo realizar testes de qualidade (QA) no sistema de busca de filmes do Golden Movie Studios. Utilizando a ferramenta de testes Cypress, validamos a funcionalidade de busca para garantir que os resultados sejam exibidos corretamente conforme o esperado.

## Estrutura do Projeto
A estrutura do projeto é a seguinte:

gms-teste/

├── cypress/

│ ├── e2e/

│ │ └── spec.cy.js

│ ├── fixtures/

│ │ └── example.json

│ ├── support/

│ │ └── commands.js

│ │ └── e2e.js

├──.gitignore

├── README.md

├── cypress.config.js

├── package-lock.json

└── package.json

- `cypress/e2e`: Contém o arquivo `spec.cy.js` com os testes end-to-end.
- `cypress/fixtures`: Contém o arquivo `example.json` com dados de exemplo para os testes.
- `cypress/support`: Contém `commands.js` e `e2e.js`, que são arquivos de suporte para os testes.
- `.gitignore`: Arquivo para especificar quais arquivos e diretórios devem ser ignorados pelo Git.
- `README.md`: Este arquivo, contendo informações sobre o projeto.
- `cypress.config.js`: Arquivo de configuração do Cypress.
- `package-lock.json`: Arquivo gerado pelo npm para controle exato das versões das dependências.
- `package.json`: Arquivo de configuração do Node.js, contendo as dependências do projeto.

## Instalação
Para configurar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gms-teste.git

2. Navegue até o diretório do projeto:
   ```bash
   cd gms-teste
   
3. Instale as dependências:
   ```bash
   npm install

## Executando os Testes
Para executar os testes utilizando a interface gráfica do Cypress, utilize o seguinte comando:
   ```bash
   npx cypress open
   ```

Isso abrirá a interface gráfica onde você poderá selecionar e executar os testes.

Para executar os testes no modo headless (sem interface gráfica), utilize:
   ```bash
   npx cypress run
   ```

### Teste de Exemplo
- **Arquivo**: [cypress/e2e/spec.cy.js](cypress/e2e/spec.cy.js)
- **Descrição**: Exemplo de teste end-to-end.

Exemplo de teste:
   ```javascript
   describe('Teste de exemplo', () => {
     it('Deve fazer algo', () => {
       // Implementação do teste...
     });
   });
   ```
## Contribuição
Se você quiser contribuir com este projeto, por favor siga as etapas abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Faça commit das suas alterações (git commit -am 'Adiciona nova feature').
4. Envie para o branch (git push origin feature/nova-feature).
5. Crie um novo Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
