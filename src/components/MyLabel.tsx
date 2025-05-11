import './mylabel.css';

export interface Props {
  /** This is the message for the label */
  label: string;

  /** Size of the label: 'normal', 'h1', 'h2', 'h3' */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /** Optional capital letter */
  allCaps: boolean;

  /** What color of font to slect */
  color: 'primary' | 'secondary' | 'tertiary'

  /** What custom color of font to use */
  customColor?: string;

  /** What custom color of the background */
  backgroundColor?: string;
}


export const MyLabel: React.FC<Props> = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  customColor,
  backgroundColor = 'transparent'
}) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: customColor, backgroundColor}}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  );
};

