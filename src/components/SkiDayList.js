import {MdTerrain} from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import {FiCalendar} from 'react-icons/fi'
import SkiDayRow from './SkiDayRow';
import PropTypes from 'prop-types'

const SkiDayList = ({days}) => {
   return(
      <table>
         <thead>
            <tr>
               <th>Date</th>
               <th>Resort</th>
               <th>Powder</th>
               <th>Backcountry</th>
            </tr>
         </thead>
         <tbody>
            {
               days.map((day, i) => {
                  return(
                     <SkiDayRow 
                        key={i}
                        {...day}
                     />
                  )
               })
            }
         </tbody>
      </table>
   )
}

SkiDayList.propTypes = {
   days: function(props){
      if(!Array.isArray(props.days)){
         return new Error("SkiDayList should be an array")
      }else if(!props.days.length){
         return new Error("SkiDayList must have at least one record")
      }else{
         return null
      }
   }
}

export default SkiDayList