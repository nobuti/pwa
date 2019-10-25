import { h } from 'preact'
import { useEffect, useState, useCallback, useRef } from 'preact/hooks'
import style from './style'

export default ({ user }) => {
  const [time, setTime] = useState(Date.now())
  const [count, setCount] = useState(10)
  const timer = useRef(0)

  const updateTime = useCallback(() => {
    setTime(Date.now())
  }, [])

  useEffect(() => {
    timer.current = setInterval(updateTime, 1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [updateTime])

  return (
    <div class={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={() => setCount(count + 1)}>Click Me</button> Clicked {count} times.
      </p>
    </div>
  )
}
