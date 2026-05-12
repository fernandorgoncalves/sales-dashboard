import styled from 'styled-components'

const CadastroArea = styled.div`
    background:#666;
`

const CadastroImage = styled.div`
    background-image: url(/Cadastro-image.svg);
    background-size:color: cover;
    height: 100vh;
    width: 50vw;
`

function Cadastro() {
  
  return (
    <>
      <CadastroArea>Cadastro</CadastroArea>
      <CadastroImage/>
    </>
  )
}

export default Cadastro