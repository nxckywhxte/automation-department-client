import { BuildingLibraryIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface LogoProps {
  title: string
  subtitle: string
}

export const Logo = ({ title, subtitle }: LogoProps) => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <BuildingLibraryIcon className='w-6 h-6 sm:h-8 sm:w-8' />
      <div className='flex flex-col items-start'>
        <h1 className='text-base sm:text-lg font-semibold'>{title}</h1>
        <span className='text-xs font-light sm:font-normal'>{subtitle}</span>
      </div>
    </Link>
  )
}
