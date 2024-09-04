import PaymentMethods from "@/components/PaymentMethods"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Métodos de Pagamento</h1>
      <PaymentMethods />
    </main>
  )
}