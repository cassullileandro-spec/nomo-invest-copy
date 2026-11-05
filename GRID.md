# Contrato de layout No.Mo Invest

Regra: aplicar a skill `layout-grid-responsivo` nas alterações futuras. Ela não substitui decisões mais recentes do usuário. Código publicado: este diretório; sem reconstrução em outra plataforma.

## Sistema efetivo

| Faixa CSS | Container | Colunas-guia | Gutter | Gap dos cards | Padding dos cards | Padding de seção |
|---|---|---|---|---|---|---|
| Até 767 px | largura disponível menos 32 px | 4 | 16 px | 16 px | 16 px | 64 px por lado |
| 768–1023 px | largura disponível menos 48 px | 8 | 24 px | 24 px | 24 px | 80 px por lado |
| 1024 px ou mais | min(1200 px, largura disponível menos 64 px) | 12 | 24 px | 24 px | 24 px | 96 px por lado |

Base dimensional: 4 px; intervalos principais: 8 px. Bordas de 1 px e dimensões fluidas proporcionais são exceções intencionais. Referência horizontal fixa Y=0, linhas fortes de 64 px, finas de 8 px. Não forçar caixas ou letras a coincidir com toda linha.

- Título/texto e parágrafos: 16 px. Texto/ação: 24 px. Cabeçalho/coleção: 48 px (32 no celular).
- Texto livre alinhado ao container. Hero: 7/5 colunas em desktop. Blocos editoriais: 5 colunas de texto e 6 colunas de conteúdo, este iniciando na coluna 7. Split headings: 6/5, texto na coluna 8. Tablets recompõem esses spans; celular empilha mantendo a ordem do DOM.
- Setores: 3 cards a partir de 1024 px, 2 de 600 a 1023 px e 1 abaixo de 600 px. O nome do setor permanece legível, sem dividir palavras artificialmente.
- Cards de conteúdo: 2 colunas a partir de 768 px e 1 abaixo. Depoimentos: 3 em desktop e 1 em tablet/celular. Altura natural do conteúdo, sem min-height artificial.
- Exceção funcional: matriz de serviços conserva divisórias de 1 px em vez de gaps de cards. Não é um bento.
- Hero: padding superior 64 px (40 no celular); rodapé interno com 24 px. Rodapé: blocos de 32 e 24 px. Demais seções usam a família regular.
- `#modelo` e `#dinamica` são seções independentes, com heading, conteúdo e padding próprios. A primeira explica o ativo adquirido, sua finalidade e administração; a segunda explica a origem da receita, as condições contratuais e a possibilidade de nova locação. Separador neutro entre elas.

## Tipografia e controles

Arial/Helvetica preservadas. Papéis explícitos: H1 56/64 px em desktop e 64/72 a partir de 1440, 48/56 no tablet, 40/48 no celular. H2 48/56, 40/48 e 32/40 respectivamente. Títulos de item 24/32. Corpo 16/24 e auxiliares 14/24. Notas em letra miúda foram removidas por solicitação do usuário; não reintroduzir legendas de 12 px. Condições essenciais ficam na copy principal em 16/24.

Botões e CTAs: mínimo externo 40 px, rótulo 14/24, gap 8, padding horizontal 16, borda 1, padding vertical 7, raio 6. No zoom ou caso de quebra legítima, podem crescer; não truncar. Ações empilham conforme largura. O CTA do cabeçalho é omitido abaixo de 600 px para caber com marca e menu; os CTAs do conteúdo permanecem disponíveis.

Títulos com quebra automática e `text-wrap: balance`; não reduzir uma fonte isolada para encaixar o texto. `text-box: trim-both cap alphabetic` é melhoria progressiva compartilhada em títulos, parágrafos e nomes de depoimentos. Fallback natural em navegadores sem suporte. Não recortar acentos e descendentes.

## Inspeção e publicação

`?grid=1` ativa o inspetor da skill, apenas em revisão. Colunas discretas, linhas fortes e limites/padding de seções; demais camadas desligadas. Ele não altera o conteúdo e não carrega na visita normal. A referência é calibrada no carregamento; após mudar a largura, recarregar a revisão para recalibrar ao breakpoint antes de fixar as guias.

Validar a página toda, headings, tabela, menu/FAQ e navegação, antes/depois nos mesmos viewports, ambos os lados de 600/768/1024 e zoom. Registrar larguras efetivamente testadas. O commit `12353c95bdfcd66918c8ff8997436a22c08d1a2d` preserva a versão anterior. Capturas locais em `../output/grid/`. Versionar CSS/JS alterados e conferir o link publicado.

## Verificação realizada em 05/11/2026

- Geometria e linhas de todos os 40 headings: 320, 390, 599, 600, 767, 768, 1023, 1024, 1280 e 1440 px. Sem overflow horizontal e sem palavra única na última linha de headlines multilinha. CTAs medidos em 40 px, fonte/entrelinha 14/24.
- Página inteira, transições e rodapé inspecionados visualmente em capturas de 1280 e 390 px, com antes/depois no mesmo viewport. Aplicado NBSP apenas em “Diferentes aplicações.” para corrigir a viúva demonstrada no desktop.
- Menu abre e fecha ao navegar no celular; FAQ expande. Na visita normal o inspetor não existe no DOM. Em `?grid=1`, mede corretamente margem 40, container 1200 e 12 colunas no viewport 1280, preservando as alturas das seções.
- Teste Python do visor e fixtures do inspetor nos modos ao vivo, captura e seletor inválido: PASS.
- Limite: o atalho de zoom do navegador integrado não alterou a escala. Zoom nativo de 200% não foi verificado; não confundir os testes de largura com esse teste. Compatibilidade não foi estendida a outros navegadores.

## Revisão editorial

Copy reescrita para despertar interesse pela apresentação, mantendo o sistema visual. Removidas seções repetitivas `#fundamentos` e `#possibilidades`; estimativa em dois cards, sem comparação entre produtos. Os registros de 40 headings e tabela acima correspondem à versão anterior.
