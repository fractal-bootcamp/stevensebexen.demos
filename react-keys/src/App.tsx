import { useState } from 'react';
import './App.css';
import Introduction from './introduction/Introduction';
import KeyDeletion from './deletion/KeyDeletion';
import NavBar from './NavBar';
import { AppView } from './types';
import Explanation from './explanation/Explanation';

const VIEWS: Record<AppView, () => JSX.Element> = {
  [AppView.HOME]: Introduction,
  [AppView.KEY_DELETION]: KeyDeletion,
  [AppView.EXPLANATION]: Explanation
}

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  function onAppViewChanged(newAppView: AppView) {
    setCurrentView(newAppView);
  }

  const ViewComponent = VIEWS[currentView];

  return (
    <>
      <NavBar currentView={currentView} onAppViewChanged={onAppViewChanged} />
      {<ViewComponent />}
    </>
  )
}