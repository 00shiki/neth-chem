import Link from "next/link";

type Props = {
  Item?: string;
  Routes?: string;
};

export const NavItem = ({ Item, Routes }: Props) => {
  return (
    <>
      <Link href={Routes}>
        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-amber-400 hover:underline underline-offset-8">
          {Item}
        </a>
      </Link>
    </>
  );
};
