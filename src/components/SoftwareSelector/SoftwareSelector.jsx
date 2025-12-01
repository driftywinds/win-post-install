import { categories } from '../../data/categories';
import { getSoftwareByCategory } from '../../data/software-catalog';
import CategorySection from './CategorySection';

const SoftwareSelector = () => {
  // Sort categories by order
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <div style={{ marginBottom: '16px' }}>
      <div className="win98-inset" style={{ padding: '12px', marginBottom: '12px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>
          Select Software
        </h2>
        <p style={{ fontSize: '11px', color: 'var(--win98-gray-dark)' }}>
          Choose the applications you want to install. All installations use winget (Windows Package Manager).
        </p>
      </div>

      {sortedCategories.map((category) => {
        const categorySoftware = getSoftwareByCategory(category.id);
        if (categorySoftware.length === 0) return null;

        return (
          <CategorySection
            key={category.id}
            category={category}
            software={categorySoftware}
          />
        );
      })}
    </div>
  );
};

export default SoftwareSelector;
