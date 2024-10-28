// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import ProductDetail from '../../components/admin/ProductDetail';
// import OrderDetail from '../../components/admin/OrderDetail';

// import UserDetail from '../../components/admin/UserDetail';
// import { useState } from 'react';

// const AdminDashboard = () => {
//     const [isload , setisload] = useState(false)
//     return (
//         <div>
//             {/* Top */}
//             <div className="top mb-5 px-5 mt-5">
//                 <div className="bg-purple-50 py-5 border border-purple-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
//                     <h1 className="text-center text-2xl font-bold text-violet-500">Admin Dashboard</h1>
//                 </div>
//             </div>

//             <div className="px-5">
//                 {/* Mid */}
//                 <div className="mid mb-5">
//                     {/* main */}
//                     <div className="bg-purple-50 py-5 rounded-xl border border-purple-100 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
//                         {/* image */}
//                         <div className="flex justify-center items-center h-20">
//                             <img
//                                 src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnJbf6AKUkKb4rskncNv4pgcaL-J1xjUm8_yEDdkblD6BIYWbi"
//                                 alt="Profile"
//                                 className="w-25 h-20 rounded-2xl bg-violet-300 transition duration-300 ease-in-out transform hover:scale-110"
//                             />
//                         </div>

//                         {/* text */}
//                         <div className="text-center">
//                             <h1 className="text-lg text-violet-500 font-semibold">
//                                 <span className="font-bold">Name:</span> Faizan zia
//                             </h1>
//                             <h1 className="text-lg text-violet-500 font-semibold">
//                                 <span className="font-bold">Email:</span> test@gmail.com
//                             </h1>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom */}
//                 <div className="">
//                     <Tabs>
//                         <TabList className="flex flex-wrap -m-4 text-center justify-center space-x-4">
//                             {/* Total Products */}
//                             <Tab onClick={()=>setisload(true)} className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
//                                 <div className="border bg-purple-50 hover:bg-purple-100 border-purple-100 px-4 py-3 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                                     <div className="text-violet-500 w-12 h-12 mb-3 inline-block">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width={50}
//                                             height={50}
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             className="lucide lucide-shopping-basket"
//                                         >
//                                             <path d="m5 11 4-7" />
//                                             <path d="m19 11-4-7" />
//                                             <path d="M2 11h20" />
//                                             <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
//                                             <path d="m9 11 1 9" />
//                                             <path d="M4.5 15.5h15" />
//                                             <path d="m15 11-1 9" />
//                                         </svg>
//                                     </div>
//                                     <h2 className="title-font font-medium text-3xl text-violet-400">10</h2>
//                                     <p className="text-violet-500 font-bold">Total Products</p>
//                                 </div>
//                             </Tab>

//                             {/* Total Order */}
//                             <Tab onClick={()=>setisload(true)} className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
//                                 <div className="border bg-purple-50 hover:bg-purple-100 border-purple-100 px-4 py-3 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                                     <div className="text-violet-500 w-12 h-12 mb-3 inline-block">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width={50}
//                                             height={50}
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             className="lucide lucide-list-ordered"
//                                         >
//                                             <line x1={10} x2={21} y1={6} y2={6} />
//                                             <line x1={10} x2={21} y1={12} y2={12} />
//                                             <line x1={10} x2={21} y1={18} y2={18} />
//                                             <path d="M4 6h1v4" />
//                                             <path d="M4 10h2" />
//                                             <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
//                                         </svg>
//                                     </div>
//                                     <h2 className="title-font font-medium text-3xl text-violet-400">10</h2>
//                                     <p className="text-violet-500 font-bold">Total Order</p>
//                                 </div>
//                             </Tab>

//                             {/* Total User */}
//                             <Tab onClick={()=>setisload(true)} className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
//                                 <div className="border bg-purple-50 hover:bg-purple-100 border-purple-100 px-4 py-3 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                                     <div className="text-violet-500 w-12 h-12 mb-3 inline-block">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width={50}
//                                             height={50}
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             className="lucide lucide-users"
//                                         >
//                                             <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                                             <circle cx={9} cy={7} r={4} />
//                                             <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                                             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                                         </svg>
//                                     </div>
//                                     <h2 className="title-font font-medium text-3xl text-violet-400">10</h2>
//                                     <p className="text-violet-500 font-bold">Total User</p>
//                                 </div>
//                             </Tab>
//                         </TabList>

//                         {isload?
//                          <div>
//                          <TabPanel>
//                              <div className="transition-opacity duration-500 ease-in-out opacity-100">
//                                  <ProductDetail />
//                              </div>
//                          </TabPanel>
                        
//                          <TabPanel>
//                              <div className="transition-opacity duration-500 ease-in-out opacity-100">
//                                  <OrderDetail />
//                              </div>
//                          </TabPanel>
                        
//                          <TabPanel>
//                              <div className="transition-opacity duration-500 ease-in-out opacity-100">
//                                  <UserDetail />
//                              </div>
//                          </TabPanel>
//                         </div> : ""}
//                     </Tabs>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import { useState } from 'react';

const AdminDashboard = () => {
    const [isload, setisload] = useState(false);

    return (
        <div className="p-5">
            {/* Top */}
            <div className="top mb-5">
                <div className="bg-purple-50 py-5 border border-purple-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                    <h1 className="text-center text-2xl font-bold text-violet-500">Admin Dashboard</h1>
                </div>
            </div>

            <div className="px-5">
                {/* Mid */}
                <div className="mid mb-5">
                    <div className="bg-purple-50 py-5 rounded-xl border border-purple-100 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
                        <div className="flex justify-center items-center h-20">
                            <img
                                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnJbf6AKUkKb4rskncNv4pgcaL-J1xjUm8_yEDdkblD6BIYWbi"
                                alt="Profile"
                                className="w-20 h-20 rounded-full bg-violet-300 transition duration-300 ease-in-out transform hover:scale-110"
                            />
                        </div>
                        <div className="text-center mt-3">
                            <h1 className="text-lg text-violet-500 font-semibold">
                                <span className="font-bold">Name:</span> Faizan Zia
                            </h1>
                            <h1 className="text-lg text-violet-500 font-semibold">
                                <span className="font-bold">Email:</span> test@gmail.com
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap justify-center space-x-2">
                            {/* Total Products */}
                            <Tab onClick={() => setisload(true)} className="p-2 w-full md:w-1/4 cursor-pointer">
                                <div className="border bg-purple-50 hover:bg-purple-100 border-purple-100 px-3 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                    <div className="text-violet-500 w-10 h-10 mb-2 mx-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={40}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shopping-basket"
                                        >
                                            <path d="m5 11 4-7" />
                                            <path d="m19 11-4-7" />
                                            <path d="M2 11h20" />
                                            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                            <path d="m9 11 1 9" />
                                            <path d="M4.5 15.5h15" />
                                            <path d="m15 11-1 9" />
                                        </svg>
                                    </div>
                                    <h2 className="font-medium text-2xl text-violet-400">10</h2>
                                    <p className="text-violet-500 font-bold">Total Products</p>
                                </div>
                            </Tab>

                            {/* Total Order */}
                            <Tab onClick={() => setisload(true)} className="p-2 w-full md:w-1/4 cursor-pointer">
                                <div className="border bg-purple-50 hover:bg-purple-100 border-purple-100 px-3 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                    <div className="text-violet-500 w-10 h-10 mb-2 mx-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={40}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-list-ordered"
                                        >
                                            <line x1={10} x2={21} y1={6} y2={6} />
                                            <line x1={10} x2={21} y1={12} y2={12} />
                                            <line x1={10} x2={21} y1={18} y2={18} />
                                            <path d="M4 6h1v4" />
                                            <path d="M4 10h2" />
                                            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                        </svg>
                                    </div>
                                    <h2 className="font-medium text-2xl text-violet-400">10</h2>
                                    <p className="text-violet-500 font-bold">Total Orders</p>
                                </div>
                            </Tab>

                            {/* Total Users */}
                            <Tab onClick={() => setisload(true)} className="p-2 w-full md:w-1/4 cursor-pointer">
                                <div className="border bg-purple-50 hover:bg-purple-100 border-purple-100 px-3 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                    <div className="text-violet-500 w-10 h-10 mb-2 mx-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={40}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-users"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <h2 className="font-medium text-2xl text-violet-400">10</h2>
                                    <p className="text-violet-500 font-bold">Total Users</p>
                                </div>
                            </Tab>
                        </TabList>

                        {/* Panels */}
                        {isload && (
                    <div className="border border-6 border-gray-800 rounded-lg shadow-md p-5 mt-5 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
                    <TabPanel>
                        <ProductDetail />
                    </TabPanel>
                    <TabPanel>
                        <OrderDetail />
                    </TabPanel>
                    <TabPanel>
                        <UserDetail />
                    </TabPanel>
                </div>
                
                        )}
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
