/* import Chat from '../../components/chat/Chat';
 *//* import List from '../../components/list/List'; */
import List from '../../components/list/List';
import './profilepage.scss';

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User </h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>Franco</b>
            </span>
            <span>
              E-mail: <b>franco@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>Mi lista</h1>
            <button>Crear nuevo post</button>
          </div>
          <List />
          <div className="title">
            <h1>Guardar!</h1>
          </div>
        <List /> 
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
       {/*    <Chat /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
