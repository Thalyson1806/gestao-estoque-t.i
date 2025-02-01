# Sistema de Gestão de Estoque de TI

Este repositório contém um sistema de **gestão de ativos de TI**, projetado para ajudar na organização e controle de equipamentos, dispositivos de rede e outros recursos tecnológicos dentro de uma organização. O sistema oferece um painel intuitivo e diversas funcionalidades para facilitar o gerenciamento de ativos de TI, incluindo manutenção, relatórios e alertas.

## Funcionalidades

### Painel de Controle

- **Total de Ativos**: Visualize rapidamente o número total de ativos registrados no sistema.
- **Ativos de Hardware**: Tenha uma visão clara de todos os equipamentos de hardware registrados no inventário.
- **Dispositivos de Rede**: Acompanhe os dispositivos de rede e sua conectividade.
- **Manutenção Pendente**: Acompanhe os itens que precisam de manutenção ou estão fora de funcionamento.
- **Utilização de Ativos**: Exibe um gráfico interativo mostrando a utilização dos ativos, ajudando a identificar sobrecarga ou subutilização.
- **Atividades Recentes**: Histórico das últimas ações realizadas no sistema, como atualizações, manutenções e modificações no inventário.

### Abas do Sistema

- **Ativos**: Cadastro e gerenciamento de ativos de TI (hardware, dispositivos, etc.). 
- **Inventário**: Visualização detalhada de todos os itens de estoque, com informações sobre quantidade, localização e status.
- **Usuários**: Gerenciamento de usuários do sistema, com diferentes níveis de acesso e permissões.
- **Relatórios**: Geração e download de relatórios detalhados sobre o estado do inventário e a utilização dos ativos. Relatórios podem ser baixados em formatos PDF, Excel e outros.
- **Alertas**: Notificações sobre itens com baixa de estoque, manutenções pendentes ou qualquer outro evento importante relacionado aos ativos.
- **Configurações**: Personalização do sistema, incluindo preferências de notificação, permissões de usuários, integrações, entre outras opções.

## Como Utilizar

### Pré-requisitos

Antes de executar o sistema, garanta que você tenha o seguinte ambiente configurado:

- [Node.js](https://nodejs.org/) (caso o backend utilize Node.js)
- Banco de dados (MySQL, PostgreSQL, MongoDB ou outro de sua escolha)
- Dependências do projeto

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/gestao-estoque-ti.git
Acesse o diretório do projeto:
bash
Copiar
cd gestao-estoque-ti
Instale as dependências:
bash
Copiar
npm install
Configure o banco de dados (veja instruções no arquivo [configuração-do-banco-de-dados.md]).
Execução
Para rodar o sistema localmente:

bash
Copiar
npm start
Isso iniciará o servidor localmente na porta 3000 (ou outra definida no arquivo .env).

Testes
Execute os testes automatizados para garantir que tudo esteja funcionando corretamente:

bash
Copiar
npm test

Tecnologias Utilizadas
Frontend: React, Bootstrap
Backend: Node.js, Express
Banco de Dados: MySQL / MongoDB (especificar conforme utilizado)
Relatórios: jsPDF (para gerar PDFs), ExcelJS (para gerar arquivos Excel)
Gráficos: Chart.js (para gráficos de utilização de ativos)
Como Contribuir
Se você deseja contribuir para o projeto, siga as etapas abaixo:

Faça um fork deste repositório.
Crie uma branch para a sua feature (git checkout -b minha-feature).
Faça as modificações necessárias.
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Envie para o seu fork (git push origin minha-feature).
Abra uma pull request.

````
Contato
Se tiver dúvidas, sugestões ou problemas, entre em contato:

Email: thalyson2203@gmail.com
GitHub: github.com/Thalyson1806
