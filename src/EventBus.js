import mitt from 'mitt'
const EventBus = {}
const emitter = new mitt()
EventBus.$on = emitter.on
EventBus.$emit = emitter.emit
export default EventBus