import logo from './logo.svg';
import './App.scss';
import homeIcon from './assets/icons/home.svg';
import searchIcon from './assets/icons/search.svg';
import settingsIcon from './assets/icons/settings.svg';
import projectsIcon from './assets/icons/projects.svg';
import teamIcon from './assets/icons/team.svg';
import tasksIcon from './assets/icons/tasks.svg';
import logout from './assets/icons/log-out.svg';
import help from './assets/icons/help.svg';
import brand from './assets/icons/brand.svg';
import phone from './assets/icons/phone.svg';
import avatar from './assets/icons/avatar.svg';
import close from './assets/icons/close.svg';
import more from './assets/icons/more.svg';
import video from './assets/icons/video.svg';
import flame from './assets/icons/flame.svg';
import bell from './assets/icons/bell.svg';
import messageIcon from './assets/icons/message.svg';
import calendar from './assets/icons/calendar.svg';
import Message from './components/Message';
function App() {
  return (
<div class="layout-utilities layout bg grey">
  <div class="layout-utilities flex-utilities flex-col justify-between border-radius-utilities padding-utilities padding-sm parent-relative w-25 rounded-lg bg lightgrey margin-utilities margin-md .layout-utilities layout-sidebar">
    <div class="flex-utilities justify-start items-center">
        <img class="parent-relative h-50 w-25" src={brand}/>
        <h2>Logip</h2>
    </div>

    <div class="flex-utilities.flex-col">
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-10 w-10 margin-utilities mr-10" src={homeIcon}/>
        <span>Home</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-10 w-10 margin-utilities mr-10" src={projectsIcon}/>
        <span>Projects</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-10 w-10 margin-utilities mr-10" src={tasksIcon}/>
        <span>Tasks</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-10 w-10 margin-utilities mr-10" src={teamIcon}/>
        <span>Teams</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-10 w-10 margin-utilities mr-10" src={settingsIcon}/>
        <span>Settings</span>
      </a>
    </div>
    <div className='parent-relative h-10'></div>

    <div className='flex-utilities flex-row justify-center parent-relative w-100'>
        <div class="bg white parent-relative h-75 w-80 border-radius-utilities rounded-lg expand-both flex-utilities flex-col flex-center padding-utilities padding-lg">
          <div className='flex-utilities flex-row items-center'>
            <p className='text bold margin-utilities mr-10'>Upgrade to Pro</p>
            <img src={flame} className='w-10 h-50 parent-relative'/>
          </div>
          <small>Get 1 month free andn unlock all pro features</small>
          <a href="#" className='button flex-utilities flex-col flex-center border-radius-utilities rounded-lg bg turquoise padding-utilities padding-md parent-relative w-50 margin-utilities margin-md'>Upgrade</a>
        </div>
    </div>
    <div className='parent-relative h-10'></div>
    <div class="flex-utilities.flex-col">
         <a href="#" class="sidebar-button border-radius-utilities rounded-md">
          <img class="parent-relative h-10 w-10 margin-utilities mr-10" src={help}/>
          <span>Help & information</span>
        </a>
        <a href="#" class="sidebar-button border-radius-utilities rounded-md">
          <img class="parent-relative h-10 w-10 margin-utilities mr-10" src={logout}/>
          <span>Log Out</span>
        </a>
    </div>
  </div>
  {/* Main Content */}
  <div class="layout-utilities layout-main bg grey">
    <div className='flex-utilities flex-row justify-between padding-utilities padding-lg border-radius-utilities rounded-lg bg white box-shadow-utilities shadow-sm'>
      <div className='flex-utilities flex-row'>
         <div className='bg red padding-utilities padding-sm profile margin-utilities mr-10'></div>
          <div className='flex-utilities flex-col'>
            <div>Margaret Fletcher</div>
            <div>Project Manager</div>
          </div>
      </div>
      {/* <div className='bg grey border-radius-utilities rounded-lg padding-utilities padding-md parent-relative w-10 flex-utilities flex-row items-center justify-center'>
        <img class="parent-relative w-25 h-75 margin-utilities" src={calendar} />
        <div className='text-md'>27 Feb</div>
      </div> */}

      <div className='flex-utilities flex-row justify-end items-center parent-relative w-50'>
        <div className='bg grey search flex-utilities flex-row parent-relative w-50 margin-utilities mr-10'>
          <img class="parent-relative w-10 margin-utilities mr-10" src={searchIcon}/>
          <input placeholder='Search' className='bg grey parent-relative w-90 outline-utilities outline-none border-utilities border-none'/>
        </div>
        <div className='bg grey border-radius-utilities rounded-full padding-utilities padding-sm parent-relative h-80 w-10 flex-utilities flex-col justify-center items-center margin-utilities mr-10'>
          <img className='parent-relative w-50 h-50' src={bell}/>
        </div>
        <div className='bg grey border-radius-utilities rounded-full padding-utilities padding-sm parent-relative h-80 w-10 flex-utilities flex-col justify-center items-center'>
           <img className='parent-relative w-50 h-50' src={messageIcon}/>
        </div>
      </div>
    </div>
    <div className='flex-utilities flex-row bg justify-between items-center parent-relative h-90'>
      <div className='flex-utilities flex-col parent-relative w-50 h-90 bg white border-radius-utilities rounded-lg padding-utilities padding-md'>
         <div className='parent-relative bg grey border-radius-utilities rounded-lg padding-utilities padding-md flex-utilities flex-col items-center justify-center'>
           <div className='parent-relative w-100 flex-utilities flex-row justify-end'>
              <img className='w-5 h-5 parent-relative' src={close}/>
           </div>
           <div className='bg white parent-relative w-25 h-50 border-radius-utilities rounded-full flex-utilities justify-center items-center padding-utilities padding-sm'>
                <img className='w-100 h-100 parent-relative' src={avatar}/>
           </div>
           <div className='parent-relative w-full'>Megan Norton</div>
           <div className='parent-relative w-full'>@megannorton</div>
           <div className='flex-utilities flex-row parent-relative w-100 h-75 justify-center items-center margin-utilities mt-10'>
            <div className='parent-relative w-5 h-5 bg white border-radius-utilities rounded-full padding-utilities padding-md flex-utilities justify-center items-center flex-row margin-utilities mr-10'>
              <img className='parent-relative h-25 w-100' src={phone}/>
            </div>
            <div className='parent-relative w-5 h-5 bg white border-radius-utilities rounded-full padding-utilities padding-md flex-utilities justify-center items-center flex-row margin-utilities mr-10'>
              <img className='parent-relative h-25 w-100' src={video}/>
            </div>
            <div className='parent-relative w-5 h-5 bg white border-radius-utilities rounded-full padding-utilities padding-md flex-utilities justify-center items-center flex-row'>
              <img className='parent-relative h-25 w-100' src={more}/>
            </div>
           </div>
         </div>
         <div className='parent-relative w-100 flex-utilities flex-row justify-center margin-utilities mt-10'>Today</div>
         <div className='parent-relative w-100 h-100 margin-utilities mt-10 flex-utilities flex-col items-between'>
            <Message isSentByMe={false} />
            <Message isSentByMe={false} />
            
         </div>
        
      </div>
      <div className='parent-relative h-90 w-45 flex-utilities flex-col justify-between padding-utilities padding-md'>
        <div className='bg white padding-utilities padding-md parent-relative h-45 border-radius-utilities rounded-lg'>
          <div className='flex-utilities flex-col'>
            <div className='flex-utilities flex-row justify-between'>
              <span>Team</span>
              <div className='padding-utilities padding-sm flex-utilities flex-row bg turquoise border-radius-utilities rounded-md'>
                63
              </div>
            </div>
          </div>
        </div>
        <div className='bg white parent-relative h-48 border-radius-utilities rounded-lg padding-utilities padding-md'>Meeting</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
