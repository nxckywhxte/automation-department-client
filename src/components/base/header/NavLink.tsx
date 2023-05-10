import Link from 'next/link'

interface NavLinkProps {
  href: string
  title: string
}

export const NavLink = ({
  href,
  title
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      className='
        flex items-center px-1
        md:px-4 py-3
        dark:hover:text-drPink
        dark:hover:bg-drCurrentLine/40
        hover:bg-drCurrentLine/10
        hover:rounded-md'>
      {title}
    </Link>
  )
}
