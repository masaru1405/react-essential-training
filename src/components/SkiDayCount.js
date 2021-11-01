
import PropTypes from 'prop-types';
import {MdTerrain} from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import {FiCalendar} from 'react-icons/fi'

const percentToDecimal = (decimal) => {
   return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
   return(percentToDecimal(total / goal))
}


const SkiDayCount = ({total=10, powder=20, backcountry=30, goal=100}) => {
   return(
      <div>
         <h3>Total Days: <span>{total} days <FiCalendar/></span></h3>
            <h3>Powder Days: <span>{powder} days <TiWeatherSnow/></span></h3>
            <h3>Backcountry Days: <span>{backcountry} days <MdTerrain/></span></h3>
            <h3>Goal: {calcGoalProgress(total, goal)}</h3>
      </div>
   )
}

SkiDayCount.propTypes = {
   total: PropTypes.number,
   powder: PropTypes.number,
   backcountry: PropTypes.number
}

export default SkiDayCount