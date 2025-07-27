import { learnByCourseValue, section } from "@/types/types";

type LearnByCourseComponentProps = {
  learnByCourse: section; 
};
export default function WhatYouLearnComponent ({ learnByCourse }: LearnByCourseComponentProps){
    return (
            //   {/* <!--===================================
            //            WHAT YOU LEARN PART START  
            //    =====================================--> */}
              <section className="container">
                  <div className="mb-7">
                      <div className="pt-4 pb-2">
                          <h2 className="mb-4 text-xl md:text-2xl font-semibold">{learnByCourse.name}</h2>
                      </div>
                      <ul className="grid grid-cols-2 gap-2 md:gap-4 mb-16 p-6 rounded-md border border-[#dbe1eb]"> 
                        {
                          learnByCourse.values.map((data:learnByCourseValue) => ( 
                              <li key={data.id} className="flex items-start gap-2 mb-2">
                                  <svg className="mr-1 mt-[2px] text-[#6294F8] flex-shrink-0"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true"  height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                  </path>
                                  </svg>
                                  <div >{data.text}</div>
                                  
                            </li>   
                        ))}
                        </ul>
                  </div>
              </section>
            //   {/* <!--===================================
            //             WHAT YOU LEARN PART END 
            //    =====================================--> */}
    )
}