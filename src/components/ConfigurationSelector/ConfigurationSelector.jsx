import { configCategories } from '../../data/categories';
import { getConfigsByCategory } from '../../data/configurations';
import ConfigSection from './ConfigSection';

const ConfigurationSelector = () => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div className="win98-inset" style={{ padding: '12px', marginBottom: '12px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>
          System Configurations
        </h2>
        <p style={{ fontSize: '11px', color: 'var(--win98-gray-dark)' }}>
          Optional Windows tweaks and optimizations. Customize File Explorer, performance settings, privacy, and more.
        </p>
      </div>

      {configCategories.map((category) => {
        const categoryConfigs = getConfigsByCategory(category.id);
        if (categoryConfigs.length === 0) return null;

        return (
          <ConfigSection
            key={category.id}
            category={category}
            configs={categoryConfigs}
          />
        );
      })}
    </div>
  );
};

export default ConfigurationSelector;
