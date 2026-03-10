import { Send } from "lucide-react";
import { useState } from "react"

const Left = function () {

    const [conteudoTextual, setConteudoTextual] = useState(""); // conteudoTextual é a variável, setConteudoTextual é a função que define o valor da variável, useState é basicamente uma definição do react pra dizer que isso é uma variável do react. o que está dentro do usestate é o valor padrão, inicial, daquela variável

    const mudarVariavelConteudoTextual = (texto) => { // essa é a função que dispara quando o input muda de valor, ou seja quando alguém escreve alguma coisa no input
        setConteudoTextual(texto); // ele recebe o texto e executa setConteudoTextual(texto), que significa que a variável conteudoTextual irá mudar de valor para o que foi escrito
    }

    const dispararAcaoDoClique = () => {
        console.log("")
    }

    return (
       
        <div className="w-1/2 border-r border-slate-100 dark:border-slate-800 h-full p-[10%] bg-gradient-to-br from-indigo-200 via-indigo-50 to-white dark:bg-[linear-gradient(to_top,#455266,#34425a,#23334e,#122443,#001637)]">
            <button class="flex items-center mb-4 gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-[#122443]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
             </svg>
            Gerar a lista com IA
            </button>
            <h2 className="font-bold text-4xl text-slate-900 dark:text-white tracking-tight md:text-5xl mb-4">Começe sua lista de <span className="text-blue-600 dark:text-blue-400">compras</span></h2>
            <p className="pr-24 dark:text-slate-400 text-slate-600 font-normal text-xl">Digite os itens que você precisa comprar e deixe a IA organizar por categorias e indicar onde encontrar cada produto no supermercado.</p>
            <textarea
                value={conteudoTextual}
                onChange={(e) => mudarVariavelConteudoTextual(e.target.value)}
                type="text"
                className="mt-8 w-full h-40 dark:bg-slate-200 bg-white rounded-3xl shadow-blue-900"
            />
            <button className="mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors shadow-sm"
                onClick={(e) => dispararAcaoDoClique()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />

                </svg>
                 Adicionar
            </button>
        </div> 
    )
}

export default Left;