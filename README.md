# Landing Page Base - React + Tailwind CSS

Uma landing page base completa, responsiva e bem estruturada com React, Vite e Tailwind CSS. Perfeita como template para iniciar seus projetos.

## 🚀 Features

- ✅ **Totalmente Responsiva** - Mobile-first design que funciona em todos os dispositivos
- ✅ **Componentes Reutilizáveis** - Estrutura modular e fácil de customizar
- ✅ **Performance Otimizada** - Vite para builds rápidos e HMR instantâneo
- ✅ **Tailwind CSS 4** - Utility-first CSS framework
- ✅ **Lucide Icons** - Ícones SVG lindos e leves
- ✅ **SEO Friendly** - Estrutura semântica e meta tags
- ✅ **Dark Mode Ready** - Fácil adicionar tema escuro

## 📋 Seções Incluídas

1. **Header/Navbar** - Navegação responsiva com menu mobile
2. **Hero Section** - Call-to-action principal com stats
3. **Features** - Grid de 6 features com ícones
4. **Pricing** - 3 planos de preço com destaque
5. **Testimonials** - Depoimentos de clientes com rating
6. **CTA Section** - Call-to-action secundário
7. **Footer** - Links, redes sociais e informações legais

## 🛠️ Instalação

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Passos

1. **Extrair o ZIP**
```bash
unzip landing-page-base.zip
cd landing-page-base
```

2. **Instalar dependências**
```bash
npm install
```

3. **Iniciar servidor de desenvolvimento**
```bash
npm run dev
```

4. **Build para produção**
```bash
npm run build
```

5. **Preview do build**
```bash
npm run preview
```

## 📁 Estrutura de Pastas

```
landing-page-base/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navbar com menu mobile
│   │   ├── Hero.jsx            # Hero section principal
│   │   ├── Features.jsx        # Grid de features
│   │   ├── Pricing.jsx         # Planos de preço
│   │   ├── Testimonials.jsx    # Depoimentos
│   │   ├── CTA.jsx             # Call-to-action
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globais
├── index.html                  # HTML template
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
└── package.json                # Dependências
```

## 🎨 Customização

### Alterar Cores Principais

Edite `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',      // Azul
      secondary: '#1e40af',    // Azul escuro
    },
  },
}
```

### Alterar Tipografia

Edite `tailwind.config.js`:
```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Sua Fonte', 'sans-serif'],
    },
  },
}
```

### Adicionar Novas Seções

1. Crie um novo arquivo em `src/components/NovaSecao.jsx`
2. Importe em `src/App.jsx`
3. Adicione o componente na ordem desejada

Exemplo:
```jsx
// src/components/NovaSecao.jsx
export default function NovaSecao() {
  return (
    <section className="py-20 bg-white">
      {/* Seu conteúdo aqui */}
    </section>
  );
}
```

## 📱 Responsividade

O projeto usa breakpoints do Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Exemplo:
```jsx
<div className="text-base md:text-lg lg:text-xl">
  Texto responsivo
</div>
```

## 🔗 Navegação Suave

Todos os links de navegação usam âncoras (`#home`, `#features`, etc.) com scroll suave configurado no CSS.

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
Edite `vite.config.js`:
```js
export default defineConfig({
  base: '/seu-repositorio/',
  plugins: [react()],
})
```

## 📦 Dependências

- **React 19** - UI library
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Utility CSS
- **Lucide React** - Icon library

## 📝 Licença

MIT License - Sinta-se livre para usar em projetos pessoais e comerciais.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir novas features
- Fazer pull requests

## 📞 Suporte

Dúvidas? Consulte a documentação:
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

---

**Feito com ❤️ para criar landing pages incríveis**
