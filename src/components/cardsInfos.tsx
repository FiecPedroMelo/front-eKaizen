import image10 from "@/components/images/image 10.png";
import image11 from "@/components/images/image 11.png";
import image12 from "@/components/images/image 12.png";
import image13 from "@/components/images/image 13.png";
import image14 from "@/components/images/image 14.png";
import image15 from "@/components/images/image 15.png";
import image16 from "@/components/images/image 16.png";
import image17 from "@/components/images/image 17.png";
import image18 from "@/components/images/image 18.png";
import {StaticImageData} from "next/image";

interface ImageData {
        image: StaticImageData;
        name: string;
        rating: number;
        description: string;
        //tabelainfo
        calorias: string;
        proteinas: string;
        carboidratos: string;
        gorduras: string;
        sodio: string;
        fibras: string;
        acucares: string;
}

const imagesData: ImageData[] = [
  { image: image10,
    name: "Coxinha do seu Zé",
    rating: 5,
    description: "A coxinha é um salgado popular na culinária brasileira. Geralmente em formato de gota, ela consiste em uma massa fina de farinha de trigo recheada com frango desfiado, catupiry (um tipo de queijo cremoso) e temperos. Após ser modelada, a coxinha é empanada e frita até ficar crocante por fora e suculenta por dentro..",
    //tabelainfos
    calorias: "250-300 kcal",
    proteinas: "10-15g",
    carboidratos: "20-25g",
    gorduras: "15-20g",
    fibras: "1-2g",
    sodio: "200-300mg",
    acucares: "1-2g",
},

 
  { image: image11,
    name: "Cuz-cuz da Rita",
    rating: 5,
    description: "O cuscuz, conhecido como 'cuz-cuz' em algumas regiões, é um prato tradicional brasileiro de origem nordestina. Feito a partir de flocos de milho, ele pode ser cozido no vapor e servido como acompanhamento salgado, muitas vezes com carne de sol, ou como uma opção doce, com leite condensado.",
    //tabelainfos
    calorias: "150-200 kcal",
    proteinas: "5-10g",
    carboidratos: "30-40g",
    gorduras: "1-5g",
    fibras: "2-3g",
    sodio: "200-300mg",
    acucares: "1-2g",
},

  
  { image: image12,
    name: "Feijoada do Carlos",
    rating: 5,
    description: "A feijoada é um prato emblemático da culinária brasileira, especialmente associado à tradição da cozinha carioca. É uma mistura de feijão preto cozido com diversos tipos de carne, como linguiça, carne seca, costela de porco e bacon. Geralmente, é acompanhada de arroz, couve refogada, laranja e farofa.",
    //tabelainfos
    calorias: "400-600 kcal",
    proteinas: "20-30g",
    carboidratos: "30-40g",
    gorduras: "20-30g",
    fibras: "10-15g",
    sodio: "800-1200mg",
    acucares: "1-5g",
},
  
  { image: image13,
    name: "Hamburguer do José", 
    rating: 5, 
    description: "O hambúrguer é um prato internacional que se tornou extremamente popular no Brasil. Consiste em um disco de carne moída grelhado ou frito, geralmente servido dentro de um pão, acompanhado de diversos ingredientes como queijo, alface, tomate, cebola, maionese e ketchup.",
    //tabelainfos
    calorias: "250-350 kcal",
    proteinas: "10-25g",
    carboidratos: "20-30g",
    gorduras: "15-25g",
    fibras: "1-2g",
    sodio: "400-600mg",
    acucares: "1-2g", },
  
  { image: image14,
    name: "Pastel da Rose", 
    rating: 5, 
    description: "O pastel é um salgado frito de origem chinesa, mas muito apreciado no Brasil. Consiste em uma massa fina e crocante, geralmente recheada com carne moída, queijo, frango, palmito, entre outros. Pode ser encontrado em versões salgadas e doces.",
    //tabelainfos
    calorias: "200-300 kcal",
    proteinas: "5-10g",
    carboidratos: "20-30g",
    gorduras: "10-20g",
    fibras: "1-2g",
    sodio: "400-600mg",
    acucares: "1-2g",
    
    },
  


  { image: image15, 
    name: "Pamanho da Gabi", 
    rating: 5, 
    description: "A pamonha é uma iguaria feita a partir de milho verde ralado ou moído, misturado com leite e açúcar. Essa mistura é envolta em folhas de milho e cozida. Pode ser consumida tanto na versão salgada, com queijo, quanto na versão doce.",
    //tabelainfos
    calorias: "200-300 kcal",
    proteinas: "5-10g",
    carboidratos: "30-40g",
    gorduras: "5-10g",
    fibras: "2-3g",
    sodio: "100-200mg",
    acucares: "5-10g", },
  
  { image: image16, 
    name: "Tilápia do Rogério", 
    rating: 4, 
    description: "A tilápia é um peixe de água doce muito consumido no Brasil. É conhecida por sua carne branca e suculenta. Pode ser preparada grelhada, assada, frita ou cozida, e é frequentemente acompanhada de molhos cítricos ou ervas.",
    //tabelainfos
    calorias: "150-200 kcal",
    proteinas: "20-25g",
    carboidratos: "0-5g",
    gorduras: "5-10g",
    fibras: "0g",
    sodio: "50-100mg",
    acucares: "5-10g", },
 
  { image: image17, 
    name: "Tapioca do Pedro", 
    rating: 4, 
    description: "A tapioca é uma iguaria leve e sem glúten feita a partir da fécula da mandioca. É transformada em uma espécie de panqueca e recheada com diversos ingredientes, como queijo, coco, chocolate, frutas, presunto, entre outros, dependendo da preferência.",
    //tabelainfos
    calorias: "150-200 kcal",
    proteinas: "1-5g",
    carboidratos: "30-40g",
    gorduras: "1-5g",
    fibras: "1-2g",
    sodio: "10-50mg",
    acucares: "1-2g",
},
 
  { image: image18, 
    name: "Camarão da Paula", 
    rating: 4, 
    description: "O camarão é um fruto do mar apreciado na culinária brasileira. Pode ser preparado de várias maneiras, como moquecas, ensopados, grelhados ou fritos. O camarão é conhecido por sua textura tenra e sabor característico, sendo muitas vezes acompanhado de molhos saborosos.",
    //tabelainfos
    calorias: "100-150 kcal",
    proteinas: "20-25g",
    carboidratos: "0-5g",
    gorduras: "1-5g",
    fibras: "0g",
    sodio: "200-300mg",
    acucares: "0g", },
];

export default imagesData;