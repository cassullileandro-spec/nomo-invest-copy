# No.Mo Invest — aprovação da copy

Página para revisão com o cliente, em preto suave, branco e cinza, com espaços reservados para imagens.

A fonte editorial da narrativa é `Apresentação No.Mo Invest.pdf`, de 17 páginas, fornecida pelo cliente. O simulador utiliza também `TABELA VALORES NO.MO INVEST.pdf`, de 14 páginas, enviado depois pelo usuário. Seções anotadas no HTML com `data-source-pages`, sem exibir essas referências na página. Interface e chamadas de navegação adaptadas para a web.

## Direção editorial

O site apresenta a proposta e desperta interesse em receber a apresentação; não reproduz o deck página por página. Fatos e condições vêm do PDF, com redação própria para a web. Depoimentos permanecem literais.

- Abertura: benefício e funcionamento em poucas linhas. O ticket genérico de R$ 40 mil da apresentação foi retirado após receber a tabela: esse valor aparece em nível 3, marcado como indisponível; os valores podem ser explorados no simulador.
- Modelo e dinâmica: seções independentes; o que se adquire e de onde pode vir a receita (páginas 2, 5, 7, 9, 12 e 14).
- Setores e módulos: possibilidades de uso, reutilização e limites (páginas 4 a 8).
- Jornada: aquisição, administração e vínculo com a locação (páginas 9 a 12).
- Operação: responsabilidades da Nomad (páginas 10 e 16).
- Estimativas: faixa de ~1,5% a 2,0% ao mês da página 13, com condições e ressalvas. Comparações com outros produtos ficaram para a apresentação; não se sugere equivalência de risco ou superioridade.
- Depoimentos: três relatos literais da página 15 e respectiva ressalva.
- FAQ: retorno, manutenção e saída (página 16).
- Conversão: solicitação da apresentação pelo WhatsApp da página 17, com mensagem preenchida. O visitante decide enviar; o site não envia mensagens nem entrega o PDF automaticamente.

Os blocos repetidos de cinco pilares e comparação com a Selic foram absorvidos pela narrativa principal. O PDF permanece como material de aprofundamento. Não foram criadas promessas, garantias, estatísticas, prazos de atendimento ou argumentos sem base documental.

A página 10 contém uma divergência: título “A Modubras administra” e corpo identificando a Nomad. A página usa “Nomad”, como no corpo, no ciclo da página 12 e no FAQ da página 16. Essa divergência permanece para confirmação do cliente.

Tipos de módulo, condição e quantidade do simulador vêm exclusivamente da nova tabela comercial. Conteúdos antigos e programa de parceiros não foram incorporados.

Os 13 espaços de imagem são placeholders: abertura, três fundamentos, seis setores, módulos, operação e simulador. Círculos nos depoimentos são apenas reservas decorativas. Não são fotos de ativos ou pessoas reais. A direção visual e o mapa de imagens estão em [DESIGN.md](DESIGN.md).

HTML, CSS e JavaScript estáticos, sem dependências. GitHub Pages publica a raiz da branch `main`.
Prévia local: `python3 -m http.server 4173`.

## Regra de layout

Seguir [GRID.md](GRID.md) em toda alteração visual. Revisão com guias: acrescentar `?grid=1` ao endereço da página. A visita normal não carrega o inspetor.

Notas pequenas e asteriscos removidos a pedido do usuário. As condições essenciais foram incorporadas à copy principal; as ressalvas de estimativas seguem junto dos cards, em 16/24 px. Placeholders preservam a descrição acessível sem rótulos visuais.

## Simulador — tabela de novembro de 2026

`simulator.mjs` contém os preços unitários, VML e VRML das páginas 4–6 e 9–11. Seleções: escritório/sanitário, novo/nível 1/nível 2, com/sem locação vigente, 1 a 5 módulos. Nível 3 está indisponível segundo as páginas 7 e 12; a faixa de 6 a 10 só aparece nesse nível e não é oferecida. Módulos novos só aceitam situação sem locação vigente, sem projetar receita.

Cálculos: preço da faixa × quantidade; VML × quantidade; VRML × quantidade; diferença entre VML e VRML × quantidade, equivalente ao repasse Modubras de 18% informado na página 13. Valores em reais inteiros, sem capitalização, promessa de prazo de retorno ou extrapolação de faixas. Não se calcula tributação nem outros custos. Receita de módulos sem contrato é referência de eventual locação, não receita atual.

Divergência a validar com o cliente: sanitário nível 1, disponível, faixa de 2 a 5 (página 10) informa R$ 75.000, VML R$ 2.300 e VRML R$ 1.886, mas percentuais de 3,33% e 2,73%; as divisões resultam em aproximadamente 3,07% e 2,51%. O simulador usa os valores monetários explícitos, sem exibir os percentuais nem o PBD da tabela. Outras linhas também têm diferenças de arredondamento. A faixa de ~1,5%–2,0% na seção anterior pertence à apresentação geral, não é aplicada como fórmula ao simulador.

WC integrado (página 4): o adicional de R$ 5.000 não especifica inequivocamente aplicação por unidade ou conjunto. Permanece sob consulta e não é somado ao cenário; isso está visível quando o visitante escolhe escritório novo. Não extrapolar para seminovos.

O botão prepara uma mensagem de WhatsApp com as escolhas e o valor de aquisição. Nenhuma mensagem é enviada automaticamente; nenhum dado pessoal é solicitado ou armazenado.

Validação de cálculo: `node --test simulator.test.mjs` cobre os 50 cenários admitidos, a divergência monetária, módulos novos e entradas inválidas. Conferência visual e de comportamento em navegador é feita separadamente.
