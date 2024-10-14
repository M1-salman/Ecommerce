import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between p-3 mt-2 max-[1000px]:flex-col max-[1000px]:items-center bg-gray-100">
      <div>
        <ul className="flex max-[1000px]:my-2 max-[480px]:flex-col max-[480px]:items-center">
          <li className="max-[480px]:py-2">
            <Link
              href={`https://twitter.com/salman_code`}
              className="text-gray-500 px-2 max-[480px]:px-0 text-sm"
            >
              About
            </Link>
          </li>
          <li className="max-[480px]:py-2">
            <Link
              href={`https://twitter.com/salman_code`}
              className="text-gray-500 px-2 max-[480px]:px-0 text-sm"
            >
              Privacy policy
            </Link>
          </li>
          <li className="max-[480px]:py-2">
            <Link
              href={`https://twitter.com/salman_code`}
              className="text-gray-500 px-2 max-[480px]:px-0 text-sm"
            >
              Term & Conditions
            </Link>
          </li>
          <li className="max-[480px]:py-2">
            <Link
              href={`contact`}
              className="text-gray-500 px-2 max-[480px]:px-0 text-sm"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <span className="text-gray-500 text-sm">
          © 2023 salman_code. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
