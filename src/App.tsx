import React, { useState } from 'react';
import { Search, Calendar, Users, Clock, MapPin, Building2 } from 'lucide-react';
import SpaceList from './components/SpaceList';
import SearchFilters from './components/SearchFilters';
import { Space, Filter } from './types';

function App() {
  const [filters, setFilters] = useState<Filter>({
    capacity: '',
    type: 'all',
    building: 'all',
    date: '',
  });

  const spaces: Space[] = [
    {
      id: 1,
      name: 'Auditorio Principal',
      type: 'auditorium',
      capacity: 200,
      building: 'Central',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000',
      description: 'Amplio auditorio con equipo audiovisual completo',
      features: ['Proyector', 'Sistema de sonido', 'Aire acondicionado']
    },
    {
      id: 2,
      name: 'Sala de Conferencias A',
      type: 'conference',
      capacity: 50,
      building: 'Biblioteca',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000',
      description: 'Sala de conferencias moderna y versátil',
      features: ['Pizarra inteligente', 'Videoconferencia', 'Café']
    },
    {
      id: 3,
      name: 'Laboratorio de Computación',
      type: 'laboratory',
      capacity: 30,
      building: 'Tecnología',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1000',
      description: 'Laboratorio equipado con computadoras de última generación',
      features: ['30 PCs', 'Software especializado', 'Internet de alta velocidad']
    },
  ];

  const filteredSpaces = spaces.filter(space => {
    const capacityMatch = !filters.capacity || space.capacity >= parseInt(filters.capacity);
    const typeMatch = filters.type === 'all' || space.type === filters.type;
    const buildingMatch = filters.building === 'all' || space.building === filters.building;
    return capacityMatch && typeMatch && buildingMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8" />
              <h1 className="text-2xl font-bold">UniSpace</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-100">Inicio</a>
              <a href="#" className="hover:text-blue-100">Mis Reservas</a>
              <a href="#" className="hover:text-blue-100">Ayuda</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <SearchFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Spaces List */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Espacios Disponibles</h2>
              <SpaceList spaces={filteredSpaces} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;