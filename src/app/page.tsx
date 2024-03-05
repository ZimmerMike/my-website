import Link from 'next/link';
import { ArrowForwardRounded } from '@mui/icons-material';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold my-16'>
        Hola, yo soy Miguel Angel, pero puedes llamarme Mike
      </h1>
      <p>Soy un desarrollador de software y este es mi portafolio</p>
      
      <Link
        href="/profile"
        className="flex items-center gap-5 rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 ease-linear duration-200 md:text-base">
        <span>Conoceme</span> <ArrowForwardRounded className="w-6" />
      </Link>
    </main>
  );
}
