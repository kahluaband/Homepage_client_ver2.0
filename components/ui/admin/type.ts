interface BasicInputType {
  type: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
}

export interface TextType extends BasicInputType {
  type: 'shortText';
  inputType: 'text' | 'number';
}

export interface IntType extends BasicInputType {
  type: 'integer';
  inputType: 'number';
}

interface DateTimeType extends BasicInputType {
  type: 'datetime';
}

interface DateType extends BasicInputType {
  type: 'datetime';
}

export type InputFieldType = TextType | DateTimeType | DateType;
