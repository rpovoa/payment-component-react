"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone, Building } from "lucide-react"

export default function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("mbway")

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Método de Pagamento</CardTitle>
        <CardDescription>Escolha como deseja pagar</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          defaultValue="mbway"
          onValueChange={setPaymentMethod}
          className="grid gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mbway" id="mbway" />
            <Label
              htmlFor="mbway"
              className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer w-full"
            >
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                <span>MBWay</span>
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cartao" id="cartao" />
            <Label
              htmlFor="cartao"
              className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer w-full"
            >
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                <span>Cartão de Crédito</span>
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="transferencia" id="transferencia" />
            <Label
              htmlFor="transferencia"
              className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer w-full"
            >
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                <span>Transferência Bancária</span>
              </div>
            </Label>
          </div>
        </RadioGroup>

        {paymentMethod === "mbway" && (
          <div className="mt-4">
            <Label htmlFor="mbway-number" className="block mb-2">Número MBWay</Label>
            <Input id="mbway-number" placeholder="912 345 678" className="w-full" />
          </div>
        )}

        {paymentMethod === "cartao" && (
          <div className="mt-4 space-y-4">
            <div>
              <Label htmlFor="card-number" className="block mb-2">Número do Cartão</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" className="w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry" className="block mb-2">Data de Validade</Label>
                <Input id="expiry" placeholder="MM/AA" className="w-full" />
              </div>
              <div>
                <Label htmlFor="cvv" className="block mb-2">CVV</Label>
                <Input id="cvv" placeholder="123" className="w-full" />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "transferencia" && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">
              Use os seguintes dados para fazer a transferência:
            </p>
            <p className="mb-1">
              <strong>IBAN:</strong> PT50 1234 5678 9012 3456 7890 1
            </p>
            <p>
              <strong>BIC/SWIFT:</strong> ABCDEFGHXXX
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Pagar Agora</Button>
      </CardFooter>
    </Card>
  )
}