import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface DistributorFieldsProps {
  form: any;
}

export function DistributorFields({ form }: DistributorFieldsProps) {
  const services = [
    { id: "packaging", label: "Packaging" },
    { id: "warehousing", label: "Warehousing" },
    { id: "customs", label: "Customs Assistance" },
    { id: "logistics", label: "Logistics" },
    { id: "insurance", label: "Insurance" },
  ];

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" placeholder="Your Company Name" {...field} />
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="licenseNumber"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="licenseNumber">License Number</Label>
            <Input id="licenseNumber" placeholder="Distribution License Number" {...field} />
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="headquarters"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="headquarters">Headquarters Location</Label>
            <Textarea id="headquarters" placeholder="Enter your headquarters address" {...field} />
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="serviceRegions"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="serviceRegions">Service Regions</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north-america">North America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="global">Global</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="insuranceCoverage"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="insuranceCoverage">Insurance Coverage</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select coverage type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full Coverage</SelectItem>
                <SelectItem value="partial">Partial Coverage</SelectItem>
                <SelectItem value="none">No Coverage</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      />
      
      <div className="space-y-2">
        <Label>Available Services</Label>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox id={service.id} />
              <Label htmlFor={service.id}>{service.label}</Label>
            </div>
          ))}
        </div>
      </div>
      
      <FormField
        control={form.control}
        name="yearsInOperation"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="yearsInOperation">Years in Operation</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">Less than 1 year</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5+">5+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      />
      
      <div className="space-y-2">
        <Label>Documentation Compliance Certificate</Label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="text-sm text-gray-500">Click to upload documentation</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>
      </div>
    </div>
  );
}