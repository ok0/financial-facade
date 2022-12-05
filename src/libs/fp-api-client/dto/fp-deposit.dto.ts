import {FpCompanyType} from './fp-company.dto';

export enum ProductDepositJoinDenyType {
  UNKNOWN,
  NONE_LIMIT,
  NORMAL,
  SMALL_LIMIT,
}

export class FpDepositDto {
  financialCompanyCode: string;
  companyTypeCode: FpCompanyType;
  companyTypeEng: string;
  financeCompanyKor: string;
  homepageUrl: string;
  callTel?: string;
  productDepositCode: string;
  financialProductCode: string;
  financialProductKor: string;
  disclosureYearMonth: string;
  maturityInterestText: string;
  specialInterestText: string;
  joinDenyType: ProductDepositJoinDenyType;
  joinMemberType: string;
  etcNote: string;
  savingMoneyLimit?: number;
  disclosureStartDate: string;
  disclosureEndDate: string;
  companySubmitDTime: string;
}
