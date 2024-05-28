import { useAuth0 } from '@auth0/auth0-react';

//import { List } from "@/components";
import "./profilePage.scss";
import { Loading } from '@/components';

function ProfilePage() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />
  }

  return (
    isAuthenticated && (
      <div>
        <div className="p-16">
          <div className="p-8 bg-white shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p className="font-bold text-gray-700 text-xl">22</p>
                  <p className="text-gray-400">Friends</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-xl">10</p>
                  <p className="text-gray-400">Photos</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-xl">89</p>
                  <p className="text-gray-400">Comments</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img src={user?.picture} alt="" />
                </div>
              </div>
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Connect
                </button>
                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Message
                </button>
              </div>
            </div>
            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">
                {user?.name}
              </h1>
              <p className="font-light text-gray-600 mt-3">
                <p>{user?.email}</p>
              </p>
              <p className="mt-8 text-gray-500">
                Solution Manager - Creative Tim Officer
              </p>
              <p className="mt-2 text-gray-500">
                University of Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );

  // return (
  //   <div className="profilePage">
  //     <div className="details">
  //       <div className="wrapper">
  //         <div className="title">
  //           <h1>User </h1>
  //           <button>Update Profile</button>
  //         </div>
  //         <div className="info">
  //           <span>
  //             Avatar:
  //             <img
  //               src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //               alt=""
  //             />
  //           </span>
  //           <span>
  //             Username: <b>Franco</b>
  //           </span>
  //           <span>
  //             E-mail: <b>franco@gmail.com</b>
  //           </span>
  //         </div>
  //         <div className="title">
  //           <h1>Mi lista</h1>
  //           <button>Crear nuevo post</button>
  //         </div>
  //         <List />
  //         <div className="title">
  //           <h1>Guardar!</h1>
  //         </div>
  //         <List />
  //       </div>
  //     </div>
  //     <div className="chatContainer">
  //       <div className="wrapper">{/*    <Chat /> */}</div>
  //     </div>
  //   </div>
  // );
}

export default ProfilePage;
