import IcomoonReact from 'icomoon-react';
import iconSet from '../assets/fonts/selection.json';
import { IConProps } from '../types/index';

function BackIcon({ size }: IConProps): React.ReactElement {
  return <IcomoonReact iconSet={iconSet} icon="back" size={size} />;
}

export default BackIcon;
