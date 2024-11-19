import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const [userType, setUserType] = useState('customer')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()
        // Handle form submission (authentication logic)
        console.log('Form submitted', { email, password, userType })
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
            <div className="flex-1 p-8 flex flex-col justify-center">
                <Card className="w-full max-w-md mx-auto">
                    <CardHeader>
                        <h1 className="text-2xl font-bold text-center">Login</h1>
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
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="w-full mt-6">
                                Log In
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-600 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
