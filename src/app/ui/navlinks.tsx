'use client';

import { usePathname } from "next/navigation";

import Link from "next/link";
import {
  FolderRounded,
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  PersonRounded
} from '@mui/icons-material';

import clsx from "clsx";

const links = [
  { name: 'Inicio', href: '/', icon: HomeRounded },
  { name: 'Profile', href: '/profile', icon: PersonRounded },
  { name: 'Experiencia', href: '/profile/experience', icon: WorkRounded },
  { name: 'Educacion', href: '/profile/education', icon: SchoolRounded },
  { name: 'Proyectos', href: '/profile/projects', icon: FolderRounded }
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {
        links.map((link) => {
          const LinkIcon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex items-center h-[48px] grow justify-center gap-2 p-3 my-1 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-middle md:p-2 md:px-3 rounded-lg ease-linear duration-200',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}>
              <LinkIcon className='w-6' />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          )
        })
      }
    </>
  );
}