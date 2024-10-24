import React from 'react';
import { Filter } from '../types';
import { Search, Users, Building2 } from 'lucide-react';

interface SearchFiltersProps {
  filters: Filter;
  setFilters: (filters: Filter) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      
      <div className="space-y-4">
        {/* Capacity Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Capacidad Mínima
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="number"
              value={filters.capacity}
              onChange={(e) => setFilters({ ...filters, capacity: e.target.value })}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Número de personas"
            />
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Espacio
          </label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">Todos</option>
            <option value="auditorium">Auditorio</option>
            <option value="conference">Sala de Conferencias</option>
            <option value="laboratory">Laboratorio</option>
            <option value="classroom">Aula</option>
          </select>
        </div>

        {/* Building Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Edificio
          </label>
          <select
            value={filters.building}
            onChange={(e) => setFilters({ ...filters, building: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">Todos</option>
            <option value="Central">Edificio Central</option>
            <option value="Biblioteca">Biblioteca</option>
            <option value="Tecnología">Tecnología</option>
          </select>
        </div>

        {/* Date Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha
          </label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;