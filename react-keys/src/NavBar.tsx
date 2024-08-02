import { CSSProperties } from 'react';
import { AppView } from './types';

type NavBarItemProps = {
  appView: AppView;
  currentView: AppView;
  label: string;
  onAppViewChanged: (appView: AppView) => void;
};

function NavBarItem(props: NavBarItemProps) {
  const style: CSSProperties = {backgroundColor: props.appView === props.currentView ? '#eb3d66' : '#080808', padding: '4px 8px', cursor: 'pointer', borderRadius: '5px'}
  return (
    <div onClick={() => props.onAppViewChanged(props.appView)} style={style}>
      {props.label}
    </div>
  )
}

const VIEW_LABELS: Array<{appView: AppView, label: string}> = [
  {appView: AppView.HOME, label: 'Home'},
  {appView: AppView.KEY_DELETION, label: 'Key Deletion'},
  {appView: AppView.EXPLANATION, label: 'Explanation'}
];

type NavBarProps = {
  currentView: AppView;
  onAppViewChanged: (appView: AppView) => void;
}

export default function NavBar(props: NavBarProps) {
  const style: CSSProperties = {display: 'flex', gap: '16px'};
  return (
    <div style={style}>
      {VIEW_LABELS.map(({appView, label}) => <NavBarItem key={appView} appView={appView} currentView={props.currentView} label={label} onAppViewChanged={props.onAppViewChanged} />)}
    </div>
  )
}
