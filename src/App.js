import SkiDayCount from './components/SkiDayCount';
import SkiDayList from './components/SkiDayList'

function App() {
  return (
    <div>
      <SkiDayCount total={25} />
      <SkiDayList 
        days = {
          [
            {resort: 'Squaw Valley', date: new Date("5/12/2021"), powder: true, backcountry: false},
            {resort: 'Kirkwood', date: new Date("5/25/2021"), powder: false, backcountry: false},
            {resort: 'Mt. Tallac', date: new Date("5/12/2021"), powder: false, backcountry: true},
          ]
        }
      />
    </div>
  );
}

export default App;
