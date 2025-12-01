import { useSelection } from '../../context/SelectionContext';
import SoftwareIcon from '../Common/SoftwareIcon';

const SoftwareCard = ({ software }) => {
  const { selectedSoftware, toggleSoftware } = useSelection();
  const isSelected = selectedSoftware.includes(software.id);

  return (
    <div
      className={isSelected ? 'win98-inset win98-selected' : 'win98-raised'}
      style={{
        padding: '8px',
        cursor: 'pointer',
        backgroundColor: isSelected ? 'var(--win98-blue-dark)' : 'var(--win98-gray-light)'
      }}
      onClick={() => toggleSoftware(software.id)}
    >
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleSoftware(software.id)}
          onClick={(e) => e.stopPropagation()}
          className="win98-checkbox"
          style={{ marginTop: '2px', flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <SoftwareIcon iconName={software.icon} color={software.iconColor} size={20} />
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                flexWrap: 'wrap',
                fontSize: '11px',
                fontWeight: 'bold',
                color: isSelected ? 'var(--win98-white)' : 'var(--win98-black)'
              }}>
                <span>{software.name}</span>
                {software.popular && (
                  <span style={{
                    padding: '1px 4px',
                    fontSize: '10px',
                    backgroundColor: '#00a000',
                    color: 'white',
                    border: '1px solid black'
                  }}>
                    Popular
                  </span>
                )}
                {software.license === 'free' && (
                  <span style={{
                    padding: '1px 4px',
                    fontSize: '10px',
                    backgroundColor: '#0000ff',
                    color: 'white',
                    border: '1px solid black'
                  }}>
                    Free
                  </span>
                )}
                {software.license === 'open-source' && (
                  <span style={{
                    padding: '1px 4px',
                    fontSize: '10px',
                    backgroundColor: '#800080',
                    color: 'white',
                    border: '1px solid black'
                  }}>
                    Open Source
                  </span>
                )}
                {software.license === 'paid' && (
                  <span style={{
                    padding: '1px 4px',
                    fontSize: '10px',
                    backgroundColor: '#ffff00',
                    color: 'black',
                    border: '1px solid black'
                  }}>
                    Paid
                  </span>
                )}
                {software.license === 'freemium' && (
                  <span style={{
                    padding: '1px 4px',
                    fontSize: '10px',
                    backgroundColor: '#4040ff',
                    color: 'white',
                    border: '1px solid black'
                  }}>
                    Freemium
                  </span>
                )}
              </div>
              <p style={{
                fontSize: '10px',
                marginTop: '2px',
                color: isSelected ? '#e0e0e0' : 'var(--win98-gray-dark)'
              }}>
                {software.description}
              </p>
              {software.notes && (
                <p style={{
                  fontSize: '10px',
                  fontStyle: 'italic',
                  marginTop: '2px',
                  color: isSelected ? '#d0d0d0' : 'var(--win98-gray-medium)'
                }}>
                  Note: {software.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
