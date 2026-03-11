import { createContext, useContext } from "react";

// 1. CRIA o canal (geralmente em arquivo separado)
// Definimos o tipo explicitamente como string para evitar erro de tipo
const MeuContext = createContext<string>("valor inicial");

// 2. FORNECE o dado (no componente pai ou em um Provider dedicado)
export function DiagramaDeFluxo() {
  const dadoAtual = {
    Teste:
      "Teste de useContext. A informação está sendo passada para o componente filho.",
    Teste2:
      "Criamos um contexto, passamos o valor para o componente filho e consumimos o valor no componente filho.",
  };

  return (
    <MeuContext.Provider value={`${dadoAtual.Teste} \n ${dadoAtual.Teste2}`}>
      <ComponenteFilho />
    </MeuContext.Provider>
  );
}

// 3. CONSOME o dado (em qualquer descendente, qualquer profundidade)
function ComponenteFilho() {
  const dado = useContext(MeuContext);
  return <div>{dado}</div>;
}
