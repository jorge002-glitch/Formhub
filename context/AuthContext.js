// context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const initialSubjects = [
  { id: 'chem', name: 'Química', icon: 'flask' },
  { id: 'phys', name: 'Física', icon: 'atom' },
  { id: 'alg', name: 'Álgebra y Cálculo', icon: 'function' },
  { id: 'stats', name: 'Probabilidad y Estadística', icon: 'chart' },
];

const formulasBySubject = {
  chem: [
    { id: 'f1', name: 'Densidad', formula: 'ρ = m / V', description: 'Relación entre masa y volumen.' },
    { id: 'f2', name: 'Ley de gases ideales', formula: 'PV = nRT', description: 'Relación P, V, T y moles.' },
  ],
  phys: [
    { id: 'f3', name: 'Velocidad', formula: 'v = d / t', description: 'Distancia sobre tiempo.' },
    { id: 'f4', name: 'F = m · a', formula: 'F = m · a', description: 'Segunda ley de Newton.' },
  ],
  alg: [
    { id: 'f5', name: 'Ecuación lineal', formula: 'ax + b = 0', description: 'Despeje de incógnita.' },
    { id: 'f6', name: 'Binomio al cuadrado', formula: '(a+b)^2 = a^2 + 2ab + b^2', description: 'Producto notable.' },
  ],
  stats: [
    { id: 'f7', name: 'Media', formula: 'x̄ = (Σx) / n', description: 'Promedio de datos.' },
    { id: 'f8', name: 'Varianza', formula: 's^2 = Σ(x - x̄)^2 / (n-1)', description: 'Dispersión respecto a la media.' },
  ],
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {name, email}
  const [subjects] = useState(initialSubjects);
  const [savedForms, setSavedForms] = useState([]); // [{id, title, items:[{name, formula, description}]}]

  const login = (email, password) => setUser({ name: 'Usuario Demo', email });
  const logout = () => setUser(null);
  const register = (name, email) => setUser({ name, email });

  const saveCustomForm = (title, items) => {
    const id = `form-${Date.now()}`;
    setSavedForms(prev => [{ id, title, items }, ...prev]);
    return id;
  };
  const updateCustomForm = (id, payload) => {
    setSavedForms(prev => prev.map(f => (f.id === id ? { ...f, ...payload } : f)));
  };
  const deleteCustomForm = (id) => {
    setSavedForms(prev => prev.filter(f => f.id !== id));
  };

  const value = {
    user,
    subjects,
    formulasBySubject,
    savedForms,
    actions: { login, logout, register, saveCustomForm, updateCustomForm, deleteCustomForm },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);