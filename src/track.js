// via https://github.com/withspectrum/spectrum/blob/alpha/src/helpers/events.js#L11
const ga = typeof window !== 'undefined' ? window.ga : null

const track = (category, action, label) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('tracking: ', category, action, label)
  } else {
    if (!ga) return
    // only send events from production
    try {
      ga('send', 'event', category, action, label)
    } catch (err) {
      console.error('error logging event', err)
    }
  }
}

export default track
