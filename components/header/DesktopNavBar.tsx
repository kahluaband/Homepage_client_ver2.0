import Link from 'next/link';
import { Url } from './HeaderUrls';

interface DesktopNavBarProps {
  pathname: string;
  handleTicketClick: () => void;
  handleLinkClick: (name: string) => void;
}

const DesktopNavBar = ({
  pathname,
  handleTicketClick,
  handleLinkClick,
}: DesktopNavBarProps) => {
  return (
    <ul className="hidden min-[1500px]:flex flex-row gap-[64px]">
      {Url.map((url) => (
        <li
          key={url.name}
          className={`font-medium text-center text-[18px] leading-6 ${
            pathname === url.url ? 'text-primary-50' : ''
          }`}
        >
          {url.name === 'TICKET' ? (
            <div className="cursor-pointer" onClick={handleTicketClick}>
              {url.name}
            </div>
          ) : (
            <Link href={url.url} passHref>
              <div onClick={() => handleLinkClick(url.name)}>{url.name}</div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavBar;
