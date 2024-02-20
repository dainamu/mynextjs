import { Metadata } from "next";

// Dynamic Metadata
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productid}`,
//   };
// };
type Props = {
  params: {
    productid: string;
  };
};

// Dynamic Metadata （非同期バージョン）
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productid}`);
    }, 7000);
  });
  return {
    title: `Product ${title}`,
  };
}
export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>Detaile about product{params.productid} </h1>
    </>
  );
}
