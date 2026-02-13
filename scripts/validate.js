#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('✅ Validando configuração do projeto...\n');

const checks = [
  {
    name: 'Arquivo CNAME',
    check: () => {
      const cnameFile = path.join(__dirname, '..', 'CNAME');
      if (!fs.existsSync(cnameFile)) {
        return { ok: false, message: 'Arquivo CNAME não encontrado!' };
      }
      const content = fs.readFileSync(cnameFile, 'utf8').trim();
      if (content === 'www.informaticasamtech.com.br') {
        return { ok: true, message: `CNAME configurado: ${content}` };
      }
      return { ok: false, message: `CNAME incorreto: ${content}` };
    }
  },
  {
    name: 'Arquivo index.html',
    check: () => {
      const indexFile = path.join(__dirname, '..', 'index.html');
      if (!fs.existsSync(indexFile)) {
        return { ok: false, message: 'index.html não encontrado!' };
      }
      return { ok: true, message: 'index.html existe' };
    }
  },
  {
    name: 'Pasta css',
    check: () => {
      const cssDir = path.join(__dirname, '..', 'css');
      if (!fs.existsSync(cssDir)) {
        return { ok: false, message: 'Pasta css não encontrada!' };
      }
      const styleFile = path.join(cssDir, 'style.css');
      if (!fs.existsSync(styleFile)) {
        return { ok: false, message: 'style.css não encontrado!' };
      }
      return { ok: true, message: 'CSS configurado' };
    }
  },
  {
    name: 'Pasta js',
    check: () => {
      const jsDir = path.join(__dirname, '..', 'js');
      if (!fs.existsSync(jsDir)) {
        return { ok: false, message: 'Pasta js não encontrada!' };
      }
      const scriptFile = path.join(jsDir, 'script.js');
      if (!fs.existsSync(scriptFile)) {
        return { ok: false, message: 'script.js não encontrado!' };
      }
      return { ok: true, message: 'JavaScript configurado' };
    }
  },
  {
    name: 'GitHub Actions',
    check: () => {
      const workflowFile = path.join(__dirname, '..', '.github', 'workflows', 'deploy.yml');
      if (!fs.existsSync(workflowFile)) {
        return { ok: false, message: 'Workflow de deploy não encontrado!' };
      }
      return { ok: true, message: 'Deploy automático configurado' };
    }
  }
];

let allOk = true;

checks.forEach(({ name, check }) => {
  const result = check();
  const icon = result.ok ? '✅' : '❌';
  console.log(`${icon} ${name}`);
  console.log(`   ${result.message}\n`);
  if (!result.ok) allOk = false;
});

if (allOk) {
  console.log('🎉 Tudo configurado corretamente!\n');
  console.log('📝 Próximos passos:');
  console.log('   1. Configure o DNS (veja ERRO-DNS-SOLUCAO.md)');
  console.log('   2. Rode: npm run check-dns');
  console.log('   3. Aguarde propagação (1-4 horas)');
  console.log('   4. Site estará em: https://www.informaticasamtech.com.br\n');
} else {
  console.log('⚠️  Alguns arquivos estão faltando ou incorretos.\n');
}

process.exit(allOk ? 0 : 1);
