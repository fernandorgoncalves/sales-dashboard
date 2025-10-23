import { AvatarList,CardComponent, Header } from "@/components";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";

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

  return (
    <>
    <Header/>
    <Container maxWidth="lg">
    <CardComponent>CARD</CardComponent>
    <CardComponent>
      <AvatarList listData={mockListData}/>
    </CardComponent>
    </Container>

    </>
  )
}

export default Home;