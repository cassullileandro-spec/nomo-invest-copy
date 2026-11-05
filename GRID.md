# Contrato de layout No.Mo Invest

Aplicar a skill `layout-grid-responsivo` nas alterações futuras. A instrução mais recente do usuário prevalece. Fonte de publicação: este diretório, GitHub Pages. Direção e mapa de imagens em [DESIGN.md](DESIGN.md).

## Sistema efetivo

| Faixa CSS | Container | Colunas-guia | Gutter / gap dos cards | Padding dos cards | Padding de seção |
|---|---|---|---|---|---|
| Até 767 px | largura menos 32 px | 4 | 16 px | 16 px | 64 px por lado |
| 768–1023 px | largura menos 48 px | 8 | 24 px | 24 px | 80 px por lado |
| 1024 px ou mais | min(1200 px, largura menos 64 px) | 12 | 24 px | 24 px | 96 px por lado |

Base de 4 px, ritmo principal de 8 px. Bordas de 1 px e proporções fluidas são exceções intencionais. Referência fixa Y=0, linhas fortes de 64 px e finas de 8 px. Não forçar letras ou caixas a coincidir com toda linha.

Título/texto: 16 px. Texto/ação: 24 px. Cabeçalho/coleção: 48 px (32 no celular). Cards com raio 24 px, mídia interna 16 px; no celular, 20 e 12 px. Paleta preto suave, branco e cinza. Placeholder neutro com descrição acessível, sem legenda visual pequena.

## Composição

- Hero: título em 7 colunas, introdução em 4 começando na coluna 9; tablet 5/3, celular empilhado. Panorama abaixo. Padding superior 64 px (40 no celular), tira inferior 24 px. Rodapé com blocos de 32 e 24 px; demais seções seguem o padding regular.
- Modelo: card vertical de 4 colunas ocupa duas linhas; dois horizontais de 8 colunas. No tablet, duas colunas iguais; no celular, três cards empilhados. `#modelo` e `#dinamica` permanecem seções independentes.
- Dinâmica: texto em 5 colunas e sequência em 6, começando na coluna 7. Tablet 4/4, celular empilhado. Círculos indicam passos, não tags de seção.
- Cabeçalhos divididos: 6/5 colunas, texto começando na coluna 8; tablet 4/4, celular empilhado. Cabeçalhos centrados limitados a 792 px, alinhados à esquerda no celular.
- Aplicações: três colunas no desktop, duas de 600 a 1023 px e uma abaixo de 600. Deslocamento editorial de 40 px na coluna central do desktop, 32 px nos pares do tablet, zero no celular. Proporções iguais dentro de cada faixa.
- Módulos: mídia em 7 colunas e duas características em 5; tablet 4/4; celular empilhado. Mídia acompanha a altura natural do conjunto, sem esticar texto.
- Jornada: três passos equivalentes no desktop, linhas internas compartilhadas por subgrid para alinhar títulos e descrições. Tablet e celular usam sequência vertical. Círculos de 40 px (32 no celular).
- Operação: mídia em 5 colunas, seis serviços em 7; tablet 3/5; celular empilhado. Serviços em duas colunas a partir de 600 px e uma abaixo. Gap interno 16 px.
- Estimativas: dois cards iguais, uma coluna no celular. Padding interno 32 px no desktop e tablet, 24 no celular. Contexto junto dos valores em corpo legível.
- Simulador: configuração e resultado em 6/6 colunas no desktop, 4/4 no tablet, empilhados no celular. Formulário inclui prévia de mídia. Padding 32/24/16 px. Campos em duas colunas no desktop e de 600 a 767 px; uma nas demais faixas. Alturas naturais, sem truncar valores ou estados condicionais.
- Depoimentos: três cards no desktop, um por linha no tablet/celular; assinatura alinhada na base. Círculos neutros decorativos não representam fotos reais.
- FAQ: texto em 5 colunas, perguntas em 6 a partir da coluna 7; tablet 3/5; celular empilhado. Fechamento centralizado com uma ação principal.

## Tipografia e controles

Arial/Helvetica. H1 56/64 px no desktop e 64/72 a partir de 1440; tablet 48/56; celular 40/48. H2 48/56, 40/48 e 32/40. Títulos de itens 24/32. Corpo 16/24, auxiliares 14/24. Depoimentos e responsabilidades 20/28. Valores do simulador 32/40; estimativa 32/40 (28/36 no celular).

Botões e CTAs: mínimo externo 40 px, rótulo 14/24, gap 8, borda 1 e padding vertical 7. Cápsula com seta circular de 24 px. Seletores nativos 40 px e texto 16/24. Controles podem crescer com zoom ou quebra legítima; nunca truncar. CTA do cabeçalho omitido abaixo de 600 px; CTAs no conteúdo continuam disponíveis.

Títulos com `text-wrap: balance`, sem redução isolada de fonte para caber. Quebra editorial após “Um ativo real.” e espaço inseparável em “em andamento” para prevenir a viúva observada em 320 px. `text-box: trim-both cap alphabetic` como melhoria progressiva em títulos, parágrafos e assinaturas, com fallback natural. Não reintroduzir letras miúdas ou tags numeradas de seção.

## Revisão realizada em 05/11/2026

Versão anterior recuperável: `78179c131acda7754738fc7161fb0c0574cfd347`. Evidências locais em `../output/redesign/`.

- Geometria e linhas dos 31 headings em 320, 390, 599, 600, 767, 768, 1023, 1024, 1280 e 1440 px. Sem overflow horizontal. Uma viúva em 320 px corrigida e revalidada. CTAs em 40 px com rótulos 14/24.
- Página completa inspecionada em 390, 768 e 1440 px, incluindo transições e rodapé. Antes/depois em 390 e 1440 px. Parágrafos das três etapas compartilham o mesmo eixo vertical no desktop.
- Inspetor `?grid=1`: em 1440 px, container 1200, margens 120, 12 colunas, gaps 24, padding regular 96. Visita normal não carrega o inspetor. Recarregar após mudar a largura para recalibrar as guias.
- Menu mobile abre e fecha ao navegar. FAQ expande. Simulador verificado com dois escritórios nível 1 (R$ 92.000 / R$ 2.132), módulos novos sem renda e WC sob consulta, e cinco sanitários nível 2 sem contrato. Sem mensagens enviadas.
- Quatro testes existentes de cálculo aprovados, incluindo os 50 cenários admitidos e entradas inválidas. Copy e lógica preservadas nesta revisão.
- Limites: zoom nativo de 200% e outros navegadores não verificados nesta revisão. Placeholders precisam de imagens aprovadas antes da versão visual definitiva.
