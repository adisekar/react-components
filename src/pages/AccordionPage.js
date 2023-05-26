import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "234234234",
      label: "Can i use React on a project?",
      content:
        "Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.Yes you can use React.",
    },
    {
      id: "sgfsdf435",
      label: "Can i use Javascript on a project?",
      content:
        "Yes you can use javascript. Yes you can use javascript. Yes you can use javascript",
    },
    {
      id: "5435435435",
      label: "Can i use CSS on a project?",
      content:
        "Yes you can use CSS. Yes you can use CSS. Yes you can use CSS. Yes you can use CSS",
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
