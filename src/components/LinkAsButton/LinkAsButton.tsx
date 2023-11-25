import { Link } from "react-router-dom";
import { ComponentProps, FC } from "react";
import { Button } from "@/ui/Button";

type TLinkAsButtonProps = ComponentProps<typeof Link> &
  ComponentProps<typeof Button>;

const LinkAsButton: FC<TLinkAsButtonProps> = ({
  children,
  reactAddon,
  ...props
}) => {
  return (
    <Link {...props}>
      <Button reactAddon={reactAddon}>{children}</Button>
    </Link>
  );
};

export default LinkAsButton;
