import { useSelection } from '../../context/SelectionContext';

const ConfigOption = ({ config }) => {
  const { selectedConfigs, toggleConfig } = useSelection();
  const isSelected = selectedConfigs.includes(config.id);

  return (
    <div
      className={isSelected ? 'win98-inset win98-selected' : 'win98-raised'}
      style={{
        padding: '8px',
        cursor: 'pointer',
        backgroundColor: isSelected ? 'var(--win98-blue-dark)' : 'var(--win98-gray-light)'
      }}
      onClick={() => toggleConfig(config.id)}
    >
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleConfig(config.id)}
          onClick={(e) => e.stopPropagation()}
          className="win98-checkbox"
          style={{ marginTop: '2px', flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
            marginBottom: '4px'
          }}>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 'bold',
              color: isSelected ? 'var(--win98-white)' : 'var(--win98-black)'
            }}>
              {config.name}
            </h4>
            {config.recommended && (
              <span style={{
                padding: '1px 4px',
                fontSize: '10px',
                backgroundColor: '#00a000',
                color: 'white',
                border: '1px solid black'
              }}>
                Recommended
              </span>
            )}
            {config.requiresAdmin && (
              <span style={{
                padding: '1px 4px',
                fontSize: '10px',
                backgroundColor: '#ffff00',
                color: 'black',
                border: '1px solid black'
              }}>
                Admin Required
              </span>
            )}
            {config.requiresRestart && (
              <span style={{
                padding: '1px 4px',
                fontSize: '10px',
                backgroundColor: '#ff8000',
                color: 'white',
                border: '1px solid black'
              }}>
                Restart Required
              </span>
            )}
          </div>
          <p style={{
            fontSize: '10px',
            color: isSelected ? '#e0e0e0' : 'var(--win98-gray-dark)'
          }}>
            {config.description}
          </p>
          {config.warning && (
            <p style={{
              fontSize: '10px',
              fontWeight: 'bold',
              marginTop: '4px',
              color: isSelected ? '#ffaa00' : '#ff6600'
            }}>
              ⚠️ {config.warning}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfigOption;
