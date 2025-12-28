import events from '../data/past-events.json'

export default {
  load() {
    return events
      .sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .map(event => ({
        ...event,
        formattedDate: new Date(event.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }))
  }
}
