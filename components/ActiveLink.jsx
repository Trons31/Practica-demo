import { useRouter } from 'next/router';

import Link from "next/link";

const styles = {
    color: 'red',
    textDecoration: 'underline'
}

export const ActiveLink = ({ href, text }) => {
 
    const {asPath} = useRouter();

  

  return (
    <Link href={href}> 
    <a style={ asPath === href ? styles : null } >{ text }</a>
    </Link>
  )
}
