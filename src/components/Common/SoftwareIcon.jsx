import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';
import * as DiIcons from 'react-icons/di';
import { FiPackage } from 'react-icons/fi';
import * as CustomIcons from './CustomIcons';

const SoftwareIcon = ({ iconName, color, size = 24 }) => {
  // Check for custom icons first (for software without official react-icons)
  if (CustomIcons[iconName]) {
    const CustomIcon = CustomIcons[iconName];
    return <CustomIcon size={size} />;
  }

  // Try to get the icon from multiple icon libraries
  const Icon = SiIcons[iconName] || FaIcons[iconName] || VscIcons[iconName] || DiIcons[iconName] || FiPackage;

  return (
    <Icon
      size={size}
      style={{ color: color || '#6B7280', flexShrink: 0 }}
    />
  );
};

export default SoftwareIcon;
