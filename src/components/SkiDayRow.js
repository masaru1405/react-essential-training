import {MdTerrain} from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import {FiCalendar} from 'react-icons/fi'
import PropTypes from 'prop-types'

const SkiDayRow = ({resort, date, powder, backcountry}) => {
   return(
      <tr>
         <td>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
         <td>{resort}</td>
         <td>{(powder) ? <TiWeatherSnow /> : null }</td>
         <td>{(backcountry) ? <MdTerrain /> : null }</td>
      </tr>
   )
}

SkiDayRow.propTypes = {
   resort: PropTypes.string.isRequired,
   date: PropTypes.instanceOf(Date).isRequired,
   powder: PropTypes.bool,
   backcountry: PropTypes.bool
}

export default SkiDayRow