import { AvatarList,CardComponent, CustomTable, Header } from "@/components";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";
import { CardComponent, Header } from "@/components";
import { Container } from "@mui/material";

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
    </Container>

    </>
  )
}

export default Home;