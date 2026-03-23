import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { regioes } from '../data/locais.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PAGES_DIR = path.join(__dirname, '../pages/locais');

if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const formatarNomeComponente = (bairro) => {
  return bairro
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-zA-Z0-9 ]/g, "") 
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

let contador = 0;

regioes.forEach(regiao => {
  regiao.bairros.forEach(bairro => {
    const nomeComponente = `DesentupidoraEm${formatarNomeComponente(bairro)}`;
    const fileName = `${nomeComponente}.jsx`;
    const filePath = path.join(PAGES_DIR, fileName);

    // Cria um arquivo minúsculo que IMPORTA e USA o seu Template
    const conteudo = `
import React from 'react';
import TemplateBairro from '../../templates/TemplateBairro';

export default function ${nomeComponente}() {
  return <TemplateBairro bairro="${bairro}" zona="${regiao.zona}" />;
}
`;

    fs.writeFileSync(filePath, conteudo.trim());
    contador++;
  });
});

console.log(`\n🚀 Sucesso! ${contador} páginas geradas consumindo o TemplateBairro.`);