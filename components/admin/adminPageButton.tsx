import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

interface urlProps {
  name: string;
  url: string;
}

const AdminPageButton: React.FC<urlProps> = ({ name, url }) => {
  return (
    <div className="flex flex-row w-full h-full py-[20px] pl-[40px] pr-[16px] text-gray-0 bg-gray-80 rounded-[24px] justify-center items-center">
      <span className="w-full">{name}</span>
      <Link href={url}>
        <ArrowForwardIosIcon />
      </Link>
    </div>
  );
};

export default AdminPageButton;
