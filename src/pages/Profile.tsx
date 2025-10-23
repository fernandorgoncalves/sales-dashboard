import { useContext } from "react";
import { CardComponent,Header, StyleButton } from "@/components"; 
import { AppThemeContext } from "@/contexts/AppThemeContext";

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
    <Header/>
    <CardComponent>
      <StyleButton className="primary" onClick={themeContext?.toggleTheme}>
        Trocar para o tema  {themeContext?.appTheme === 'light' ? 'escuro' :'claro'}
      </StyleButton>
    </CardComponent>
    </>
  )
}

export default Profile;