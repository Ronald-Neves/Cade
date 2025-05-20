# 📱 Cadê? – Conectando Você ao que Precisa Perto de Você

## ✅ Problema 1: Documentação README.md

### 🧾 Nome do Projeto
Cadê? é um aplicativo mobile que conecta usuários a empresas e prestadores de serviços locais com praticidade e agilidade. Com poucos toques, é possível visualizar informações detalhadas sobre o estabelecimento, incluindo localização, horário de funcionamento, avaliações e contato direto por mensagem ou telefone. É um catálogo digital inteligente voltado para simplicidade e usabilidade.

### 🛠️ Tecnologias Utilizadas (Mobile)
- **Framework Mobile:** React Native 0.73  
- **Backend Mobile (API REST):** Node.js 20 + Express.js  
- **Banco de Dados (acessado via API):** PostgreSQL 15  
- **Autenticação e Notificações Push:** Firebase 11.28  
- **Geolocalização e Rotas:** Google Maps API  
- **Navegação entre Telas:** React Navigation 6.1  
- **Gerenciamento de Estado:** Redux Toolkit  
- **Estilização:** Tailwind CSS (via NativeWind)  
- **Ambiente de Configuração:** Dotenv (.env)

### ⚙️ Instalação
```bash
# Clonar o repositório
git clone https://github.com/usuario/cade-app.git
cd cade-app

# Instalar dependências
npm install

# Executar o aplicativo (emulador ou dispositivo físico)
npx react-native run-android
# ou
npx react-native run-ios
```

🔐 **Observação:** É necessário configurar as chaves de API do Firebase e Google Maps no arquivo `.env`.

### 📲 Uso
O Cadê? facilita a vida do usuário ao permitir que ele encontre estabelecimentos próximos com base em localização e preferências. Ele oferece visualizações completas de perfis, incluindo contato direto com o prestador de serviço ou empresa.

**👥 Público-alvo:**  
Consumidores que buscam serviços locais com rapidez e empresas que desejam presença digital simplificada.

**🧪 Exemplos de Uso:**
- Um usuário busca uma farmácia aberta perto de sua casa e liga diretamente pelo app.
- Um cliente visualiza o perfil de um chaveiro e envia uma mensagem rapidamente para atendimento.

---

## 🔍 Problema 2: Pesquisa e Análise de Mercado

### 📱 Aplicativo Semelhante: UaiPede

**Pontos Fortes:**
- Plataforma ampla: inclui delivery, transporte e classificados.
- Reúne diversos serviços em um só lugar.

**Pontos Fracos:**
- Interface visual confusa e carregada.
- Excesso de funcionalidades pode dificultar a navegação.
- Pouco foco no contato direto entre cliente e prestador.

### 🆚 Diferenciais do Cadê?:
- **Simplicidade:** interface minimalista e intuitiva.
- **Foco total no contato direto:** mensagem ou ligação.
- **Busca rápida com filtros eficientes:** categoria, nota, distância, etc.
- **Ideal para pequenas empresas e usuários que valorizam agilidade.**

---

## 🧩 Problema 3: Definição de Funcionalidades

### 🔑 Funcionalidades Principais do Aplicativo

**Autenticação e Cadastro**
- Login via e-mail, Google ou telefone.
- Cadastro como usuário comum ou empresa.

**Busca Inteligente**
- Campo de busca com sugestões automáticas.
- Filtros por categoria, nota, distância, horário e preço.

**Catálogo de Estabelecimentos**
- Visualização do perfil completo do local:
  - Nome, localização (Google Maps), descrição, fotos, horário, avaliações.

**Contato Direto**
- Botão para mensagem via app.
- Botão de ligação telefônica nativa.

**Avaliações**
- Sistema de notas e comentários por usuários autenticados.

**Histórico e Favoritos**
- Lista de locais já visitados e favoritos salvos.

**Notificações Push**
- Alertas sobre mensagens e promoções (com permissão do usuário).

**Modo Escuro**
- Tema adaptável para conforto visual em ambientes com pouca luz.

---

## 🔄 Problema 4: Fluxo de Navegação

### 📲 Telas do Aplicativo

**Tela de Boas-Vindas / Login**
- Login por e-mail, Google ou número de telefone.
- Link para cadastro.

**Tela de Cadastro**
- Escolha de tipo de perfil: usuário ou empresa.
- Campos: nome, e-mail, senha, localização.

**Tela Principal (Home)**
- Sugestões com base na geolocalização.
- Categorias em destaque (Restaurantes, Farmácias, Mecânicos etc).
- Menu inferior: Home | Buscar | Favoritos | Perfil.

**Tela de Busca**
- Campo de pesquisa com sugestões.
- Filtros: categoria, nota, distância, preço.

**Tela de Estabelecimento**
- Nome, descrição, fotos, horário, mapa com rota.
- Botões: mensagem e ligação.
- Avaliações de outros usuários.

**Tela de Favoritos e Histórico**
- Lista de locais favoritados e recentemente acessados.

**Tela de Perfil**
- Edição de dados pessoais ou informações da empresa.
- Botão para sair do app.

## 🔧 Problema 5: Diário de Desenvolvimento

**Equipe: Ronald, João e Samuel**  
**Distribuição: Equilibrada, considerando disponibilidade de acesso aos recursos.**

### 📅 Tarefas e Responsáveis

- **Tarefa 1:** Criar estrutura inicial do projeto e instalar dependências (React Native, Firebase, etc) – **Ronald** – 14/05 ✅ (Concluída)
- **Tarefa 2:** Implementar autenticação com Firebase (e-mail, telefone, Google) – **João** – 14/05 🔄 (Em andamento)
- **Tarefa 3:** Criar tela de login e cadastro com seleção de perfil (usuário ou empresa) – **Samuel** – 21/05 ⏳ (Planejada)
- **Tarefa 4:** Desenvolver tela principal (Home) com sugestões baseadas na localização – **Ronald** – 21/05 ⏳ (Planejada)
- **Tarefa 5:** Implementar sistema de busca com filtros e sugestões – **João** – 28/05 ⏳ (Planejada)
- **Tarefa 6:** Desenvolver tela de perfil do estabelecimento – **Samuel** – 28/05 ⏳ (Planejada)
- **Tarefa 7:** Criar funcionalidades de favoritos e histórico de acessos – **Ronald** – 04/06 ⏳ (Planejada)
- **Tarefa 8:** Integrar Google Maps para localização e rotas – **João** – 04/06 ⏳ (Planejada)
- **Tarefa 9:** Criar sistema de avaliações e comentários – **Samuel** – 11/06 ⏳ (Planejada)
- **Tarefa 10:** Implementar notificações push (Firebase) – **Ronald** – 11/06 ⏳ (Planejada)
- **Tarefa 11:** Ajustar layout responsivo, modo escuro e testes finais – **Equipe** – 18/06 ⏳ (Planejada)

