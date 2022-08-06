import {useContext} from 'react'
import HeaderContext from '../context/HeaderContext'


const MainBody = () => {
  const {BodyData} = useContext(HeaderContext)

  return (
    <div>
      <div className="mainBody">
        {BodyData.mainbody}
      </div>
      <div className="mainText">
          {BodyData.maintext}
      </div>
      <div className="searchBar">
          <input type="text" placeholder="e.g bottles" />
          <button type="submit">Search</button>
      </div>
    </div>
  )
}

export default MainBody
