"use Client"

import { Fragment } from 'react';
import Image from 'next/image';
import Logo from '@/components/images/Logo.png'
import Link from 'next/link';

export default function Header() {
 return (
    <Fragment>
      <header className="bg-EBDFD6 shadow-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" className="h-36 w-36" />
          <div className="space-x-4 ">
            
            <Link href="/" className="text-8F0000 text-lg font-semibold ">Home</Link>
            <Link href="/comidas" className="text-8F0000 text-lg font-semibold">Comidas</Link>
            <Link href="/contato" className="text-8F0000 text-lg font-semibold">Contato</Link>
          </div>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-8F0000 text-lg font-semibold hover:animate-bounce"> Entrar</Link>
          <Link href="/cadastro" className="bg-8F0000 text-lg text-white px-4 py-2 rounded-full font-semibold hover:animate-bounce">Cadastro</Link>
        </div>
      </header>
    </Fragment>
 );
};

