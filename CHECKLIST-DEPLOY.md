# ✅ Checklist de Deploy - Localweb

Use este checklist para garantir que você fez tudo corretamente:

## Antes do Upload

- [ ] Tenho acesso ao painel da Localweb (https://painel.localweb.com.br)
- [ ] Tenho as credenciais FTP (servidor, usuário, senha)
- [ ] Baixei e instalei o FileZilla (https://filezilla-project.org)
- [ ] Fiz backup dos arquivos antigos do servidor (se existirem)

## Arquivos para Enviar

Marque cada arquivo/pasta após enviar:

- [ ] `index.html` (arquivo principal)
- [ ] `css/style.css` (pasta css com o arquivo style.css dentro)
- [ ] `js/script.js` (pasta js com o arquivo script.js dentro)

## Estrutura no Servidor

Após o upload, verifique se ficou assim no servidor:

```
public_html/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

- [ ] Arquivos estão em `public_html/` (ou pasta equivalente)
- [ ] Pasta `css/` existe e contém `style.css`
- [ ] Pasta `js/` existe e contém `script.js`
- [ ] Permissões: arquivos com 644, pastas com 755

## Testes Após Deploy

- [ ] Site abre em http://informaticasamtech.com.br
- [ ] Site abre em https://informaticasamtech.com.br (com SSL)
- [ ] Página inicial carrega completamente
- [ ] Menu de navegação funciona
- [ ] Seção "Sobre Nós" aparece corretamente
- [ ] Cards de serviços (5 cards) aparecem
- [ ] Formulário de contato está visível
- [ ] Footer aparece corretamente
- [ ] Cores e design estão corretos
- [ ] Testei no celular (responsivo funciona)
- [ ] Limpei cache do navegador e testei novamente

## Configurações Extras (Opcional)

- [ ] SSL/HTTPS configurado e funcionando
- [ ] Redirecionamento HTTP → HTTPS ativo
- [ ] Arquivo `.htaccess` criado (se necessário)

## Problemas?

Se algo não funcionar:
- Consulte o arquivo **DEPLOY-LOCALWEB.md** para soluções
- Entre em contato com suporte da Localweb: 0800 000 2500

---

**Data do Deploy**: ___/___/______

**Feito por**: _________________

**Status**: ⬜ Em andamento  ⬜ Concluído ✅
