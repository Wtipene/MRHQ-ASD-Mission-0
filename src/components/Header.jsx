import {useContext} from 'react'
import HeaderContext from '../context/HeaderContext'

const Header = ({ title }) => {
  const {HeaderData} = useContext(HeaderContext)

  return (
    <div className="headerContainer">
      <div className="Header">
        <div className="profilepic">
            <figure>
                {HeaderData.profile}
                {title}
            </figure>
        </div>
        <div className="menu">
          {HeaderData.contact}
          {HeaderData.merch}
          {HeaderData.nutri}
          <button>Login</button>
        </div>
        <div className="dropMenu">
          <select name='menu' id="dropdownMenu">
            <option value='menu' selected disabled hidden>Menu</option>
            <option value='contact us'>{HeaderData.contact}</option>
            <option value='merch'>{HeaderData.merch}</option>
            <option value='nutrional info'>{HeaderData.nutri}</option>
            <option value='login'>Login</option>
          </select>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  title: 'EST BEER 1907',

}

export default Header

