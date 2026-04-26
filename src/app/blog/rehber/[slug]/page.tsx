import { permanentRedirect } from "next/navigation";
import { bonusBrandGuides } from "@/data/bonus-guides";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return bonusBrandGuides.map((item) => ({ slug: item.slug }));
}

export default function BlogBrandRehberPage({ params }: Props) {
  permanentRedirect(`/giris-bonuslari/${params.slug}`);
}
