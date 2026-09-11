# Imagens da Lava10 Lavanderia Automática

Esta pasta armazena as fotos e recursos visuais do site.

### 1. Fachada Matriz (Centro - Rua Andrade Neves, 1620)
- Vetor oficial: `/public/images/fachada-andrade-neves.svg`
- Foto real (JPG/PNG/WEBP): `/public/images/fachada-andrade-neves.jpg` ou `/public/images/fachada-matriz.jpg`
- Local de exibição: Hero (início da página) e Card da Unidade Principal em "Nossas Unidades".

### 2. Fachada Filial (Zona Norte - 24 Horas)
- Vetor oficial: `/public/images/fachada-zona-norte.svg`
- Foto real (JPG/PNG/WEBP): `/public/images/fachada-zona-norte.jpg` ou `/public/images/fachada-filial.jpg`
- Local de exibição: Card da Filial Zona Norte em "Nossas Unidades".

### Sistema Inteligente de Carregamento (`UnitImage`):
O componente `UnitImage` tenta carregar primeiramente a foto real local (`.jpg` / `.png` / `.webp`) e, se o arquivo ainda não estiver presente na pasta, exibe instantaneamente a reprodução vetorial oficial de alta fidelidade baseada na fachada física real da Lava10 (com os letreiros, vitrines, equipamentos e adesivos reais de R$ 15,90 e OMO/Comfort), garantindo visual perfeito sem links quebrados!
