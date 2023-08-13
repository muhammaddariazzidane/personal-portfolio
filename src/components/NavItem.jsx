export default function NavItem({ href, label }) {
  return (
    <li className="flex">
      <a
        href={href}
        className="flex hover:bg-indigo-500 rounded-md py-2 items-center px-4 -mb-1  dark:border-transparent hover:text-white transition-all duration-300"
      >
        {label}
      </a>
    </li>
  );
}
