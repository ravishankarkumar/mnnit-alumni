import events from '../data/upcoming-events.json'

export default {
  load() {
    return events
      // Optional: Filter to only show events from today onwards
      .filter(event => new Date(event.date) >= new Date(new Date().setHours(0,0,0,0)))
      // Sort: Earliest date first (soonest event at the top)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map(event => ({
        ...event,
        formattedDate: new Date(event.date).toLocaleDateString('en-US', {
          weekday: 'long', // Useful for upcoming events
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }))
  }
}