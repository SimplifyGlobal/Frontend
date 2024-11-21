import { Truck, CheckCircle, AlertCircle } from 'lucide-react';

export const statusConfig = {
  'in-transit': {
    icon: Truck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    label: 'In Transit',
  },
  'delivered': {
    icon: CheckCircle,
    color: 'text-green-600',
    bg: 'bg-green-50',
    label: 'Delivered',
  },
  'delayed': {
    icon: AlertCircle,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    label: 'Delayed',
  },
};