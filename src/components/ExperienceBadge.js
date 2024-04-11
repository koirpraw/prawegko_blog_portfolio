
import { Badge } from '@/components/ui/badge'


const ExperienceBadge = ({ icon, title }) => {
  return (
    <Badge

      variant={"outlined"}
      className='text-center font-light'

    >

      <div className='flex flex-col lg:flex-row justify-center items-center'>
        {icon}

        <p className='font-light text-sm'>{title}</p>
      </div>




    </Badge>
  );
}

export default ExperienceBadge;