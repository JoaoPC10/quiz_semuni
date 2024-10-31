const data = [
  {
    category: "O Tabaco e a Saúde de Todos",
    questions: [
      {
        question: "O cigarro afeta o sistema imunológico?",
        options: ["Sim", "Não", "Talvez", "Apenas o respiratório"],
        answer: "Sim",
        tip: "É meio óbvio",
      },
      {
        question: "Fumar pode causar câncer além do câncer de pulmão?",
        options: ["Com Certeza", "Não", "Nem causa Cancêr de Pulmão", "Talvez"],
        answer: "Com Certeza",
        tip: "Resposta Afirmativa",
      },
      {
        question: "Quais são os riscos do fumo passivo?",
        options: ["Nenhum, pois só o fumante é afetado.", "Doenças cardíacas e até de câncer", "Reduz o risco de doenças em quem está perto de fumantes.", "É prejudicial apenas para crianças pequenas."],
        answer: "Doenças cardíacas e até de câncer",
      },
      {
        question: "Quais são os efeitos do cigarro na pele?",
        options: ["O cigarro ajuda a pele a manter-se hidratada.", "Ele causa envelhecimento precoce e perda de colágeno, formando rugas.", "Não tem nenhum efeito visível na pele.", "Protege a pele dos raios UV."],
        answer: "Ele causa envelhecimento precoce e perda de colágeno, formando rugas.",
      },
      {
        question: "Quais são os principais efeitos do cigarro no sistema respiratório?",
        options: ["Não afeta o sistema respiratório.", "Aumenta o fluxo de oxigênio no sangue", "Irrita as vias aéreas e pode causar doenças como enfisema e câncer de pulmão.", "Melhora a capacidade respiratória e aumenta a energia."],
        answer: "Irrita as vias aéreas e pode causar doenças como enfisema e câncer de pulmão.",
      },
    ],
  },
  {
    category: "Os perigos do Cigarro Eletrônico",
    questions: [
      {
        question: "Principail fator de risco associado ao uso do cigarro eletrônico?",
        options: ["Cancêr", "Rrejeição Social", "Estresse", "Fome"],
        answer: "Cancêr",
        tip: "Causa muitas mortes",
      },
      {
        question: "Cite 1 substância que é inalada pelo corpo humano com o consumo do cigarro eletrônico:",
        options: ["Vapor de Água", "Poeira", "Nicotina", "Plástico"],
        answer: "Nicotina",
      },
      {
        question: "Qual a principal doença que está associada ao uso excessivo do cigarro eletrônico/vape, gerando lesão pulmonar?",
        options: ["Catapora", "EVALI", "Gripe", "Herpes"],
        answer: "EVALI",
      },
      {
        question: "Qual a principal forma de tratamento para a doença EVALI?",
        options: ["Remédios", "Ir ao SUS", "Fumar mais", "Suspensão do uso do cigarro eletrônico."],
        answer: "Suspensão do uso do cigarro eletrônico.",
      },
      {
        question: "Qual dos fatores a seguir é uma preocupação crescente entre especialistas em saúde quanto ao uso prolongado de cigarros eletrônicos?",
        options: ["A ausência de produtos químicos no vapor liberado, tornando-o inofensivo.", "A falta de popularidade dos cigarros eletrônicos em ambientes fechados.", "A baixa aceitação dos dispositivos entre os jovens e adolescentes.", "A possibilidade de dependência devido à presença de nicotina em alguns líquidos para vaporização."],
        answer: "A possibilidade de dependência devido à presença de nicotina em alguns líquidos para vaporização.",
      },
    ],
  },
  {
    category: "Impacto Ambiental do Tabagismo",
    questions: [
      {
        question: "Qual é uma das principais formas como o cigarro contribui para a poluição dos oceanos?",
        options: [
          "As bitucas de cigarro são uma das principais fontes de microplásticos nos oceanos.",
          "A fumaça do cigarro afeta diretamente a vida marinha.",
          "A produção do cigarro não gera resíduos poluentes.",
          "As bitucas de cigarro ajudam a filtrar a água dos rios antes de chegar ao oceano.",
        ],
        answer: "As bitucas de cigarro são uma das principais fontes de microplásticos nos oceanos.",
      },
      {
        question: "Como a produção de tabaco impacta a sustentabilidade ambiental?",
        options: [
          "Não gera impacto ambiental significativo", 
          "Demanda uma grande quantidade de água e gera desmatamento.", 
          "Usa pouca água e ajuda a conservar o solo.", 
          "Melhora a biodiversidade nas áreas de cultivo."
        ],
        answer: "Demanda uma grande quantidade de água e gera desmatamento.",
      },
      {
        question: "O descarte inadequado de bitucas de cigarro no ambiente causa quais dos problemas abaixo?",
        options: [
          "As bitucas de cigarro aceleram o processo de compostagem em áreas verdes.", 
          "Elas não representam nenhum risco, pois são biodegradáveis.", 
          "Podem ser ingeridas por animais, causando intoxicação e problemas de saúde.", 
          "Ajudam na preservação de áreas naturais ao acumular nutrientes."
        ],
        answer: "Podem ser ingeridas por animais, causando intoxicação e problemas de saúde.",
      },
      {
        question: "Qual das alternativas a seguir representa um efeito negativo dos produtos químicos descartados dos cigarros no solo?",
        options: [
          "Os produtos químicos aumentam a fertilidade do solo para outras plantas.",
           "Esses produtos são rapidamente absorvidos e não geram danos.", 
           "Eles contaminam o solo e podem afetar negativamente a saúde das plantas e animais.", 
           "Eles se decompõem rapidamente e ajudam no crescimento de outras culturas."
          ],
        answer: "Eles contaminam o solo e podem afetar negativamente a saúde das plantas e animais.",
      },
      {
        question:
          "Qual é um dos efeitos indiretos da produção de tabaco na biodiversidade local?",
        options: [
          "Aumenta a biodiversidade, pois atrai diferentes espécies de insetos e animais.", 
          "Não causa efeito algum na biodiversidade das áreas próximas.", 
          "Reduz a biodiversidade devido ao uso de pesticidas e monoculturas em áreas de cultivo de tabaco.", 
          "Melhora a biodiversidade, pois os pesticidas usados no tabaco também protegem outras plantas."
        ],
        answer: "Reduz a biodiversidade devido ao uso de pesticidas e monoculturas em áreas de cultivo de tabaco.",
      },
    ],
  },
];

export default data;
