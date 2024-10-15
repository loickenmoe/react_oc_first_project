import PropTypes from 'prop-types'
import styled from 'styled-components'  //importation de styled-components
import colors from '../../utils/style/colors'
import { useState } from 'react'
import { useTheme } from '../../utils/hooks'
import DefaultPicture from '../assets/profile.png'


 
function Card({ label, title, picture }) {
    const { theme } = useTheme()
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐️' : ''
    return (
        <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle theme={theme}>
        {star} {title} {star}
      </CardTitle>
    </CardWrapper>
    )
}
//  definition des types de props (PropTypes) et prop exigés (isRequired)  
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
// definition des propriétés par defaut
Card.defaultProps = {
    title: '',
    label: '',
    picture: 'DefaultPicture ',
}
// creation du composant CardLabel et CardImage avec styled
const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
    height: 150px;
  width: 150px;
  align-self: center;
border-radius: 50%;
`
// styliser le composant au survol
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`



export default Card