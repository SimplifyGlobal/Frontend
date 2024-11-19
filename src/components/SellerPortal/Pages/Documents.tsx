import React from 'react';
import { FileText, Upload, Download, Eye } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Commercial Invoice - ORD001',
      type: 'Invoice',
      status: 'Approved',
      date: '2024-03-10',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Bill of Lading - ORD002',
      type: 'Shipping',
      status: 'Pending',
      date: '2024-03-09',
      size: '1.8 MB'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Documents</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Upload Document
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Recent Documents</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {documents.map((doc) => (
            <div key={doc.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{doc.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500">{doc.type}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{doc.size}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{doc.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  doc.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {doc.status}
                </span>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Eye className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;