import { productData } from "@/types/types";

type TitleDescriptionComponentProps = {
  productData: productData; 
};
export default function TitleDescriptionComponent ({ productData }: TitleDescriptionComponentProps){
    const { title, description } = productData.data;
    return (
            <div className="flex flex-1 flex-col justify-center order-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
                <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">{title}</h1>
                <div className="text-base text-[#8f8e93] font-normal leading-6" dangerouslySetInnerHTML={{ __html: description || '' }} />
            </div>
    )
}