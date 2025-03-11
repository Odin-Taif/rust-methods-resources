import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const resourse = [
    { name: "Rust String Methods", link: "/rust-string" },
    { name: "Rust Array Methods", link: "/rust-array" },
    { name: "Rust Vector Methods", link: "/rust-vector" },
    { name: "Rust HashMap Methods", link: "/rust-hashmap" },
  ]
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold">Rust Resources</h1>
        <nav className="mt-4 grid grid-cols-4 gap-2">
          {resourse.map((item, index) => (
            <Link key={index} href={item.link} className="p-6 bg-black hover:bg-gray-900 text-white rounded">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}