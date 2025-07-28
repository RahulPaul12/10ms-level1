import Image from "next/image";

type TrailerDataProps= {
          data:{
               checklist : [
                    {
                         text: string;
                         icon: string;
                    }
               ];
               cta_text:{
                   name: string;
               };
               media:[]
     };   
}
export default function TrailerComponent ({trailerData}: {trailerData: TrailerDataProps}) {   

    return (
          <section className="w-full lg:max-w-[400px] order-2 fixed bottom-0 right-0 lg:top-[50px] lg:absolute">
               <div className="lg:sticky lg:top-[112px] ">
                   <div className="lg:border border-[#dbe1eb] lg:rounded-md bg-white">
                        <div className="hidden p-1 lg:block" id="">
                             <div className="relative overflow-hidden aspect-video">

                                   <img src="gallery_img" alt="" />
                                   {/* <span className="text-white absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                   ===</span> */}
                             </div>
                        </div>
                        <div className="w-full p-4 md:h-auto">
                              <div className="relative lg:static">
                                   <div className="flex flex-col w-full">
                                        <div className="flex items-center justify-between md:flex-col md:items-start">
                                             <div className="md:mb-3">
                                                   <div className="inline-block text-2xl font-semibold">৳1000</div>
                                              </div>
                                        </div>
                                        <button className="text-white py-2 border-b-4 border-[#15803d] hover:bg-[#15803d] rounded-md whitespace-nowrap button bg-[#1cab55] text-center md:w-full transition-all duration-300">{trailerData.data.cta_text?.name}</button>
                                   </div>
                              </div>
                         </div>
                         <div className="hidden lg:block">
                              <div className="py-2 md:p-4">
                                   <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                                   <ul className="grid">
                                        {
                                             trailerData.data.checklist.map((item, index) => (
                                                  <li key={index} className="flex items-center gap-4 mb-3 last:mb-0"><Image src={item?.icon} alt=""/>{item.text}</li>
                                             ))
                                        }
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>                    
          </section>
     )
}
