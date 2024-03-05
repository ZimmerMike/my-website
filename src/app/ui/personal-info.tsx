import Image from "next/image";

import { LaunchRounded } from '@mui/icons-material';

export default function PersonalInfo() {
  return (
    <div className="flex flex-col gap-4 h-fit-content items-center px-12 py-6 leading-loose">
      <div id="profileImageContainer" className="w-52 h-52">
        <Image
          className="rounded-full w-full h-full object-cover object-center"
          src="/me.jpg"
          alt="Profile image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="divide-y divide-solid divide-white divide-opacity-25">
        <section className="text-center">
          <h1 className="font-semibold text-xl">
            Miguel Angel Hernandez Jimenez
          </h1>
          <p>Desarrollador full-stack</p>
        </section>
        <section className="flex flex-col text-sm items-center">
          <h1><strong>CONTACTO</strong></h1>
          <p><strong>Telefono:</strong> (+52)55-4805-7103</p>
          <p><strong>Email:</strong> miguelhernandez0498@gmail.com</p>
          <a href="https://www.linkedin.com/in/miguel-angel-hernandez-jimenez-01282b21b"
            target="blank"
            className="inline-flex items-center justify-center p-5 mt-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white ease-linear duration-200">
              <span className="w-full">Conoceme en mi perfil de LinkedIn</span><LaunchRounded className='ml-3' />
          </a>
        </section>
      </div>
    </div>
  );
}
