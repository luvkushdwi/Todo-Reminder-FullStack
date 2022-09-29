
import './App.css';
import axios from "axios"
import DateTimePicker from "react-datetime-picker"
import React, { useState, useEffect } from "react"
function App() {

  const [ReminderMsg, setReminderMsg] = useState("")
  const [ReminderAt, setReminderAt] = useState()
  const [ReminderList, setReminderList] = useState([])

console.log(ReminderList)
  useEffect(() => {

    axios.get("http://localhost:9000/getAll").then(res => 
    setReminderList(res.data))

  }, [])


  const addReminder = () => {
    axios.post("http://localhost:9000/addReminder", { ReminderMsg, ReminderAt })
      .then(res => setReminderList(res.data))
      setReminderMsg("")
      setReminderAt()

  }

  const deleteReminder = (id) => {
    axios.post("http://localhost:9000/", { id })
      .then(res => setReminderList(res.data))
  }

  return (
    <div className="App">
      <div className="homepage">



        <div className="homepage_header">
          <h1>Remind me 👀</h1>
          <input type="text" placeholder="Reminds me todo..." value={ReminderMsg} onChange={e => setReminderMsg(e.target.value)} />
          <DateTimePicker
            value={ReminderAt}
            onChange={setReminderAt}s
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
          />
          <div className="button" onClick={addReminder}>Add Reminder</div>
        </div>

        <div className="homepage_body">
          {
            ReminderList.map((reminder) => (
              <div className="reminder_card" key={reminder.id}>
                <h2>{reminder.ReminderMsg}</h2>
                <h3>Remind Me at:</h3>
                <p>{reminder.ReminderAt}</p>
                <div className="button" onClick={() => deleteReminder(reminder.id)}>Delete</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
