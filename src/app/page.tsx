'use client';

import { BanknoteArrowDownIcon, BanknoteArrowUpIcon, BanknoteIcon, BusIcon, GraduationCapIcon, PiggyBankIcon, PillIcon, UtensilsIcon, VolleyballIcon } from "lucide-react";

import TransacoesTable from "@/components/transacioes/transactions";
import { useRouter } from "next/navigation";

export default function Home(){
  const router = useRouter();

  return(
    <main className="container">
      <header>
        <div> <PiggyBankIcon color=" rgba(64, 164, 53, 0.831)" size={40}/> </div>
        <button className="botao_adiciona"  onClick={() =>router.push('/nova-transacao')}> + </button>
      </header>

      <section className="caixas">
        <div className="box entrada">
         <div className="box_icon">
           <h3> Entradas</h3>
           <BanknoteArrowDownIcon /></div>
          <p className="valor">R$7.840,45</p>
          <span className="text">Somada todas as entradas do período.</span>
        </div>

        <div className="box saida">
          <div className="box_icon">
            <h3>Saídas</h3>
            <BanknoteArrowUpIcon/> </div>
          <p className="valor saida">R$1.580,45</p>
          <span className="text">Somada todas as saídas do período.</span>
        </div>

        <div className="box balanco">
          <div className="box_icon">
            <h3>Balanço</h3>
             <BanknoteIcon /></div>
          <p className="valor">R$6.260,11</p>
          <span className="text">Somada todas as entradas e saídas do período.</span>
        </div>
      </section>

      <section className="analise">
        <div className="infor">
          <h2>Gráfico de Análise</h2>
          <div className="box-analise"></div>
        </div>

        <div className="cat">
          <h2>Categorias</h2>
          <ul className="lista-cat">
            <li className="item-cat">
              <div className="icone"><UtensilsIcon /></div>
              <div className="nome">Alimentação</div>
              <div className="quantidade">10</div>
              <div className="valor_cat">R$1.508,15</div>
            </li>
            <li className="item-cat">
              <div className="icone"><BusIcon /></div>
              <div className="nome">Transporte</div>
              <div className="quantidade">8</div>
              <div className="valor_cat">R$1.508,15</div>
            </li>
            <li className="item-cat">
              <div className="icone"><VolleyballIcon /></div>
              <div className="nome">Lazer</div>
              <div className="quantidade">2</div>
              <div className="valor_cat">R$350,19</div>
            </li>
            <li className="item-cat">
              <div className="icone"><PillIcon /></div>
              <div className="nome">Saúde</div>
              <div className="quantidade">1</div>
              <div className="valor_cat">R$700,00</div>
            </li>
            <li className="item-cat">
              <div className="icone"><GraduationCapIcon /></div>
              <div className="nome">Educação</div>
              <div className="quantidade">1</div>
              <div className="valor_cat">R$349,57</div>
            </li>
          </ul>
        </div>
       </section>
       <TransacoesTable />
    </main>
  )
}