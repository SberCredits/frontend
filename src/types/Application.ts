import { ComponentProps } from "react";
import { Status } from "@/ui/Status";

export interface IApplication {
  status: ComponentProps<typeof Status>["variant"];
  created_at: string;
  id: string;
  checker: {
    username: string;
  };
  personal: {
    first_name: string;
    last_name: string;
    middle_name: string;
  };
}
