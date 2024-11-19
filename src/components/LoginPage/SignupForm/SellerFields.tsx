import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface SellerFieldsProps {
  form: any;
}

export function SellerFields({ form }: SellerFieldsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="businessName"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" placeholder="Your Business Name" {...field} />
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="gstin"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="gstin">GSTIN (optional)</Label>
            <Input id="gstin" placeholder="GSTIN Number" {...field} />
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="businessAddress"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="businessAddress">Business Address</Label>
            <Textarea id="businessAddress" placeholder="Enter your business address" {...field} />
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="exportCountry"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="exportCountry">Primary Export Country</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="eu">European Union</SelectItem>
                <SelectItem value="asia">Asia Pacific</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="productCategory"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="productCategory">Product Category</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="textiles">Textiles</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
                <SelectItem value="automotive">Automotive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      />
      
      <FormField
        control={form.control}
        name="yearsInBusiness"
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="yearsInBusiness">Years in Business</Label>
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
        <Label>Compliance Certification (optional)</Label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="text-sm text-gray-500">Click to upload certification</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>
      </div>
    </div>
  );
}