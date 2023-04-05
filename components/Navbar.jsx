import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <>
    <nav className={styles['menu-container']} >
        <ActiveLink text='home' href='/'>Home</ActiveLink>
        <ActiveLink text='about'  href='/about'>About</ActiveLink>
        <ActiveLink text='contact' href='/contact'>Contact</ActiveLink>
    </nav>
    </>
  )
}
