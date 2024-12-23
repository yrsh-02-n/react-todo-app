import { useEffect, useState } from 'react'
import styles from './MainTitle.module.css'

function MainTitle({ children }) {
  const [titleEffect, setTitleEffect] = useState(styles.appTitle)

  useEffect(() => {
    const titleGlowEffect = setInterval(() => {
      setTitleEffect((effect) =>
        effect === styles.appTitle ? styles.appTitleGlow : styles.appTitle
      )
    }, 1500)

    return () => clearInterval(titleGlowEffect)
  }, [])

  return <h1 className={titleEffect}>{children}</h1>
}

export default MainTitle
