import { AvatarList,CardComponent, CustomTable, CustomChart, Header } from "@/components";
import { currencyConverter } from "@/utils";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";
import { CardComponent, Header } from "@/components";

function Home() {
const mockListData = [
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome SobreNome 1',
    subtitle: currencyConverter(1234.54)
  },
    {
    avatar: '/dnc-avatar.svg',
    name: 'Nome SobreNome 2',
    subtitle: currencyConverter(4523.54)
  },
    {
    avatar: '/dnc-avatar.svg',
    name: 'Nome SobreNome 3',
    subtitle: currencyConverter(6524.54)
  }
]

const mockTableData = {
  headers: ['Name', 'Email','Actions'],
  rows: 
  [
      [
    <span>Nome 1</span>,
    <span>nome1@email.com</span>,
    <button>ACTION</button>
  ],
    [
    <span>Nome 2</span>,
    <span>nome2@email.com</span>,
    <button>ACTION</button>
  ],
    [
    <span>Nome 3</span>,
    <span>nome3@email.com</span>,
    <button>ACTION</button>
  ],
  ]

}

  return (
    <>
    <Header/>
    <Container maxWidth="lg">
    <CardComponent>CARD</CardComponent>
    <CardComponent>
      <AvatarList listData={mockListData}/>
      </CardComponent>
      <CardComponent>
        <CustomTable
        headers={mockTableData.headers}
        rows={mockTableData.rows}
        />
      </CardComponent>
      <CardComponent>
        <CustomChart labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']} data={[1000.12, 2456.54, 986.32,654.89, 785.50, 352.20 ]} type="bar"/>
      </CardComponent>
    </Container>

    </>
  )
}

export default Home;