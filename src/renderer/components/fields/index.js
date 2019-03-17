// @flow
import AccountField from "./AccountField";
import TokenSelect from "./TokenSelect";
import CryptoCurrencySelect from "./CryptoCurrencySelect";
import AsciiField from "./AsciiField";
import CheckboxField from "./CheckboxField";
import ApplicationField from "./ApplicationField";
import type { DataTypeAscii } from "./AsciiField";
import type { DataTypeCheckbox } from "./CheckboxField";
import type { DataTypeDerivationPath } from "./AccountField";
import type { DataTypeCryptoCurrency } from "./CryptoCurrencySelect";
import type { DataTypeApplication } from "./ApplicationField";

export type DataType =
  | DataTypeAscii
  | DataTypeCheckbox
  | DataTypeDerivationPath
  | DataTypeCryptoCurrency
  | DataTypeApplication;

export default {
  checkbox: CheckboxField,
  token: TokenSelect,
  cryptocurrency: CryptoCurrencySelect,
  derivationPath: AccountField,
  ascii: AsciiField,
  application: ApplicationField
};
