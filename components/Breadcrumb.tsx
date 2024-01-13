import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  slug: string;
};

export const Breadcrumb: React.FC<Props> = ({ slug }) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{slug}</a>
          </div>
        </li>
      </ol>
    </nav>
  );
};
