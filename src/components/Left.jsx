import { Send, SendHorizonal, Sparkles } from "lucide-react";
import { useState } from "react"

const Left = function () {

    const [conteudoTextual, setConteudoTextual] = useState(""); // conteudoTextual é a variável, setConteudoTextual é a função que define o valor da variável, useState é basicamente uma definição do react pra dizer que isso é uma variável do react. o que está dentro do usestate é o valor padrão, inicial, daquela variável
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const mudarVariavelConteudoTextual = (texto) => { // essa é a função que dispara quando o input muda de valor, ou seja quando alguém escreve alguma coisa no input
        setConteudoTextual(texto); // ele recebe o texto e executa setConteudoTextual(texto), que significa que a variável conteudoTextual irá mudar de valor para o que foi escrito
        if (texto.length == 0)
        {
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }
    }

    const dispararAcaoDoClique = () => {
        console.log("")
    }

    return (
       
        <div className="w-1/2 border-r border-slate-100 dark:border-slate-800 h-full p-[10%] bg-gradient-to-br from-indigo-200 via-indigo-50 to-white dark:bg-[linear-gradient(to_top,#455266,#34425a,#23334e,#122443,#001637)]">
             <div className="relative z-10 max-w-xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Gerar lista com IA</span>
            </div>
            <h2 className="font-bold text-4xl text-slate-900 dark:text-white tracking-tight md:text-5xl mb-4">Começe sua lista de <span className="text-blue-600 dark:text-blue-400">compras</span></h2>
            <p className="pr-24 dark:text-slate-400 text-slate-600 font-normal text-xl">Digite os itens que você precisa comprar e deixe a IA organizar por categorias e indicar onde encontrar cada produto no supermercado.</p>
            <div
                className="
                    min-w-0 box-border p-4 mt-8 w-full h-40 dark:bg-slate-900 bg-white rounded-3xl
                    shadow-[0_0_28px_rgba(59,130,246,0.3)]
                    focus-within:shadow-[0_0_28px_rgba(59,130,246,0.7)]
                    transition duration-500 flex flex-col
                ">
                <textarea
                    value={conteudoTextual}
                    onChange={(e) => mudarVariavelConteudoTextual(e.target.value)}
                    type="text"
                    className="scrollbar-thin w-full h-4/5 focus:outline-none dark:text-slate-400 resize-none pr-2 
                    scrollbar-track-transparent
                    scrollbar-thumb-gray-400 
                    scrollbar-hover:scrollbar-thumb-gray-500 
                    scrollbar-thumb-rounded-full
                    scrollbar-track-rounded-full"
                /> 
                <button 
                    disabled={buttonDisabled} 
                    className="
                        ml-auto hover:cursor-pointer dark:text-slate-400 text-slate-100
                        mr-6 dark:bg-blue-700 bg-blue-600 rounded-lg items-center p-2
                        disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:opacity-60
                        transition-opacity duration-200 mt-2
                    ">
                    <SendHorizonal size={21} />
                </button>
            </div>
        </div> 
        </div>
    )
}

export default Left;