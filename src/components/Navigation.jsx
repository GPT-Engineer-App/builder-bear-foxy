import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { navItems } from "../nav-items";

const Navigation = () => {
  return (
    <nav className="bg-secondary p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <Button variant="ghost" asChild>
              <Link to={item.to} className="flex items-center space-x-2">
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
