export default function Home(){
  return(
    <main className="container">
      <div className="top">
        <h1 className="app"> icone</h1>
        <button className="botao_adiciona"> + </button>
      </div>

      <section className="caixas">
        <div className="box entrada">
          <h3>Entradas</h3>
          <p className="valor">R$7.840,45</p>
          <span className="text">Somada todas as entradas do período.</span>
        </div>
        <div className="box saida">
          <h3>Saídas</h3>
          <p className="valor saida">R$1.580,45</p>
          <span className="text">Somada todas as saídas do período.</span>
        </div>
        <div className="box balanco">
          <h3>Balanço</h3>
          <p className="valor">R$6.260,11</p>
          <span className="text">Somada todas as entradas e saídas do período.</span>
        </div>
      </section>

      <section className="analise">

          <div className="infor">
            <h2>Análise</h2>
            <div className="box-analise"></div>
          </div>

          <div className="cat">
            <h2>Categorias</h2>
            <ul>
              <li className="categoria destaque">
                <span className="nome destaque">Alimentação</span>
                <span className="quantidade destaque">10</span>
                <span className="valor_cat destaque">R$1.508,15</span>
              </li>

              <li className="categoria">
                <span className="nome">Mercado</span>
                <span className="quantidade">8</span>
                <span className="valor_cat">R$1.508,15</span>
              </li>

              <li className="categoria">
                <span className="nome">Presentes</span>
                <span className="quantidade">2</span>
                <span className="valor_cat">R$350,19</span>
              </li>

              <li className="categoria">
                <span className="nome">Farmacia</span>
                <span className="quantidade">1</span>
                <span className="valor_cat">R$700,00</span>
              </li>

              <li className="categoria">
                <span className="nome">Combustível</span>
                <span className="quantidade">1</span>
                <span className="valor_cat">R$349,57</span>
              </li>
            </ul>
          </div>
        
      </section>

      <section className="transacoes">
        <h2>Transações</h2>

        <div className="tabela">
          <table className="table">
            <thead>
              <tr>
                <th className="dados">Descrição</th>
                <th className="dados">Tipo</th>
                <th className="dados">Valor</th>
                <th className="dados">Banco</th>
                <th className="dados">Data</th>
                <th className="dados">Parcelas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supermercado Big Master</td>
                <td>Crédito</td>
                <td className="valor2">R$896,00</td>
                <td>Nubank</td>
                <td>21/03/2025</td>
                <td>1/1</td>
              </tr>

              <tr>
                <td>Supermercado Big Master</td>
                <td>Crédito</td>
                <td className="valor2">R$896,00</td>
                <td>Nubank</td>
                <td>21/03/2025</td>
                <td>1/1</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>



    </main>
  )
}