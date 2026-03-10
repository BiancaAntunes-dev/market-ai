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
        <div className="w-1/2 border-r border-slate-100 dark:border-slate-800 h-full bg-[#e0e7ff] dark:bg-slate-950 p-[10%]">
            <h2 className="font-bold text-4xl text-slate-900 dark:text-white tracking-tight md:text-5xl mb-4">Começe sua lista de <span className="text-blue-600 dark:text-blue-400">compras!</span></h2>
            <p className="pr-24 dark:text-slate-400 text-slate-600 font-normal text-xl">Digite os itens que você precisa comprar e deixe a IA organizar por categorias e indicar onde encontrar cada produto no supermercado..</p>
            <input
                value={conteudoTextual}
                onChange={(e) => mudarVariavelConteudoTextual(e.target.value)}
                type="text"
                className="mt-8 w-full h-40 dark:bg-slate-700 bg-white border border-radius rounded-3xl shadow-blue-900"
            />
            <button className=""
                onClick={(e) => dispararAcaoDoClique()}
            >
            </button>
        </div> 
    )
}

export default Left;