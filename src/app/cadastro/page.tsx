// pages/login.tsx
"use client";
import Header from "@/components/common/header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowLeft } from "react-feather";

export default function Cadastro() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [Senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [erroDeSenha, setErroDeSenha] = useState(false);

  const handleVoltar = () => {
    router.back();
  };

  return (
    <>
      <Header />

    

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-6xl p-9 bg-white shadow-md rounded-md">
          
          <h2 className="text-4xl font-bold mb-4 text-gray">Cadastro</h2>
          <hr className="my-6 border-2 border-gray" />

          <form>
            <div className="mb-4 relative">
              <p className="mb-4 text-008C83 font-semibold">Cadastre-se ja no nosso site!</p>

              <label htmlFor="Nome" className="block mb-1 font-semibold">
                Nome:
              </label>
              <input
                type="text"
                placeholder="Nome"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="Email" className="block mb-1 font-semibold">
                CPF:
              </label>
              <input
                type="email"
                placeholder="CPF"
                className="w-full  border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="Email" className="block mb-1 font-semibold">
                E-mail:
              </label>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full  border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="senha" className="block mb-1 font-semibold">
                Senha:
              </label>
              <input
                type={mostrarSenha ? "text" : "password"}
                id="Senha"
                name="Senha"
                placeholder="Senha"
                className="w-full  border rounded px-3 py-2"
              />

              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="confirmarSenha"
                className="text-0C5E58 block mb-1 font-semibold"
              >
                Confirme sua senha:
              </label>
              <input
                type={mostrarSenha ? "text" : "password"}
                id="confirmarSenha"
                name="confirmSenha"
                placeholder="Confirme a senha"
                required
                className="w-full border rounded px-3 py-2"
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            {erroDeSenha && (
              <p className="text-red-500">
                As senhas não coincidem. Por favor, tente novamente.
              </p>
            )}

            <div className="mb-4 relative">
              <label htmlFor="Cidade" className="block mb-1 font-semibold">
                Cidade:
              </label>
              <input
                type="text"
                placeholder="Cidade"
                className="w-full  border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Estado" className="text-0C5E58 block mb-1 font-semibold">
                Selecione o estado:
              </label>
              <select
                id="Estado"
                name="Estado"
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Selecione o estado</option>
                <option value="ac">Acre (AC)</option>
                <option value="al">Alagoas (AL)</option>
                <option value="am">Amazonas (AM)</option>
                <option value="ap">Amapá (AP)</option>
                <option value="ba">Bahia (BA)</option>
                <option value="ce">Ceará (CE)</option>
                <option value="df">Distrito Federal (DF)</option>
                <option value="es">Espírito Santo (ES)</option>
                <option value="go">Goiás (GO)</option>
                <option value="ma">Maranhão (MA)</option>
                <option value="mg">Minas Gerais (MG)</option>
                <option value="ms">Mato Grosso do Sul (MS)</option>
                <option value="mt">Mato Grosso (MT)</option>
                <option value="pa">Pará (PA)</option>
                <option value="pb">Paraíba (PB)</option>
                <option value="pe">Pernambuco (PE)</option>
                <option value="pi">Piauí (PI)</option>
                <option value="pr">Paraná (PR)</option>
                <option value="rj">Rio de Janeiro (RJ)</option>
                <option value="rn">Rio Grande do Norte (RN)</option>
                <option value="ro">Rondônia (RO)</option>
                <option value="rr">Roraima (RR)</option>
                <option value="rs">Rio Grande do Sul (RS)</option>
                <option value="sc">Santa Catarina (SC)</option>
                <option value="se">Sergipe (SE)</option>
                <option value="sp">São Paulo (SP)</option>
                <option value="to">Tocantins (TO)</option>
              </select>
            </div>
            <div className="mb-4 relative">
              <label htmlFor="Rua" className="block mb-1 font-semibold">
                Rua:
              </label>
              <input
                type="text"
                placeholder="Rua"
                className="w-full  border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="Numero" className="block mb-1 font-semibold">
                Número:
              </label>
              <input
                type="number"
                placeholder="Número"
                className="w-full  border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="Bairro" className="block mb-1 font-semibold">
                Bairro:
              </label>
              <input
                type="text"
                placeholder="Bairro"
                className="w-full  border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="CEP" className="block mb-1 font-semibold">
                CEP:
              </label>
              <input
                type="number"
                placeholder="CEP"
                className="w-full  border rounded px-3 py-2"
              />
            </div>

            {error && <p className="text-red-500 font-semibold">Email ou senha incorretos</p>}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-40 bg-8F0000 text-white rounded py-2 hover:bg-008C83 transition duration-5000 rounded-full bg-7CF5D4"
              >
                {loading ? (
                  "Carregando..."
                ) : (
                  <p className="text-white font-semibold ">Continuar</p>
                )}
              </button>
            </div>
            <br />
            <Link
              href="/login"
              className="text-8F0000 hover:underline flex justify-center mb-12"
            >
              Já possui uma conta? Entre!
            </Link>
          </form>

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
  );
}
