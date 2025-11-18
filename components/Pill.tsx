const Pill = ({ label }: { label: string }) => (
  <span className="px-4 py-2 bg-gray-100 rounded-full cursor-pointer text-sm hover:bg-blue-500 hover:text-white">
    {label}
  </span>
);

export default Pill;
