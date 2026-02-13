# 📥 Como Trazer Desenvolvimento do GitHub

Este guia explica como trazer (pull/fetch) mudanças do GitHub para o seu repositório local.

## 🎯 Objetivo

Quando há desenvolvimento sendo feito no GitHub (em outras branches ou por outros colaboradores), você precisa trazer essas mudanças para o seu computador local para trabalhar com a versão mais atualizada do código.

## 📋 Pré-requisitos

- Git instalado no seu computador
- Repositório clonado localmente (se não tiver, veja: [COMO-ABRIR-VSCODE.md](COMO-ABRIR-VSCODE.md))

## 🚀 Métodos para Trazer Mudanças

### Método 1: Atualizar a Branch Atual (Mais Comum)

Se você está trabalhando em uma branch e quer trazer as últimas mudanças do GitHub:

```bash
# 1. Verificar em qual branch você está
git branch

# 2. Trazer as mudanças mais recentes
git pull origin nome-da-branch
```

**Exemplo prático:**
```bash
# Se você está na branch main
git pull origin main

# Se você está em outra branch
git pull origin copilot/create-modern-responsive-site
```

### Método 2: Buscar Todas as Branches (Fetch)

Para ver todas as mudanças disponíveis sem aplicá-las imediatamente:

```bash
# 1. Buscar todas as atualizações de todas as branches
git fetch --all

# 2. Ver todas as branches disponíveis (incluindo remotas)
git branch -a

# 3. Ver o que mudou
git log --oneline --graph --all -10
```

### Método 3: Trazer Mudanças de Outra Branch

Se você quer trazer mudanças de uma branch específica para a sua branch atual:

```bash
# 1. Verificar branches disponíveis no GitHub
git fetch --all
git branch -r

# 2. Trazer as mudanças da branch desejada
git merge origin/nome-da-branch-de-desenvolvimento

# Exemplo real deste projeto:
git merge origin/copilot/create-modern-responsive-site
```

### Método 4: Trocar para Outra Branch

Se você quer trabalhar em uma branch diferente que existe no GitHub:

```bash
# 1. Buscar todas as branches
git fetch --all

# 2. Criar uma branch local baseada na branch remota
git checkout -b nome-da-branch origin/nome-da-branch

# Ou apenas trocar para uma branch que já existe localmente
git checkout nome-da-branch
git pull
```

## ⚠️ Resolvendo Conflitos

Se houver conflitos ao fazer merge, você verá uma mensagem como:

```
CONFLICT (content): Merge conflict in arquivo.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**Como resolver:**

1. Abra os arquivos com conflito no VSCode
2. Você verá marcadores como:
```
<<<<<<< HEAD
seu código atual
=======
código vindo do GitHub
>>>>>>> origin/branch-name
```

3. Escolha qual código manter (ou combine ambos)
4. Remova os marcadores de conflito (`<<<<<<<`, `=======`, `>>>>>>>`)
5. Salve o arquivo
6. Adicione e faça commit:
```bash
git add .
git commit -m "Resolve conflitos de merge"
```

## 🔍 Comandos Úteis para Diagnóstico

```bash
# Ver status atual do repositório
git status

# Ver histórico de commits
git log --oneline -10

# Ver diferenças entre sua versão e a remota
git diff origin/main

# Ver todas as branches (locais e remotas)
git branch -a

# Ver informações sobre o repositório remoto
git remote -v

# Ver quais arquivos foram modificados em commits recentes
git log --name-only --oneline -5
```

## 📚 Casos de Uso Comuns

### Caso 1: Alguém fez mudanças no GitHub e você quer atualizá-las

```bash
git pull origin main
```

### Caso 2: Você quer ver o que há de novo sem aplicar as mudanças ainda

```bash
git fetch --all
git log origin/main --oneline -10
```

### Caso 3: Existe uma branch de desenvolvimento com novidades

```bash
git fetch --all
git merge origin/nome-da-branch-desenvolvimento
```

### Caso 4: Você quer voltar atrás em mudanças locais e usar a versão do GitHub

```bash
# CUIDADO: Isso descarta suas mudanças locais!
git fetch --all
git reset --hard origin/main
```

## 🎓 Fluxo de Trabalho Recomendado

1. **Antes de começar a trabalhar:**
   ```bash
   git pull origin main
   ```

2. **Trabalhe e faça commits locais:**
   ```bash
   git add .
   git commit -m "Minha mudança"
   ```

3. **Antes de enviar suas mudanças:**
   ```bash
   git pull origin main  # Trazer mudanças recentes
   # Resolver conflitos se houver
   git push origin main  # Enviar suas mudanças
   ```

## 🆘 Situações Específicas

### "Não consigo fazer pull, Git diz que há mudanças não commitadas"

```bash
# Opção 1: Fazer commit das suas mudanças
git add .
git commit -m "WIP: Trabalho em progresso"
git pull

# Opção 2: Guardar suas mudanças temporariamente
git stash
git pull
git stash pop  # Recuperar suas mudanças
```

### "Quero descartar todas as minhas mudanças locais"

```bash
# CUIDADO: Isso apaga tudo que não foi commitado!
git reset --hard HEAD
git clean -fd
git pull
```

### "Quero ver o que mudou antes de trazer as mudanças"

```bash
git fetch origin
git diff HEAD origin/main
```

## 🔗 Links Úteis

- [Guia de como clonar o repositório](COMO-ABRIR-VSCODE.md)
- [Scripts de automação](SCRIPTS-AUTOMACAO.md)
- [Guia de deploy](DEPLOY-AUTOMATICO.md)
- [Documentação oficial do Git](https://git-scm.com/doc)

## 💡 Dicas Importantes

1. **Sempre faça backup** antes de comandos destrutivos (reset, clean)
2. **Faça commits frequentes** para não perder trabalho
3. **Use branches** para desenvolvimento de novas features
4. **Comunique-se** com a equipe sobre mudanças grandes
5. **Leia as mensagens do Git** - elas geralmente explicam o que fazer

## 🎯 TL;DR (Resumo Rápido)

```bash
# Para trazer mudanças da branch principal:
git pull origin main

# Para ver o que há de novo sem aplicar:
git fetch --all

# Para trazer de uma branch específica:
git merge origin/nome-da-branch

# Se houver conflitos, resolva manualmente e depois:
git add .
git commit -m "Resolve conflitos"
```

---

**❓ Dúvidas?** Consulte a documentação do Git ou entre em contato com a equipe!
