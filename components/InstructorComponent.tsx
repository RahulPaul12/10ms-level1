import { instructorValue, section } from "@/types/types";
type InstructorComponentProps = {
  instructorData: section; 
};
export default function InstructorComponent ({ instructorData }: InstructorComponentProps){
    
    return (
            //   {/* <!--===================================
            //         COURSE INSTRUCTOR PART START  
            //    =====================================--> */}
              <section className="container">
                  <div className="mb-7 pt-2 flex flex-col gap-3">
                      <div className="pt-4 pb-2">
                          <h2 className="text-xl md:text-2xl font-semibold">{instructorData.name}</h2>
                      </div>
                        {
                         instructorData.values.map((instructor:instructorValue) => ( 
                            <div key={instructorData.order_idx} className="md:p-5 md:border border-[#dbe1eb] md:rounded-md flex items-center gap-4"> 
                              <div className="w-[73px] h-[73px] rounded-full overflow-hidden aspect-square flex-shrink-0">
                               <img className="w-full h-full" src={instructor.image} alt="" />
                              </div>
                              <div>
                                  <h3 className="text-lg">
                                      <a className="flex items-center hover:text-green" href="/skills/instructors/munzereen-shahid/">{instructor.name}</a>
                                  </h3>
                                  <div className="text-sm">
                                    <div dangerouslySetInnerHTML={{ __html: instructor.description || '' }} />
                                  </div>
                              </div>
                               </div>
                        ))}
                  </div>        
              </section>
            //   {/* <!--===================================
            //         COURSE INSTRUCTOR PART END  
            //    =====================================--> */}
    )
}
