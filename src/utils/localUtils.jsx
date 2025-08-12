// utils/localUtils.js

// ================== Local Storage ==================

// Save item in localStorage
export const setLocalItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};

// Get item from localStorage
export const getLocalItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting localStorage key "${key}":`, error);
    return null;
  }
};

// Remove specific item from localStorage
export const removeLocalItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
  }
};

// Clear all localStorage
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};

// Check if localStorage has a key
export const hasLocalItem = (key) => {
  return localStorage.getItem(key) !== null;
};

// ================== Session Storage ==================

// Save item in sessionStorage
export const setSessionItem = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting sessionStorage key "${key}":`, error);
  }
};

// Get item from sessionStorage
export const getSessionItem = (key) => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting sessionStorage key "${key}":`, error);
    return null;
  }
};

// Remove specific item from sessionStorage
export const removeSessionItem = (key) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing sessionStorage key "${key}":`, error);
  }
};

// Clear all sessionStorage
export const clearSessionStorage = () => {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error("Error clearing sessionStorage:", error);
  }
};

// Check if sessionStorage has a key
export const hasSessionItem = (key) => {
  return sessionStorage.getItem(key) !== null;
};
