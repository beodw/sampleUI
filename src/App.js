import logo from './logo.svg';
import './App.scss';
import homeIcon from './assets/icons/home.svg';
import searchIcon from './assets/icons/search.svg';
import settingsIcon from './assets/icons/settings.svg';
import projectsIcon from './assets/icons/projects.svg';
import teamIcon from './assets/icons/team.svg';
import tasksIcon from './assets/icons/tasks.svg';

function App() {
  return (
<div class="layout-utilities layout">
  <div class="layout-utilities flex-utilities flex-col justify-between border-radius-utilities padding-utilities padding-sm parent-relative w-25 rounded-lg bg grey margin-utilities margin-md ">
    <div class="flex-utilities flex-row justify-start items-center expand-width">
      <img class="parent-relative h-5 w-5" src={homeIcon}/>
      <h2>Logip</h2>
    </div>

    <div class="flex-utilities.flex-col">
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-5 w-5 margin-utilities mr-10" src={homeIcon}/>
        <span>Home</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-5 w-5 margin-utilities mr-10" src={projectsIcon}/>
        <span>Projects</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-5 w-5 margin-utilities mr-10" src={tasksIcon}/>
        <span>Tasks</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-5 w-5 margin-utilities mr-10" src={teamIcon}/>
        <span>Teams</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities rounded-md">
        <img class="parent-relative h-5 w-5 margin-utilities mr-10" src={settingsIcon}/>
        <span>Settings</span>
      </a>
    </div>
    <div className='parent-relative h-10'></div>

    <div className='flex-utilities flex-row justify-center parent-relative w-100'>
        <div class="bg white parent-relative h-75 w-80 border-radius-utilities rounded-lg expand-both flex-utilities flex-col flex-center padding-utilities padding-lg">
          <p className='text bold'>Upgrade to Pro</p>
          <small>Get 1 month free andn unlock all pro features</small>
          <a href="#" className='button flex-utilities flex-col flex-center border-radius-utilities rounded-lg bg turquoise padding-utilities padding-md parent-relative w-50 margin-utilities margin-md'>Upgrade</a>
        </div>
    </div>
    <div className='parent-relative h-10'></div>
    <div class="flex-utilities.flex-col">
         <a href="#" class="sidebar-button border-radius-utilities rounded-md">
          <img class="parent-relative h-5 w-5 margin-utilities mr-10" src={homeIcon}/>
          <span>Help & information</span>
        </a>
        <a href="#" class="sidebar-button border-radius-utilities rounded-md">
          <img class="parent-relative h-5 w-5 margin-utilities mr-10" src={homeIcon}/>
          <span>Log Out</span>
        </a>
    </div>
  </div>
  <div class="layout-utilities layout-main bg grey">
    <div className='flex-utilities flex-row justify-between padding-utilities padding-lg border-radius-utilities rounded-lg bg white box-shadow-utilities shadow-sm'>
      <div className='flex-utilities flex-row'>
         <div className='bg red padding-utilities padding-sm profile margin-utilities mr-10'></div>
          <div className='flex-utilities flex-col'>
            <div>Margaret Fletcher</div>
            <div>Project Manager</div>
          </div>
      </div>

      <div className='flex-utilities flex-col'>
        <div className='bg grey search flex-utilities flex-row'>
          <img class="absolute-width w-25" src={searchIcon}/>
            <input className='bg grey outline-utilities outline-none border-utilities border-none'/>
        </div>
      </div>
    </div>
    <div className='flex-utilities flex-row w-full bg red justify-between parent-relative '>
      <div>left col</div>
      <div>
        <div>top right box</div>
        <div>bottom right box</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
