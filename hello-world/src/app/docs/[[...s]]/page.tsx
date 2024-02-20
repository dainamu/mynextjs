import { notFound } from "next/navigation";
export default function Docs({
  params,
}: {
  params: {
    s: string[];
  };
}) {
  if (params.s?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.s[0]} and consept {params.s[1]}
      </h1>
    );
  } else if (params.s?.length === 1) {
    return <h1>Viewing docs for feature {params.s[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
}
