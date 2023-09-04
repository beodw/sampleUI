import logo from './logo.svg';
import './App.scss';

function App() {

//    <div class="flex-row flex-center">
//    Your content here
// </div>

// <div class="flex-col flex-start">
//    Your content here
// </div>

// <p class="text-lg">This is a large desktop text.</p>
  return (
<div class="layout-utilities layout">
  <div class="layout-utilities layout-sidebar">
    <div class="flex-utilities flex-row justify-start items-center expand-width bg turquoise">
      <img src="logo.png" alt="Company Logo" />
      <h2>Logip</h2>
    </div>

    <div class="flex-utilities.flex-col">
      <a href="#" class="sidebar-button border-radius-utilities.rounded-md">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities.rounded-md">
        <i class="fas fa-folder"></i>
        <span>Projects</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities.rounded-md">
        <i class="fas fa-tasks"></i>
        <span>Tasks</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities.rounded-md">
        <i class="fas fa-users"></i>
        <span>Teams</span>
      </a>
      <a href="#" class="sidebar-button border-radius-utilities.rounded-md">
        <i class="fas fa-cog"></i>
        <span>Settings</span>
      </a>
    </div>

    <div class="bg red h-50 w-75 border-radius-utilities.rounded-md expand-both flex flex-align-center flex-justify-center">
      <p>Centered Content</p>
    </div>
  </div>
  <div class="layout-utilities layout-main bg red">
    Main content
  </div>
</div>
  );
}

export default App;
