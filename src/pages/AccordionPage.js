import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 25,
      label: "item 1",
      content: "pokemon",
    },
    {
      id: 26,
      label: "item 2",
      content: "megaman",
    },
    {
      id: 27,
      label: "item 3",
      content: "destiny",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
