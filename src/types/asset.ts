export interface Asset {
  id: string;
  name: string;
  type: 'hardware' | 'software' | 'network' | 'other';
  serialNumber: string;
  manufacturer: string;
  model: string;
  purchaseDate: string;
  warrantyExpiration: string;
  location: string;
  status: 'active' | 'maintenance' | 'retired' | 'storage';
  assignedTo?: string;
  lastMaintenance?: string;
  nextMaintenance?: string;
  notes?: string;
}