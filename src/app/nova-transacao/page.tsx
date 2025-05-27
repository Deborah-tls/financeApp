'use client';

import { useRouter } from 'next/navigation';
import { PiggyBankIcon } from 'lucide-react';
import { useState } from 'react';

export default function NovaTransacao() {
  const router = useRouter();

  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [banco, setBanco] = useState('');
  const [data, setData] = useState('');
  const [parcelas, setParcelas] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novaTransacao = {
      categoria,
      descricao,
      tipo,
      valor,
      banco,
      data,
      parcelas,
    };

    console.log('Nova transação:', novaTransacao);

    router.push('/');
  };

  return (
    <main className="container-transacao">
      <header className="topo">
        <div className='iconTransacao'>
          <PiggyBankIcon color="rgba(64, 164, 53, 0.831)" size={40} />
        </div>
        
      </header>

    <div className='form' >
      <h2>Nova Transação</h2>
      <form className="formulario" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder="Categoria" />
          <input className="input" type="text" placeholder="Descrição" />
          <input className="input" type="text" placeholder="Tipo" />
          <input className="input" type="number" placeholder="Valor" />
          <input className="input" type="text" placeholder="Banco" />
          <input className="input" type="date" placeholder="Data" />
          <input className="input" type="number" placeholder="Parcelas" />

          <div className="botoes">
            <button type="submit" className='salvar'>Salvar</button>
            <button type="button" onClick={() => router.push('/')} className='cancelar'>Cancelar</button>
          </div>
        </form>
      </div>
    </main>
  );
}
