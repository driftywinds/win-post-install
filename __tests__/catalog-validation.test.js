import { describe, test, expect } from '@jest/globals';
import { softwareCatalog } from '../src/data/software-catalog.js';
import { configurations } from '../src/data/configurations.js';
import { categories, configCategories } from '../src/data/categories.js';

// Extract valid category IDs from categories.js
const VALID_SOFTWARE_CATEGORIES = categories.map(cat => cat.id);
const VALID_CONFIG_CATEGORIES = configCategories.map(cat => cat.id);
const VALID_LICENSES = ['free', 'freemium', 'open-source', 'paid'];

// Helper functions
const isKebabCase = (str) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);
const isHexColor = (str) => /^#[0-9A-Fa-f]{6}$/.test(str);
const hasWingetFormat = (str) => str && str.includes('.');

describe('Software Catalog Validation', () => {
  test('should have software items', () => {
    expect(softwareCatalog).toBeDefined();
    expect(Array.isArray(softwareCatalog)).toBe(true);
    expect(softwareCatalog.length).toBeGreaterThan(0);
  });

  test('all software IDs should be unique', () => {
    const ids = softwareCatalog.map(item => item.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  test.each(softwareCatalog)('software "$name" should have valid schema', (item) => {
    // Required fields
    expect(item.id).toBeDefined();
    expect(typeof item.id).toBe('string');
    expect(item.id.length).toBeGreaterThan(0);

    expect(item.name).toBeDefined();
    expect(typeof item.name).toBe('string');
    expect(item.name.length).toBeGreaterThan(0);

    expect(item.description).toBeDefined();
    expect(typeof item.description).toBe('string');
    expect(item.description.length).toBeGreaterThan(0);

    expect(item.category).toBeDefined();
    expect(typeof item.category).toBe('string');

    expect(item.wingetId).toBeDefined();
    expect(typeof item.wingetId).toBe('string');
    expect(item.wingetId.length).toBeGreaterThan(0);

    expect(item.icon).toBeDefined();
    expect(typeof item.icon).toBe('string');
    expect(item.icon.length).toBeGreaterThan(0);

    expect(item.popular).toBeDefined();
    expect(typeof item.popular).toBe('boolean');

    expect(item.requiresAdmin).toBeDefined();
    expect(typeof item.requiresAdmin).toBe('boolean');

    expect(item.license).toBeDefined();
    expect(typeof item.license).toBe('string');
  });

  test.each(softwareCatalog)('software "$name" ID should be kebab-case', (item) => {
    expect(isKebabCase(item.id)).toBe(true);
  });

  test.each(softwareCatalog)('software "$name" should have valid category (ENUM)', (item) => {
    expect(VALID_SOFTWARE_CATEGORIES).toContain(item.category);
  });

  test.each(softwareCatalog)('software "$name" should have valid license (ENUM)', (item) => {
    expect(VALID_LICENSES).toContain(item.license);
  });

  test.each(softwareCatalog)('software "$name" wingetId should have valid format', (item) => {
    expect(hasWingetFormat(item.wingetId)).toBe(true);
  });

  test.each(softwareCatalog.filter(item => item.iconColor))('software "$name" iconColor should be valid hex', (item) => {
    expect(isHexColor(item.iconColor)).toBe(true);
  });
});

describe('Configurations Validation', () => {
  test('should have configuration items', () => {
    expect(configurations).toBeDefined();
    expect(Array.isArray(configurations)).toBe(true);
    expect(configurations.length).toBeGreaterThan(0);
  });

  test('all configuration IDs should be unique', () => {
    const ids = configurations.map(item => item.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  test.each(configurations)('configuration "$name" should have valid schema', (item) => {
    // Required fields
    expect(item.id).toBeDefined();
    expect(typeof item.id).toBe('string');
    expect(item.id.length).toBeGreaterThan(0);

    expect(item.name).toBeDefined();
    expect(typeof item.name).toBe('string');
    expect(item.name.length).toBeGreaterThan(0);

    expect(item.description).toBeDefined();
    expect(typeof item.description).toBe('string');
    expect(item.description.length).toBeGreaterThan(0);

    expect(item.category).toBeDefined();
    expect(typeof item.category).toBe('string');

    expect(item.recommended).toBeDefined();
    expect(typeof item.recommended).toBe('boolean');

    expect(item.requiresRestart).toBeDefined();
    expect(typeof item.requiresRestart).toBe('boolean');

    expect(item.requiresAdmin).toBeDefined();
    expect(typeof item.requiresAdmin).toBe('boolean');
  });

  test.each(configurations)('configuration "$name" ID should be kebab-case', (item) => {
    expect(isKebabCase(item.id)).toBe(true);
  });

  test.each(configurations)('configuration "$name" should have valid category (ENUM)', (item) => {
    expect(VALID_CONFIG_CATEGORIES).toContain(item.category);
  });

  test.each(configurations)('configuration "$name" should have at least one bat array', (item) => {
    const hasRegistryBat = Array.isArray(item.registryBat) && item.registryBat.length > 0;
    const hasCommandBat = Array.isArray(item.commandBat) && item.commandBat.length > 0;
    expect(hasRegistryBat || hasCommandBat).toBe(true);
  });

  test.each(configurations.filter(item => item.registryBat))('configuration "$name" registryBat should be array of strings', (item) => {
    expect(Array.isArray(item.registryBat)).toBe(true);
    item.registryBat.forEach(cmd => {
      expect(typeof cmd).toBe('string');
    });
  });

  test.each(configurations.filter(item => item.commandBat))('configuration "$name" commandBat should be array of strings', (item) => {
    expect(Array.isArray(item.commandBat)).toBe(true);
    item.commandBat.forEach(cmd => {
      expect(typeof cmd).toBe('string');
    });
  });

  test.each(configurations.filter(item => item.warning))('configuration "$name" warning should be a string', (item) => {
    expect(typeof item.warning).toBe('string');
    expect(item.warning.length).toBeGreaterThan(0);
  });
});
