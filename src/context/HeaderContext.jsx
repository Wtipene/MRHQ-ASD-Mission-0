import {createContext} from 'react'

const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {

  const HeaderData = {
    contact: <a href="url">Contact</a>,
    merch:   <a href="url">Merch</a>,
    nutri:   <a href="url">Nutrional info</a>,
    profile: <img src='/images/profilepic.png' alt="profilepic"/>
  }

  const BodyData = {
    mainbody: <img src="/images/mainbody.jpg" alt="mainBody" />,
    maintext: <h1>STAY TRUE<br/> TO <br/> WHERO</h1>,
  }

  return (
  <HeaderContext.Provider value={{HeaderData, BodyData}}>
    {children}
  </HeaderContext.Provider>
  )
}

export default HeaderContext