import PricingCard from '@/components/PricingCard'
import Image from 'next/image'

export default function Home() {
  const BasicPlanFeatures = [
    { description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, erat quis sagittis consectetur, leo nunc molestie velit, sit amet ultrices leo nisl quis nunc. " },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, erat quis sagittis consectetur, leo nunc molestie velit, sit amet ultrices leo nisl quis nunc. " },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, erat quis sagittis consectetur, leo nunc molestie velit, sit amet ultrices leo nisl quis nunc. " },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, erat quis sagittis consectetur, leo nunc molestie velit, sit amet ultrices leo nisl quis nunc. " },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, erat quis sagittis consectetur, leo nunc molestie velit, sit amet ultrices leo nisl quis nunc. " },
    { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, erat quis sagittis consectetur, leo nunc molestie velit, sit amet ultrices leo nisl quis nunc. " },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
       
        <PricingCard header={"Basic"} description={"for small teams"} price = {"$20"} features={BasicPlanFeatures} className=" bg-gray-400"/>
        <PricingCard header={"Pro"} description={"for medium teams"} price = {"$40"} features={BasicPlanFeatures} className=" bg-red-400"/>
        <PricingCard header={"Enterprise"} description={"for large teams"} price = {"$60"} features={BasicPlanFeatures} className=" bg-blue-400"/>
      </div>
    </main>
  )
}
