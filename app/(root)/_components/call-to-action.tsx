import PageLinkIcon from "@/app/_components/page-link-icon";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="relative text-white bg-black text-lg py-10 max-md:px-5 min-h-[300px]">
      <Image
        src={"/illustrations/kriskata-red-background.svg"}
        alt="Изработка на уеб сайтове и уеб приложения"
        fill
        className="absolute top-0 left-0 object-cover z-10"
      />
      <div className="max-w-2xl mx-auto relative z-20 space-y-5">
        <h2 className="text-center text-4xl mt-5">
          Професионална изработка на уеб сайтове и уеб приложения
        </h2>
        <p className="text-lg text-center">
          Предполагам, че този уеб сайт Ви е харесал! Нали? Ако и Вие искате да
          се отличавате с професионален уеб сайт като този, свържете се с мен за
          безплатна консултация.
        </p>
        <div className="text-center mt-10">
          <PageLinkIcon
            text="Свържете се с мен"
            link="/contacts"
            icon="Phone"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
