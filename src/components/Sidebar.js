import Link from "./Link";

const Sidebar = () => {
  const links = [
    {
      label: "Dropdown",
      path: "/dropdown",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
    {
      label: "Modal",
      path: "/modal",
    },
    {
      label: "Table",
      path: "/table",
    },
    {
      label: "Sortable Table",
      path: "/sortable-table",
    },
    {
      label: "Star-Rating",
      path: "/star-rating",
    },
    {
      label: "Text-Expander",
      path: "/text-expander",
    },
    {
      label: "Stepper",
      path: "/stepper",
    },
    {
      label: "Comments",
      path: "/comments",
    },
  ];
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
