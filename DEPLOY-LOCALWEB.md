# 🚀 Guia de Deploy para Localweb - informaticasamtech.com.br

## 📋 Visão Geral

Este guia explica **passo a passo** como fazer o upload do site da Informática Samtech para o domínio **informaticasamtech.com.br** hospedado na **Localweb**.

---

## 📦 Arquivos que Devem Ser Enviados

Você precisa enviar **TODOS** estes arquivos e pastas para o servidor:

```
✅ index.html          (arquivo principal do site)
✅ css/                (pasta com os estilos)
   └── style.css
✅ js/                 (pasta com JavaScript)
   └── script.js
```

**❌ NÃO envie estes arquivos:**
- `.git/` (pasta do Git)
- `.gitignore`
- `README.md`
- `ACESSO.md`
- `DEPLOY-LOCALWEB.md`

---

## 🔧 Método 1: Upload via FTP (Recomendado)

### Passo 1: Obter suas Credenciais FTP da Localweb

1. Acesse o **Painel de Controle da Localweb**: https://painel.localweb.com.br
2. Faça login com seu usuário e senha
3. Procure por **"FTP"** ou **"Contas FTP"**
4. Anote as seguintes informações:
   - **Servidor FTP**: geralmente `ftp.informaticasamtech.com.br` ou um endereço fornecido
   - **Usuário FTP**: seu usuário (pode ser o mesmo do painel ou específico)
   - **Senha FTP**: sua senha
   - **Porta**: geralmente **21** (FTP normal) ou **22** (SFTP)

### Passo 2: Baixar e Instalar o FileZilla (Cliente FTP Gratuito)

1. Acesse: https://filezilla-project.org/download.php?type=client
2. Baixe a versão para seu sistema operacional (Windows, Mac ou Linux)
3. Instale o programa

### Passo 3: Conectar ao Servidor via FileZilla

1. Abra o **FileZilla**
2. No topo da tela, preencha:
   - **Host**: `ftp.informaticasamtech.com.br` (ou o servidor fornecido)
   - **Nome de usuário**: seu usuário FTP
   - **Senha**: sua senha FTP
   - **Porta**: 21 (ou 22 se for SFTP)
3. Clique em **Conexão Rápida**

### Passo 4: Localizar a Pasta Correta no Servidor

Após conectar, você verá o servidor à direita. Procure pela pasta onde os arquivos do site devem ficar:

**Pastas comuns na Localweb:**
- `public_html/` ← **MAIS COMUM** ✅
- `www/`
- `htdocs/`
- Nome do seu domínio (ex: `informaticasamtech.com.br/`)

⚠️ **IMPORTANTE**: Os arquivos devem ficar **DENTRO** desta pasta pública!

### Passo 5: Fazer o Upload dos Arquivos

**No seu computador (lado esquerdo do FileZilla):**
1. Navegue até a pasta onde você salvou o projeto `informatica-samtech`

**No servidor (lado direito do FileZilla):**
1. Entre na pasta `public_html/` (ou equivalente)
2. **LIMPE** os arquivos antigos se existirem (faça backup antes se necessário)

**Fazer o upload:**
1. Selecione TODOS os arquivos e pastas do projeto:
   - `index.html`
   - `css/` (pasta inteira)
   - `js/` (pasta inteira)
2. Arraste para o lado direito (servidor) ou clique com botão direito → **Upload**
3. Aguarde o upload completar (pode levar alguns minutos)

### Passo 6: Verificar a Estrutura no Servidor

Após o upload, a estrutura no servidor deve estar assim:

```
public_html/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

---

## 🌐 Método 2: Upload via Painel de Controle (Gerenciador de Arquivos)

Se você preferir não usar FTP, pode fazer o upload pelo painel da Localweb:

### Passo 1: Acessar o Gerenciador de Arquivos

1. Acesse: https://painel.localweb.com.br
2. Faça login
3. Procure por **"Gerenciador de Arquivos"** ou **"File Manager"**
4. Entre na pasta `public_html/` (ou equivalente)

### Passo 2: Fazer Upload

1. Clique em **"Upload"** ou **"Enviar Arquivos"**
2. Selecione os arquivos:
   - `index.html`
3. Faça upload do `index.html` primeiro

### Passo 3: Criar as Pastas e Enviar os Arquivos

1. Crie uma pasta chamada **`css`**
2. Entre nela e faça upload do arquivo `style.css`
3. Volte e crie uma pasta chamada **`js`**
4. Entre nela e faça upload do arquivo `script.js`

### Passo 4: Verificar as Permissões

- Certifique-se que as permissões dos arquivos estão corretas
- Geralmente: **644** para arquivos e **755** para pastas
- Isso pode ser ajustado no gerenciador de arquivos (botão direito → Permissões)

---

## ✅ Checklist de Verificação Pós-Deploy

Após fazer o upload, verifique:

- [ ] Acesse **http://informaticasamtech.com.br** no navegador
- [ ] Acesse também **https://informaticasamtech.com.br** (com SSL)
- [ ] A página inicial carrega corretamente?
- [ ] O menu de navegação funciona?
- [ ] Os cards de serviços aparecem?
- [ ] O formulário de contato está visível?
- [ ] O design está correto (cores, fontes, layout)?
- [ ] Teste em dispositivos móveis também!

### Se algo não funcionar:

1. **CSS ou JS não carregam:**
   - Verifique se as pastas `css/` e `js/` estão no lugar certo
   - Verifique as permissões dos arquivos (devem ser 644)
   
2. **Erro 404 (Página não encontrada):**
   - Certifique-se que `index.html` está na pasta `public_html/`
   - Verifique se o nome do arquivo está correto (lowercase)
   
3. **Fontes ou ícones não aparecem:**
   - Isso é normal! As fontes (Google Fonts) e ícones (Font Awesome) são carregados da internet via CDN
   - Se seu servidor bloquear estes recursos, entre em contato com a Localweb

---

## 🔒 Configurando SSL (HTTPS)

A Localweb oferece certificado SSL gratuito. Para ativar:

1. Acesse o **Painel de Controle da Localweb**
2. Procure por **"SSL"** ou **"Certificado SSL"**
3. Ative o **Let's Encrypt** (gratuito)
4. Aguarde a instalação (pode levar até 24 horas)
5. Force o redirecionamento HTTP → HTTPS se disponível

---

## 📱 Configurações Adicionais Recomendadas

### Arquivo .htaccess (Opcional)

Crie um arquivo `.htaccess` na pasta `public_html/` com este conteúdo para melhorar o desempenho:

```apache
# Forçar HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Habilitar compressão
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Configurar cache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
</IfModule>
```

---

## 🆘 Problemas Comuns e Soluções

### Problema 1: "Site não aparece"
**Solução:**
- Aguarde alguns minutos (propagação de DNS)
- Limpe o cache do navegador (Ctrl + F5)
- Teste em modo anônimo do navegador

### Problema 2: "Erro 500 - Internal Server Error"
**Solução:**
- Verifique as permissões dos arquivos
- Se criou um `.htaccess`, remova-o temporariamente para testar

### Problema 3: "Layout quebrado / sem estilos"
**Solução:**
- Verifique se a pasta `css/` foi enviada corretamente
- Abra o DevTools do navegador (F12) e veja se há erros

### Problema 4: "Formulário não funciona"
**Solução:**
- O formulário atual é uma simulação (não envia emails de verdade)
- Para funcionar, você precisará configurar um backend ou usar um serviço como FormSpree, Formsubmit.co ou integrar com a API da Localweb

---

## 📞 Suporte da Localweb

Se tiver problemas técnicos com o servidor:

- **Telefone**: 0800 000 2500
- **Chat Online**: Disponível no painel de controle
- **Email**: suporte@localweb.com.br
- **Base de Conhecimento**: https://ajuda.localweb.com.br

---

## 🎯 Resumo Rápido

**Para fazer o deploy:**

1. ✅ Obtenha credenciais FTP do painel da Localweb
2. ✅ Instale FileZilla
3. ✅ Conecte ao FTP da Localweb
4. ✅ Navegue até `public_html/`
5. ✅ Envie: `index.html`, `css/`, `js/`
6. ✅ Acesse informaticasamtech.com.br
7. ✅ Teste todas as funcionalidades

**Arquivos para enviar:**
- `index.html`
- `css/style.css`
- `js/script.js`

**Estrutura final no servidor:**
```
public_html/
├── index.html
├── css/style.css
└── js/script.js
```

---

## 🎉 Pronto!

Seu site estará online em **informaticasamtech.com.br**!

Se precisar de ajuda, consulte este guia ou entre em contato com o suporte da Localweb.

---

**Última atualização**: Fevereiro 2024  
**Desenvolvido com ❤️ para Informática Samtech**
