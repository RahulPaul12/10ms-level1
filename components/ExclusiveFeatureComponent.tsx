import { ExclusiveCourseValue, section } from "@/types/types";

type ExclusiveFeatureComponentProps = {
  exclusiveFeature: section; 
};
export default function ExclusiveFeatureComponent ({ exclusiveFeature }: ExclusiveFeatureComponentProps){
    return (
    //{/* <!--===================================
    //         EXCLUSIVE FEATURE PART START  
    //    =====================================--> */}
      <section className="container">
          <div className="mb-7">
              <div className="pt-4 pb-2">
                  <h2 className="mb-4 text-xl md:text-2xl font-semibold">{exclusiveFeature.name}</h2>
              </div>
              <div className="mb-16 px-5 rounded-md border border-[#dbe1eb]"> 
                {
                  exclusiveFeature.values.map((data:ExclusiveCourseValue) => ( 
                      <div key={data.id} className="grid grid-cols-1 divide-y py-5 border-b last:border-none border-[#dbe1eb] ">
                         <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
                              <div className="flex flex-col gap-2">
                                   <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">{data.title}</h2>
                                   <ul className="flex flex-col gap-2">
                                      {
                                        data.checklist.map((list)=>(
                                          <li key={list} className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px] flex gap-5 items-start">
                                                <svg className="mr-1 mt-[2px] text-[#6294F8]"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true"  height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                                </svg>
                                                <p>{list}</p>
                                          </li>
                                        )) 
                                      }
                                   </ul>     
                              </div>
                              <div className="mb-4 max-w-[350px] ">
                                   <img className="w-[250px] h-auto" src={data.file_url} alt="" />
                              </div>
                         </div>
                      </div>
                ))}
              </div>
          </div>
      </section>
    //   {/* <!--===================================
    //         EXCLUSIVE FEATURE PART END 
    //    =====================================--> */}
    )
}