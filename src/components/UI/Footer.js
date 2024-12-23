import { RiGithubFill } from 'react-icons/ri'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.footerLink}
        href="https://github.com/yrsh-02-n/react-todo-app"
        target="blank"
      >
        <RiGithubFill className={styles.githubIcon} />
        View code on Github
      </a>
    </footer>
  )
}

export default Footer
