import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const programitacillyRouting = () => {
    router.push("/product/programitacillyRouting");
  };
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <ul>
        <li>
          <Link href="/product/1">Product 1</Link>
        </li>
        <li>
          <Link href="/product/2">Product 2</Link>
        </li>
        <li>
          <Link href="/product/replace" replace>
            Product replace
          </Link>
        </li>
        <li>
          <Link href="/product/100">Product 100</Link>
        </li>
        <li onClick={programitacillyRouting}>programitacillyRouting</li>
      </ul>
    </div>
  );
};

export default Product;
