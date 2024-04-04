
import { Badge } from '@/components/ui/badge'


const ExperienceBadge = ({ icon, title }) => {
  return (
    <Badge

      variant={"bordered"}

    >

      <div className='flex justify-center items-center space-x-4'>
        {icon}

        <p className='font-light text-lg'>{title}</p>
      </div>




    </Badge>
  );
}

export default ExperienceBadge;