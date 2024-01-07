"use Client"
import Header from "@/components/common/header";
import Image from "next/image";
import Logo from "@/components/images/Logo.png";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eats2 from "@/components/images/eats2.jpeg"

export default function Home() {
  return (
    <>
      <Header />

      <div className="container mx-auto px-2">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
          <div className="mb-8 lg:mb-0 lg:w-1/3 text-center lg:text-left">
            <h2 className="text-5xl font-semibold mb-2">
              Faça seu cadastro e <span className="text-8F0000">descubra </span>
              as melhores <span className="text-8F0000">comidas </span>
              dos restaurantes locais
            </h2>

            <Link
              href="/cadastro"
              className="bg-8F0000 text-white px-8 py-2 rounded-full font-semibold inline-block align-middle lg:align-top lg:mt-4"
            >
              Cadastre-se{" "}
            </Link>
          </div>

          <div className="max-w-xl mb-14 animated-image">
            <Image
              src={Logo}
              alt="Restaurant Finder Logo"
              className="w-120 h-120 mx-auto lg:mx-0 mb-8"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      

    

      <div className="container mx-auto mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
          <div className="max-w-xl mb-8 lg:mb-0">
            <Image
              src={eats2}
              alt="Welcome eats"
              className="mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none"
            />
          </div>

          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-5xl text-8F0000 font-semibold mb-2">
              Sobre Nós
            </h2>

            <h2 className="text-3xl mb-2">
              Bem-vindo à{" "}
              <span className="text-8F0000 font-semibold">Eats</span>, 
              sua porta
              de entrada para a riqueza gastronômica dos melhores restaurantes
              locais! Fundada com a paixão pela boa comida e o desejo de apoiar
              negócios locais, nossa missão é tornar a experiência culinária
              local mais acessível e conveniente para todos.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
