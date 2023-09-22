//import SIcon from "./SIcon";
const SIcon = dynamic(() => import('./SIcon'))

const SkillCard = ({ skill }) => {
  return (  
    <div className='rounded-lg p-4 bg-one bg-opacity-10 place-content-center'> 
      <span className='justify-center h-full my-auto flex flex-wrap content-center'>
        <SIcon slug={skill.slug} color={skill.color} /> 
        <p style={{ backgroundColor: skill.color }} className={`text-center font-light text-sm w-full mt-3 text-gray-100 bg-opacity-10 inline-block` }>
          {skill.name}
        </p>
      </span>
    </div>
  );
}
 
export default SkillCard;
