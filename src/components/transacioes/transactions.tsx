import { UtensilsIcon, BusIcon, VolleyballIcon, PillIcon, GraduationCapIcon
 } from '@/components/icons';

 const CategoriaIcone: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Alimentação: UtensilsIcon,
    Transporte: BusIcon,
    Lazer: VolleyballIcon,
    Saúde: PillIcon,
    Educação: GraduationCapIcon,
  };

 const transacoes =[
    {
        id: 1,
        categoria: 'Alimentação',
        descricao: 'Supermercado Big Master',
        tipo: 'Crédito',
        valor: 'R$896,00',
        banco: 'Nubank',
        data: '21/03/2025',
        parcelas: '1/1',
      },
      {
        id: 2,
        categoria: 'Transporte',
        descricao: 'Uber',
        tipo: 'Débito',
        valor: 'R$32,50',
        banco: 'Banco do Brasil',
        data: '20/03/2025',
        parcelas: '1/1',
      },
      {
        id: 3,
        categoria: 'Lazer',
        descricao: 'Cinema Cineflix',
        tipo: 'Crédito',
        valor: 'R$45,00',
        banco: 'Inter',
        data: '18/03/2025',
        parcelas: '1/1',
      },
      {
        id: 4,
        categoria: 'Saúde',
        descricao: 'Consulta Clínica Vida',
        tipo: 'Débito',
        valor: 'R$150,00',
        banco: 'Caixa',
        data: '15/03/2025',
        parcelas: '1/1',
      },
      {
        id: 5,
        categoria: 'Educação',
        descricao: 'Curso de TypeScript',
        tipo: 'Crédito',
        valor: 'R$299,00',
        banco: 'Nubank',
        data: '12/03/2025',
        parcelas: '2/2',
      },
      {
        id: 6,
        categoria: 'Alimentação',
        descricao: 'iFood - Hamburgueria X',
        tipo: 'Crédito',
        valor: 'R$72,30',
        banco: 'Banco do Brasil',
        data: '10/03/2025',
        parcelas: '1/1',
      },
      {
        id: 7,
        categoria: 'Transporte',
        descricao: 'Gasolina - Posto Shell',
        tipo: 'Débito',
        valor: 'R$120,00',
        banco: 'Caixa',
        data: '08/03/2025',
        parcelas: '1/1',
      },
      {
        id: 8,
        categoria: 'Lazer',
        descricao: 'Spotify Premium',
        tipo: 'Débito',
        valor: 'R$19,90',
        banco: 'Inter',
        data: '05/03/2025',
        parcelas: '1/1',
      },
      {
        id: 9,
        categoria: 'Saúde',
        descricao: 'Farmácia Popular',
        tipo: 'Débito',
        valor: 'R$88,70',
        banco: 'Nubank',
        data: '03/03/2025',
        parcelas: '1/1',
      },
      {
        id: 10,
        categoria: 'Educação',
        descricao: 'Compra de livros',
        tipo: 'Crédito',
        valor: 'R$134,50',
        banco: 'Banco do Brasil',
        data: '01/03/2025',
        parcelas: '1/1',
      },
];

export default function TransacoesTable(){
 return(  
    <section className="transacoes">
        <h2>Transações</h2>

        <div className="tabela">
          <table className="table">
            <thead>
              <tr>
                <th className="dados">Categoria</th>
                <th className="dados">Descrição</th>
                <th className="dados">Tipo</th>
                <th className="dados">Valor</th>
                <th className="dados">Banco</th>
                <th className="dados">Data</th>
                <th className="dados">Parcelas</th>
              </tr>
            </thead>
            <tbody>
            {transacoes.map((item) => {
              const Icon = CategoriaIcone[item.categoria] || UtensilsIcon;
              return (
                <tr key={item.id}>
                  <td className="categoria">
                    <span>
                    <Icon {...({size:20} as any)} />
                    </span>
                  </td>
                  <td>{item.descricao}</td>
                  <td>{item.tipo}</td>
                  <td className="valor2">{item.valor}</td>
                  <td>{item.banco}</td>
                  <td>{item.data}</td>
                  <td>{item.parcelas}</td>
                </tr>
              );
            })}
            </tbody>   
          </table>
        </div>
      </section>
 )
}