import IcomoonReact from 'icomoon-react';
import iconSet from '../assets/fonts/selection.json';

type IconType = {
  size: number;
};

function BackIcon({ size }: IconType): React.ReactElement {
  return <IcomoonReact iconSet={iconSet} icon="back" size={size} />;
}

export default BackIcon;
