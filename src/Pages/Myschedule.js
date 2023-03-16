import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


// const events = [
//   { title: 'Meeting', start: new Date() },
//   {title:"holiday",start:"2023-03-20T01:00",end:"2023-03-22T23:00"}
  
// ]

export default function Myschedule() {
  return (
    <div>
      <h1>Demo App</h1>
    <div className='calender'>
    <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    headerToolbar={{ left: "prev,next today", center: "title",right: "dayGridMonth,timeGridWeek,timeGridDay",
    }}
    contentHeight={"80vh"} eventDisplay={true} events={"https://fullcalendar.io/api/demo-feeds/events.json"}
    dayMaxEvents={1}
    eventClassNames={"pointer-hover"}
    dayHeaderClassNames="dayHeader"
    
         />


</div>
    </div>
  )
}

// a custom render function
// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }