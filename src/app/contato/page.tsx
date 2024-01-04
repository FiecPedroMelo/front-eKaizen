// pages/login.tsx
"use client"
import Header from '@/components/common/header';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';

export default function Contato() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [Senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleVoltar = () => {
    router.back();
  };
  
  return (
   <> 

  <Header />

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-md rounded-md">
        
        <h2 className="text-4xl font-bold mb-4 text-gray">Contato</h2>
        <hr className="my-6 border-2 border-gray" />

        <form>  
          <div className="mb-4">
            <p className="mb-4 text-008C83 font-semibold">Caso queira entrar em contato conosco, mande um email!</p>

            <label htmlFor="Email" className="block mb-1 font-semibold">
              E-mail:
            </label>
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

        <div>
          <label htmlFor="Nome" className="block mb-1 font-semibold">
            Nome:
            </label>
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div> 

          <div className="mb-4">
                <label htmlFor="Mensagem" className="text-0C5E58 block mb-1 font-semibold">
                 Mensagem:
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Descreva suas experiências anteriores"
                  required
                  className="w-full h-32 p-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
                >
                  {" "}
                </textarea>
              </div>
          </form>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-40 bg-8F0000 text-white rounded py-2 hover:bg-008C83 transition duration-5000 rounded-full bg-7CF5D4"
            >
              {loading ? (
                "Carregando..."
              ) : (
                <p className="text-white font-semibold">Enviar</p>
              )}
            </button>
          </div>

          <div className="flex items-center text-8F0000 hover:text-8F0000 mt-4 font-semibold">
            <a
              onClick={handleVoltar}
              className="text-8F0000 hover:underline cursor-pointer"
            >
              <ArrowLeft className="inline -ml-1 text-base" /> Voltar para a
              Página Anterior
            </a>
          </div>
          
 </div>
</div>
</>
) 
  }
