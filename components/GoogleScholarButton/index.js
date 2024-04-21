import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const GoogleScholarButton = ({ url }) => (
  <div className="flex w-full justify-center text-center text-slate-300">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center rounded bg-transparent border-white text-slate-300 px-2 py-2 font-semibold ring-1 ring-inset ring-white"
    >
      <ArrowRightCircleIcon className="h-8 mr-2" />
      <span>View My Google Scholars</span>
    </a>
  </div>
);

export default GoogleScholarButton;
