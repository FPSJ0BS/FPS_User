// import React from 'react'

// const oldcode = () => {
//   return (
//     <div>
//         <div className="content-tab style-scroll">
//             <TabPanel className="inner">
//               <div className="row wow fadeInUp">
//                 <FlatList
//                   data={data?.jobs}
//                   renderItem={(item, index) => {
//                     return (
//                       <>
//                         {/* <JobHorizontal jobIdSet={jobIdSet} job={item} /> */}
//                         <JobCard jobIdSet={jobIdSet} job={item} />
//                         {index === 2 && !userData?.UID && (
//                           <div style={{ paddingInline: "-20px" }}>
//                             <JobSeekerBenefits
//                               title="What Job Seekers will get?"
//                               benefits={benefits}
//                               buttonLabel="Registration for Free"
//                               imageUrl={mainImage}
//                             />
//                           </div>
//                         )}
//                       </>
//                     );
//                   }}
//                   ListEmptyComponent={() => {
//                     return (
//                       <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
//                         <NoResults />
//                       </div>
//                     );
//                   }}
//                 />
//               </div>
//             </TabPanel>
//             <TabPanel className="inner">
//               <div className="d-flex flex-row flex-wrap justify-content-between">
//                 <FlatList
//                   data={data?.jobs}
//                   renderItem={(idx: any, index) => {
//                     return (
//                       <>
//                         <JobCardVertical jobIdSet={jobIdSet} job={idx} />
//                         {index === 2 && !userData?.UID && (
//                           <div
//                             style={{ paddingInline: "-20px" }}
//                             className="vertical"
//                           >
//                             <JobSeekerVertical
//                               title="What Job Seekers will get?"
//                               benefits={benefits}
//                               buttonLabel="Registration for Free"
//                               imageUrl={mainImage}
//                               // className={"cl2"}
//                             />
//                           </div>
//                         )}
//                       </>
//                     );
//                   }}
//                   ListEmptyComponent={() => {
//                     return (
//                       <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
//                         <NoResults />
//                       </div>
//                     );
//                   }}
//                 />
//               </div>
//             </TabPanel>{" "}
//           </div>
//     </div>
//   )
// }

// export default oldcode