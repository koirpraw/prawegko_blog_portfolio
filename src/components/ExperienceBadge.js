
import { Badge } from '@/components/ui/badge'


const ExperienceBadge = ({ icon, title }) => {
  return (
    <Badge

      variant={"outlined"}
      className='p-1.5 text-center font-light'

    >

      <div className='flex flex-grow justify-center items-center'>
        {icon}

        {title}
      </div>




    </Badge>
  );
}

export default ExperienceBadge;