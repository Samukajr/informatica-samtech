# 🎯 ONDE ENCONTRAR A OPÇÃO DE DOMÍNIO PERSONALIZADO

## 🔴 LINK DIRETO (Clique aqui!)

**👉 https://github.com/Samukajr/informatica-samtech/settings/pages 👈**

Clique no link acima que a página já abre direto na configuração do GitHub Pages!

---

## 📸 Guia Visual Passo a Passo

### PASSO 1: Ir para o Repositório

1. Acesse: https://github.com/Samukajr/informatica-samtech
2. Você verá a página principal do repositório

### PASSO 2: Clicar em "Settings" (Configurações)

```
┌─────────────────────────────────────────────┐
│  <> Code   Issues   Pull requests   ⚙️ Settings  │ ← Clique aqui!
└─────────────────────────────────────────────┘
```

**Localização**: Barra superior do repositório, ÚLTIMA opção à direita

**Se não aparecer "Settings":**
- Você precisa ter permissão de administrador no repositório
- Verifique se está logado na conta correta (Samukajr)

### PASSO 3: Menu Lateral - Clicar em "Pages"

Depois de clicar em Settings, você verá um menu lateral à esquerda.

```
Menu Lateral (à esquerda):
├── General
├── Access
│   ├── Collaborators
│   └── Moderation options
├── Code and automation
│   ├── Branches
│   ├── Tags
│   ├── Actions
│   ├── Webhooks
│   ├── Environments
│   └── 📄 Pages  ← CLIQUE AQUI!
```

**Localização**: Menu lateral esquerdo, seção "Code and automation"

**Procure por**: "Pages" com ícone de página 📄

### PASSO 4: Encontrar "Custom domain" (Domínio Personalizado)

Depois de clicar em "Pages", role a página até encontrar:

```
╔═══════════════════════════════════════════════╗
║  Build and deployment                         ║
║  ─────────────────────────────────────────   ║
║  Source: GitHub Actions                       ║
║                                               ║
║  Custom domain                                ║ ← AQUI!
║  ┌─────────────────────────────────────────┐ ║
║  │ www.informaticasamtech.com.br           │ ║
║  └─────────────────────────────────────────┘ ║
║  [ Save ]                                     ║
║                                               ║
║  ☐ Enforce HTTPS                              ║
╚═══════════════════════════════════════════════╝
```

**Localização**: Abaixo da seção "Build and deployment"

**O que fazer:**
1. Digite: `www.informaticasamtech.com.br`
2. Clique em **"Save"**
3. Aguarde alguns segundos
4. Marque ☑️ **"Enforce HTTPS"** quando disponível

---

## 🔍 TROUBLESHOOTING: Não Encontro a Opção!

### Problema 1: "Não vejo Settings"

**Solução:**
- Faça login com a conta **Samukajr**
- Você precisa ser dono ou admin do repositório
- Link direto: https://github.com/login

### Problema 2: "Não vejo Pages no menu"

**Solução:**
- Certifique-se de que está em **Settings** (engrenagem ⚙️)
- Role o menu lateral para baixo
- "Pages" fica na seção "Code and automation"

### Problema 3: "GitHub Pages não está ativado"

**Solução:**
Você precisa primeiro ativar o GitHub Pages:

1. Em "Source", selecione: **"GitHub Actions"**
2. Depois aparecerá a opção "Custom domain"

### Problema 4: "Custom domain não aparece"

**Causa provável:** GitHub Actions ainda não está selecionado

**Solução:**
1. Procure por "Source" na página
2. Clique no dropdown
3. Selecione: **"GitHub Actions"**
4. Salve
5. A opção "Custom domain" aparecerá logo abaixo

---

## 📝 PASSO A PASSO RESUMIDO

### Forma 1: Link Direto (Mais Fácil) ⭐

1. **Clique aqui**: https://github.com/Samukajr/informatica-samtech/settings/pages
2. Procure por "Custom domain"
3. Digite: `www.informaticasamtech.com.br`
4. Clique "Save"
5. Marque "Enforce HTTPS"

### Forma 2: Navegação Manual

1. Vá em: https://github.com/Samukajr/informatica-samtech
2. Clique em **"Settings"** (⚙️) no topo
3. No menu lateral esquerdo, clique em **"Pages"** (📄)
4. Role até "Custom domain"
5. Digite: `www.informaticasamtech.com.br`
6. Clique "Save"
7. Marque "Enforce HTTPS"

---

## 🎨 Identificação Visual

### Como saber que estou no lugar certo?

**URL deve ser:**
```
https://github.com/Samukajr/informatica-samtech/settings/pages
```

**Página deve ter:**
- Título: "GitHub Pages" no topo
- Seção "Build and deployment"
- Campo "Custom domain" com caixa de texto
- Botão "Save"
- Checkbox "Enforce HTTPS"

---

## 🔐 Permissões Necessárias

Para configurar o domínio personalizado, você precisa:

✅ Ser o dono do repositório (Samukajr)
✅ Ou ter permissões de administrador
✅ Estar logado na conta correta

**Verificar conta:**
- Canto superior direito do GitHub
- Deve mostrar: "Samukajr"

---

## 📋 Checklist de Configuração

Marque cada item após completar:

- [ ] Acessei: https://github.com/Samukajr/informatica-samtech/settings/pages
- [ ] Encontrei a seção "Custom domain"
- [ ] Digitei: `www.informaticasamtech.com.br`
- [ ] Cliquei em "Save"
- [ ] Aguardei mensagem de confirmação
- [ ] Marquei "Enforce HTTPS" (quando disponível)
- [ ] Configurei DNS (CNAME: www → samukajr.github.io)

---

## 🎯 O Que Acontece Depois

1. **Imediatamente**: GitHub salva a configuração
2. **Em segundos**: GitHub verifica DNS
3. **Se DNS OK**: Aparece ✅ "DNS check successful"
4. **Se DNS não OK**: Aparece ⚠️ "DNS check unsuccessful"

### Se aparecer erro de DNS:

Significa que você ainda não configurou o DNS no seu provedor de domínio.

**Configure o DNS adicionando:**
```
Tipo: CNAME
Nome: www
Valor: samukajr.github.io
```

**Veja o guia completo**: [CONFIGURAR-DOMINIO.md](CONFIGURAR-DOMINIO.md)

---

## 🆘 Ainda Não Conseguiu?

### Opção 1: Compartilhe Screenshot

Tire um print da tela mostrando onde você está e o que está vendo.

### Opção 2: Verifique Acesso

Execute estes comandos no terminal:

```bash
# Verificar se você tem acesso
gh repo view Samukajr/informatica-samtech

# Verificar permissões
gh api repos/Samukajr/informatica-samtech | grep -A 5 permissions
```

### Opção 3: Use gh CLI

Se tiver o GitHub CLI instalado:

```bash
# Configurar domínio via CLI
gh api --method PUT repos/Samukajr/informatica-samtech/pages \
  -f cname='www.informaticasamtech.com.br'
```

---

## 📞 Suporte

**GitHub Docs**: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

**Status GitHub**: https://www.githubstatus.com (verificar se GitHub está funcionando)

---

## 🎉 Resumo Final

**Link Direto (Use este!):**
👉 **https://github.com/Samukajr/informatica-samtech/settings/pages** 👈

**O que fazer:**
1. Clique no link acima
2. Procure "Custom domain"
3. Digite: `www.informaticasamtech.com.br`
4. Save
5. Pronto! ✅

---

**Atualizado**: 13 de Fevereiro de 2024
