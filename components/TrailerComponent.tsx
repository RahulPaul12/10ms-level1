export default function TrailerComponent (){
    return (
            <section className="w-full md:max-w-[830px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
                <div className="md:sticky md:top-[112px] ">
                     <div className=" md:border">
                          <div className="hidden p-1 md:block" id="">
                               <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                                    <div className="relative">
                                        <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                        </span>
                                        
                                    </div>
                               </div>
                          </div>
                      </div>
                </div>                    
            </section>
       )
}