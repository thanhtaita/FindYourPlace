"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div>
      <div
        onClick={onClick}
        className="py-3 px-4 hover:bg-neutral-100 transition transition font-semibold"
      >
        {label}
      </div>
    </div>
  );
};

export default MenuItem;
