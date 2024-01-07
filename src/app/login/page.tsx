// pages/login.tsx
"use client"
import Header from '@/components/common/header';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import Swal from 'sweetalert2';

const Login: React.FC = () => {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [Senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleVoltar = () => {
    router.back();
  };

  const mostrarConfirmacao = async () => {
  Swal.fire("Confirmado!", "Login realizado com sucesso.", "success");
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    mostrarConfirmacao();
  };

  return (
    <> 
  <Header />

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-md rounded-md">
        
        <h2 className="text-4xl font-bold mb-4 text-gray">Login</h2>
        <hr className="my-6 border-2 border-gray" />

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <p className="mb-4 text-008C83 font-semibold">Bem-vindo de volta!</p>
            <label htmlFor="Email" className="block mb-1 font-semibold">
              E-mail:
            </label>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-96 border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="senha" className="block mb-1 font-semibold">
              Senha:
            </label>
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              value={Senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full md:w-96 border rounded px-3 py-2"
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {error && (
            <p className="text-red-500 font-semibold">Email ou senha incorretos</p>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              onClick={mostrarConfirmacao}
              className="w-40 bg-8F0000 text-white rounded py-2 hover:bg-008C83 transition duration-5000 rounded-full bg-7CF5D4"
            >
              {loading ? (
                "Carregando..."
              ) : (
                <p className="text-white font-semibold font-semibold">Entrar</p>
              )}
            </button>
          </div>
          <Link
            href="/cadastro"
            className="text-8F0000 hover:underline flex justify-center "
          >
            Não tem Cadastro? Cadastre-se!
          </Link>
        </form>

        <div className="flex items-center text-8F0000 hover:text-8F0000 mt-4 font-semibold">
            <a
              onClick={handleVoltar}
              className="text-8F0000 hover:underline cursor-pointer"
            >
              <ArrowLeft className="inline -ml-1 text-base font-semibold" /> Voltar para a
              Página Anterior
            </a>
          </div>

      </div>
    </div>
    </>
  );
};

export default Login;
