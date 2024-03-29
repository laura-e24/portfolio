import Image from 'next/image'
import { techFullName } from '@/utils/general';
import { Tooltip } from 'react-tooltip';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
 
const SIcon = dynamic(() => import('./SIcon'))
const FAIcon = dynamic(() => import('./FAIcon'))

const ProjectCard = ({ project }) => {
const [thumbnailImg, setThumbnailImg] = useState("");

useEffect(() => {
  project.thumbnail().then((res: string) => setThumbnailImg(res))
}, []);

return (  
   <>
    <div className='rounded lg:bg-one lg:bg-opacity-5 mb-10 p-4 lg:p-6'> 
      <div className='w-full lg:flex relative'>
        <div className='bg-center bg-cover rounded bg-img-size' style={{ backgroundImage:`url(${thumbnailImg})`, zIndex: -1}}>
        </div>
        <div className='absolute top-0 right-0 hidden lg:flex' style={{top: -8}}>
          {project.repo && (
            <a href={project.repo} target='_blank'>
              <FAIcon color='hover:text-gray-500' size='md' name="github" type='brands' />
            </a>
          )}
          {project.deploy && (
            <a href={project.deploy} target='_blank'>
              <FAIcon color='hover:text-gray-500' size='md' name="arrow-up-right-from-square" type='light' />
            </a>
          )}
        </div>
        <div className='relative bg-one bg-opacity-5 lg:bg-transparent rounded p-4 lg:py-0 lg:px-16 mt-2 lg:my-auto text-container-size'>
          <div className='absolute top-0 right-0 flex lg:hidden space-x-2 p-2'>
            {project.repo && (
              <a href={project.repo} target='_blank'>
               <FAIcon color='text-four active:text-gray-500' name="github" type='brands' />
              </a>
            )}
            {project.deploy && (
              <a href={project.deploy} target='_blank'>
                <FAIcon color='text-four active:text-gray-500' name="arrow-up-right-from-square" />
              </a>
            )}
          </div>
          <p className="font-medium text-gray-100 text-lg inline-block">
            {project?.name}
          </p>
          <p className="font-light text-sm mt-2 text-gray-400 leading-tight">
            {project?.description}
          </p>
          <div>
            <span className='border-b border-gray-300 border-opacity-10 w-full flex flex-wrap pb-3 mt-6 gap-x-4 gap-y-3 justify-center'>
              {project.tech.map((t, index) => {
                return (
                  <span key={index}>
                    {t !== "skeleton" ? (
                      <SIcon 
                        height={23}
                        width={23}
                        slug={t} 
                        dataToolTipId={t} 
                        dataToolTipContent={techFullName(t)}   
                     /> 
                    ) : (
                      <Image
                        data-tooltip-id={t} 
                        data-tooltip-content={techFullName(t)}  
                        key={index}
                        src={`/skills/${t}.png`}
                        alt=""
                        height={23}
                        width={23}
                      />
                    )}
                    <Tooltip style={{backgroundColor:"#13111C"}} id={t} />
                  </span>
                )}
              )}
            </span>
            <span className='w-full flex flex-wrap justify-center text-center font-light text-sm pt-2'>
              <p id="bullet" className='text-gray-400'>{project.date}</p>
              <p id="bullet" className='text-gray-400'>{project.type}</p>
              <p className='text-gray-400'>{project.status}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <style>
      {`
        @media (min-width: 1024px) {
          .bg-img-size {
            width: 450px;
          }
          .text-container-size {
            width: calc(100% - 450px);
          }
        }
        .bg-img-size {
          height: 256px;
          width: 100%;
        }
        .text-container-size {
          width: 100%;
        }
      `}
    </style>
   </>
  );
}
 
export default ProjectCard;
