import { useState } from 'react'
import { Upload } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Textarea } from '../components/ui/textarea'
import { Link } from 'react-router-dom'  

export default function SignupPage() {
    const [userType, setUserType] = useState('customer')
    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // Handle form submission here
        console.log('Form submitted')
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
            
            <div className="flex-1 p-8 flex flex-col justify-center">
                <Card className="w-full max-w-md mx-auto">
                    <CardHeader>
                        <h1 className="text-2xl font-bold text-center">Create an Account</h1>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Tabs value={userType} onValueChange={setUserType} className="w-full mb-6">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="customer">Customer</TabsTrigger>
                                    <TabsTrigger value="seller">Seller</TabsTrigger>
                                    <TabsTrigger value="distributor">Distributor</TabsTrigger>
                                </TabsList>
                            </Tabs>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input id="confirmPassword" type="password" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="mobileNumber">Mobile Number</Label>
                                    <div className="flex">
                                        <Select>
                                            <SelectTrigger className="w-[80px]">
                                                <SelectValue placeholder="+1" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="+1">+1</SelectItem>
                                                <SelectItem value="+44">+44</SelectItem>
                                                <SelectItem value="+91">+91</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input id="mobileNumber" type="tel" className="flex-1 ml-2" required />
                                    </div>
                                </div>
                                {userType === 'seller' && (
                                    <>
                                        <div className="space-y-2">
                                            <Label htmlFor="businessName">Business Name</Label>
                                            <Input id="businessName" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="gstin">GSTIN (optional)</Label>
                                            <Input id="gstin" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="businessAddress">Business Address</Label>
                                            <Textarea id="businessAddress" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="primaryExportCountry">Primary Export Country</Label>
                                            <Select>
                                                <SelectTrigger id="primaryExportCountry">
                                                    <SelectValue placeholder="Select a country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="us">United States</SelectItem>
                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                    <SelectItem value="ca">Canada</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="productCategory">Product Category</Label>
                                            <Select>
                                                <SelectTrigger id="productCategory">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="textiles">Textiles</SelectItem>
                                                    <SelectItem value="electronics">Electronics</SelectItem>
                                                    <SelectItem value="agriculture">Agriculture</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="yearsInBusiness">Years in Business</Label>
                                            <Select>
                                                <SelectTrigger id="yearsInBusiness">
                                                    <SelectValue placeholder="Select years" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-3">1-3 years</SelectItem>
                                                    <SelectItem value="3-5">3-5 years</SelectItem>
                                                    <SelectItem value="5+">5+ years</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="complianceCertUpload">Compliance Certification Upload (optional)</Label>
                                            <div className="flex items-center space-x-2">
                                                <Input id="complianceCertUpload" type="file" className="hidden" onChange={handleFileChange} />
                                                <Button type="button" variant="outline" onClick={() => document.getElementById('complianceCertUpload')?.click()}>
                                                    <Upload className="mr-2 h-4 w-4" /> Upload File
                                                </Button>
                                                {file && <span className="text-sm text-gray-500">{file.name}</span>}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <Button type="submit" className="w-full mt-6">
                                Sign Up
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                Log in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
