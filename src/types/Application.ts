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

interface CheckerModel {
  username: string;
}

interface PassportModel {
  file: string;
  number: number;
  series: number;
}

export interface PersonModelGlobal {
  id: string;
  middle_name: string;
  last_name: string;
  first_name: string;
  marital_status: string;
  birth_date: Date;
  registration_address: string;
  living_address: string;
  children: boolean;
  passport: PassportModel;
}

interface ApplicationDetailsModel {
  type: string;
  accepted_sum: number;
  max_sum: number;
  accepted_term: number;
  max_term: number;
  monthly_payment: number;
  accepted_rate: number;
  max_rate: number;
}

// interface EmployeeModel {
//   salary: number;
//   employer: string;
//   file: string;
//   experience: number;
//   role: string;
// }
//
// interface AdditionalModel {
//   salary: number;
//   confirmation_file: string;
//   source: string;
// }
//
// interface PDNModel {
//   created_at: Date;
//   rate: number;
// }

interface DepositModel {
  amount: number;
}

interface AnalysisModel {
  non_payment_risk_sum: boolean;
  non_payment_risk_salary: boolean;
  non_payment_risk_salary_additional: boolean;
  risk_debt_upper: boolean;
  risk_down_payment_media: boolean;
}

interface HistoryModel {
  status: string | null;
  microloans: boolean | null;
  often_microloans: boolean | null;
  pay_by_loan: boolean | null;
  late_payment: boolean | null;
  overdue: boolean | null;
}

interface ApplicationDataModel {
  id: string;
  details: ApplicationDetailsModel | null;
  checker: CheckerModel;
  personal: PersonModelGlobal;
  status: string;
  message: string | null;
  deposit: DepositModel | null;
  history: HistoryModel | null;
  analysis: AnalysisModel | null;
}

export interface ApplicationModel {
  application: ApplicationDataModel;
}

export type TApplicationComponent = PersonModelGlobal;
