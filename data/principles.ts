export interface Principle {
  number: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Simplicidade antes da complexidade",
    description:
      "Um produto só é bom quando as pessoas conseguem utilizá-lo sem precisar entender a tecnologia por trás.",
  },
  {
    number: "02",
    title: "Construir para evoluir",
    description:
      "Arquitetura e decisões técnicas devem permitir que o produto cresça sem precisar ser reconstruído a cada etapa.",
  },
  {
    number: "03",
    title: "Problemas reais primeiro",
    description: "Começamos pelo problema. A tecnologia vem depois.",
  },
  {
    number: "04",
    title: "Produto é experiência",
    description:
      "Performance, interface, confiabilidade e detalhes fazem parte do mesmo produto.",
  },
];
