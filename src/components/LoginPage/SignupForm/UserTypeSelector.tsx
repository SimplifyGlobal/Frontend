import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserType } from "@/types/auth";

interface UserTypeSelectorProps {
  selectedType: UserType;
  onTypeChange: (type: UserType) => void;
}

export function UserTypeSelector({ selectedType, onTypeChange }: UserTypeSelectorProps) {
  return (
    <Tabs value={selectedType} onValueChange={(value) => onTypeChange(value as UserType)} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="seller">Seller</TabsTrigger>
        <TabsTrigger value="distributor">Distributor</TabsTrigger>
        <TabsTrigger value="customer">Customer</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}