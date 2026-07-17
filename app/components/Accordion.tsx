import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const items = [
  {
    value: "Name",
    trigger: "What is BlueTide?",
    content:
      "BlueTide is a travel and lifestlye blog sharing stories from the shoreline, hidden beaches, slow mornings, and everyday rituals that make life feel a little more like a getway.",
  },
  {
    value: "contetn",
    trigger: "How often do you post new content?",
    content:
      "New stories go up regularly, So check back often or subscribe to get them straight in your inbox",
  },
  {
    value: "blog ",
    trigger: "Can i share you article?",
    content:
      "Defenitely. Reach out through the Contact page with your ideas or email to the official link:- We love hearing from readers ",
  },
]
export default function AccordionCard() {
  return (
    <div className="flex justify-center px-6 pb-10">
      <Card className="w-full max-w-3xl bg-gray-100 border border-gray-200 rounded-2xl">
        <CardHeader className="p-6">
          <CardTitle className="font-serif text-2xl font-bold">
            FAQs
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <Accordion defaultValue={["plans"]} className="font-serif">
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="font-serif text-lg text-gray-700">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base text-gray-500 leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

