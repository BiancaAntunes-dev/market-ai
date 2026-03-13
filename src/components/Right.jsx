import { ShoppingCart } from "lucide-react"

// Exemplo de valor para o parâmetro items:
// const items = [
//   {
//     category: "Hortifrúti",
//     items: ["Alface", "Tomate", "Cenoura"]
//   },
//   {
//     category: "Laticínios",
//     items: ["Leite", "Queijo", "Iogurte"]
//   },
//   {
//     category: "Padaria",
//     items: ["Pão de forma", "Bisnaguinha"]
//   }
// ]

const Right = function ({ items = [] }) {
    return (
        <div className="w-1/2 border-l border-slate-100 dark:border-slate-800 h-full bg-[#f0f4ff] dark:bg-slate-900 flex flex-col justify-center items-center p-[10%]">
            {items.length === 0 ?
                <div className="flex flex-col items-center justify-center">
                    <img src="/public/logo.png" className="w-30 m-4 rounded-xl" />
                    <h3 className="font-semibold text-4xl dark:text-slate-400 text-slate-900 tracking-tight md:text-3xl mb-3">A sua lista irá aparecer aqui</h3>
                    <p className="dark:text-slate-400 text-slate-600 font-normal text-l">Mande o que falta na sua casa que montamos sua lista de compras já separada pelos corredores do mercado.</p>
                </div>
            :
                <div className="w-full overflow-y-auto">
                    {items.map((group, groupIndex) => (
                        <div key={groupIndex} className="mb-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">
                                {group.category}
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {group.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-lg px-4 py-2 shadow-sm text-slate-700 dark:text-slate-300 text-sm"
                                    >
                                        <ShoppingCart size={14} className="text-slate-400 dark:text-slate-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Right