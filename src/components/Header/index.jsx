import { Link } from "react-router-dom"
import styled from "styled-components"  //importation du style
import colors from "../../utils/style/colors"
import DarkLogo from "../assets/dark-logo.png"


const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// styliser un élément qui vient d'une bibliothèque: creation du composants stylisé
const StyleLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    &:focus{
      color: white; 
      border-radius: 30px; 
      background-color: ${colors.primary};
    
    }
      ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
 
function Header() {
    return (
        <NavContainer>
            <Link to="/"><HomeLogo src={DarkLogo} /></Link>
            {/* remplacement des simples balises Link par les balises portant le nom de notre composant  */}
            <div>
                <StyleLink to="/">Accueil</StyleLink>
                <StyleLink to="/freelances">Profile</StyleLink>
                <StyleLink to="/survey/1">Faire le test</StyleLink>
            </div>
        </NavContainer>
    )
}

export default Header