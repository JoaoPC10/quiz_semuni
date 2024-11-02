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
        question: " Quais são as substâncias tóxicas presentes nos cigarros eletrônicos que podem causar danos similares aos do cigarro convencional e seus efeitos no organismo? Quais são as substâncias tóxicas presentes nos cigarros eletrônicos que podem causar danos similares aos do cigarro convencional e seus efeitos no organismo?",
        options: [
          "Glicerol e álcool, que aumentam a hidratação do corpo.", 
          "Nicotina e formaldeído, que podem causar dependência e danos pulmonares.", 
          "Ácidos e vitaminas, que aumentam a imunidade.",
           "Oxigênio e nitrogênio, que estimulam a circulação sanguínea."
          ],
        answer: "Nicotina e formaldeído, que podem causar dependência e danos pulmonares.",
        tip: "Principal componente do cigarro!",
      },
      {
        question: "Que evidências científicas sustentam que o uso de cigarros eletrônicos pode levar a complicações pulmonares graves, comparáveis às causadas pelo cigarro convencional?",
        options: [
          "Estudos que mostram apenas efeitos positivos no trato respiratório.",
           "Relatos de falta de evidências sobre qualquer dano pulmonar.", 
           "Pesquisas indicando que vapores contêm partículas nocivas que danificam o tecido pulmonar.", 
           "Estudos demonstrando que o vapor é seguro para o uso a longo prazo."
          ],
        answer: "Pesquisas indicando que vapores contêm partículas nocivas que danificam o tecido pulmonar.",
      },
      {
        question: "Quais são as principais estratégias do Ministério da Saúde para combater o uso de cigarro eletrônico e apoiar os usuários na cessação do tabagismo?",
        options: [
          "Incentivar a substituição do cigarro convencional pelo eletrônico.", 
          "Proibir o uso do cigarro convencional e liberar o eletrônico.", 
          "Campanhas de conscientização, atendimento psicológico e políticas de restrição ao acesso.", 
          "Venda irrestrita de cigarros eletrônicos para uso supervisionado."
        ],
        answer: "Campanhas de conscientização, atendimento psicológico e políticas de restrição ao acesso.",
      },
      {
        question: "Quais são as diferenças e semelhanças entre os impactos dos cigarros eletrônicos e dos convencionais na incidência de doenças cardiovasculares e respiratórias?",
        options: [
          "Ambos afetam o coração e pulmões, mas os eletrônicos contêm apenas substâncias inofensivas.",
           "Os cigarros eletrônicos afetam apenas os pulmões, enquanto os convencionais não afetam a saúde.",
            "Os dois aumentam os riscos para doenças cardíacas e respiratórias devido à nicotina e outras toxinas.", 
            "Os cigarros convencionais são mais perigosos, mas os eletrônicos fortalecem o sistema respiratório."
          ],
        answer: "Os dois aumentam os riscos para doenças cardíacas e respiratórias devido à nicotina e outras toxinas.",
      },
      {
        question: "Quais desafios as autoridades de saúde enfrentam ao tentar controlar a disseminação do uso de cigarros eletrônicos, e como as consultas públicas, como a da Anvisa, contribuem para a criação de regulamentações eficazes?",
        options: [
          "Falta de informações sobre os efeitos; as consultas públicas ajudam a entender o impacto e a desenvolver políticas.",
           "Facilidade de controle do uso e regulamentação clara e rápida.", 
           "Aumento do uso de cigarros convencionais como alternativa; as consultas tornam o processo mais difícil.", 
           "As autoridades já controlam bem o uso, não há necessidade de consultas públicas."
          ],
        answer: "Falta de informações sobre os efeitos; as consultas públicas ajudam a entender o impacto e a desenvolver políticas.",
      },
    ],
  },
  {
    category: "Impacto Ambiental do Tabagismo",
    questions: [
      {
        question: "Qual é o principal componente das bitucas de cigarro que causa poluição ambiental?",
        options: [
          "Papel",
          "Nicotina",
          "Filtro",
          "Tabaco",
        ],
        answer: "Filtro",
      },
      {
        question: "Qual é o principal impacto ambiental das bitucas de cigarro descartadas de maneira inadequada?",
        options: [
          "Poluição sonora", 
          "Contaminação do solo e da água", 
          "Aumento da temperatura global", 
          "Efeito estufa"
        ],
        answer: "Contaminação do solo e da água",
      },
      {
        question: "Além do filtro, quais outros componentes das bitucas de cigarro podem ser prejudiciais ao meio ambiente?",
        options: [
          "Apenas tabaco", 
          "Metais pesados e produtos químicos tóxicos", 
          "Somente papel", 
          "Nenhum, são inofensivas"
        ],
        answer: "Metais pesados e produtos químicos tóxicos",
      },
      {
        question: "Qual é uma das soluções propostas para reduzir o impacto ambiental das bitucas de cigarro?",
        options: [
          "Incentivar campanhas de conscientização e instalação de lixeiras específicas para bitucas.",
           "Proibir completamente o uso de cigarros.", 
           "Criar produtos alternativos que não poluam.", 
           "Aumentar os impostos sobre cigarros."
          ],
        answer: "Incentivar campanhas de conscientização e instalação de lixeiras específicas para bitucas.",
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
