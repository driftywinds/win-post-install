import { useState } from 'react';
import { useSelection } from '../../context/SelectionContext';
import SoftwareCard from './SoftwareCard';

const CategorySection = ({ category, software }) => {
  const [expanded, setExpanded] = useState(true);
  const { selectAllInCategory, deselectAllInCategory, isAllCategorySelected } =
    useSelection();

  const allSelected = isAllCategorySelected(category.id);

  const handleToggleAll = () => {
    if (allSelected) {
      deselectAllInCategory(category.id);
    } else {
      selectAllInCategory(category.id);
    }
  };

  return (
    <section id={`category-${category.id}`} style={{ marginBottom: '16px' }}>
      <div className="win98-raised" style={{ padding: '8px', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="win98-button"
            style={{
              flex: 1,
              minWidth: '200px',
              minHeight: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'flex-start',
              padding: '8px 12px'
            }}
          >
            <span style={{ fontSize: '20px', flexShrink: 0 }}>{category.icon}</span>
            <div style={{ textAlign: 'left', flex: 1, overflow: 'hidden' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '3px', lineHeight: '1.2' }}>
                {category.name}
              </div>
              <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'var(--win98-gray-dark)', lineHeight: '1.3' }}>
                {category.description}
              </div>
            </div>
            <span style={{ fontSize: '10px', marginLeft: 'auto', flexShrink: 0 }}>
              {expanded ? '▼' : '▶'}
            </span>
          </button>
          <button
            onClick={handleToggleAll}
            className={allSelected ? 'win98-button win98-button-danger' : 'win98-button win98-button-primary'}
            style={{ minWidth: '100px' }}
          >
            {allSelected ? 'Deselect All' : 'Select All'}
          </button>
        </div>
      </div>

      {expanded && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '8px'
        }}>
          {software.map((sw) => (
            <SoftwareCard key={sw.id} software={sw} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
