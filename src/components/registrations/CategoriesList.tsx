import { Plus, Edit, Tag } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface CategoriesListProps {
  onNavigate: (route: string) => void;
}

export function CategoriesList({ onNavigate }: CategoriesListProps) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="mb-2">Categorias de Serviços</h1>
        <p className="text-gray-600">Organize seus serviços por categorias</p>
      </div>

      {/* Add Category */}
      <Card className="p-6">
        <h3 className="mb-4">Adicionar Nova Categoria</h3>
        <div className="flex gap-3">
          <Input placeholder="Nome da categoria" className="flex-1" />
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 gap-2">
            <Plus className="w-4 h-4" />
            Adicionar
          </Button>
        </div>
      </Card>

      {/* Categories List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'Unhas', services: 3, color: 'pink' },
          { name: 'Cabelo', services: 5, color: 'purple' },
          { name: 'Sobrancelhas', services: 2, color: 'blue' },
          { name: 'Maquiagem', services: 4, color: 'orange' },
          { name: 'Depilação', services: 6, color: 'green' },
          { name: 'Estética', services: 3, color: 'indigo' },
        ].map((category, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center`}>
                  <Tag className={`w-6 h-6 text-${category.color}-600`} />
                </div>
                <div>
                  <h3>{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.services} serviços</p>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
