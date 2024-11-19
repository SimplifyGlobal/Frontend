import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value = "", onChange, name }, ref) => {
    const countryCodes = [
      { code: "+1", country: "US" },
      { code: "+44", country: "UK" },
      { code: "+91", country: "IN" },
      { code: "+86", country: "CN" },
    ];

    const [code = "", number = ""] = value.split("-");

    return (
      <div className="flex space-x-2">
        <Select
          value={code}
          onValueChange={(newCode) => onChange(`${newCode}-${number}`)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Code" />
          </SelectTrigger>
          <SelectContent>
            {countryCodes.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.code} ({country.country})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          ref={ref}
          type="tel"
          name={name}
          placeholder="Phone number"
          value={number}
          onChange={(e) => onChange(`${code}-${e.target.value}`)}
          className="flex-1"
        />
      </div>
    );
  }
);