type TrailerDataProps= {
          data:{
               checklist : [
                    {
                         text: string;
                    }
               ];
               cta_text:{
                   name: string;
               };
               media:[]
     };   
}
export default function TrailerComponent ({trailerData}: {trailerData: TrailerDataProps}) {   
    console.log(trailerData)
    return (
          <section className="w-full md:max-w-[830px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
               <div className="md:sticky md:top-[112px] ">
                   <div className="md:border border-[#dbe1eb] md:rounded-md">
                        <div className="hidden p-1 md:block" id="">
                             <div className="relative overflow-hidden aspect-video">
                                   <img src="dfdffd" alt="" />
                                   <span className="text-white absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                   ===</span>
                             </div>
                        </div>
                        <div className="w-full p-4 md:h-auto " id="variant">
                              <div className="relative md:static">
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
                         <div className="hidden md:block">
                              <div className="py-2 md:p-4">
                                   <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                                   <ul className="grid">
                                        {
                                             trailerData.data.checklist.map((item, index) => (
                                                  <li>{item.text}</li>
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
