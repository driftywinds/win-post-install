import { useSelection } from '../../context/SelectionContext';
import { useScriptGenerator } from '../../hooks/useScriptGenerator';

const ActionBar = () => {
  const { selectedSoftware, selectedConfigs, clearAll } = useSelection();
  const { downloadScript } = useScriptGenerator();

  const totalSelected = selectedSoftware.length + selectedConfigs.length;

  const handleDownload = () => {
    downloadScript();
  };

  const handleClear = () => {
    if (
      totalSelected > 0 &&
      confirm(`Clear all ${totalSelected} selections?`)
    ) {
      clearAll();
    }
  };

  return (
    <div className="win98-inset" style={{
      padding: '8px',
      marginBottom: '8px',
      backgroundColor: 'var(--win95-light-gray)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* Left: Selection count */}
          <div style={{ fontSize: '11px' }}>
            <span style={{ fontWeight: 'bold' }}>{totalSelected}</span>
            <span> items selected </span>
            <span style={{ color: 'var(--win98-gray-medium)' }}>• </span>
            <span>
              {selectedSoftware.length} software, {selectedConfigs.length} configs
            </span>
          </div>

          {/* Right: Action buttons */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <button
              onClick={handleDownload}
              disabled={totalSelected === 0}
              className="win98-button win98-button-primary"
              style={{ minWidth: '120px' }}
            >
              Download Script
            </button>
            <button
              onClick={handleClear}
              disabled={totalSelected === 0}
              className="win98-button win98-button-danger"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
