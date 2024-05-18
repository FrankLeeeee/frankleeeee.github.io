import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const GoogleScholarButton = ({ url }) => (
  <div className="flex w-full justify-center text-center text-slate-400">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center rounded bg-transparent border-slate-400 text-slate-400 px-2 py-2 font-semibold ring-1 ring-inset ring-slate-400"
    >
      <ArrowRightCircleIcon className="h-8 mr-2" />
      <span>View My Google Scholars</span>
    </a>
  </div>
);

export default GoogleScholarButton;
