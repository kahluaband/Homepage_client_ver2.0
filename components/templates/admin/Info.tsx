import DateTime from '@/components/ui/admin/DateTime';
import Text from '@/components/ui/admin/TextBox';
import { InputFieldType } from '@/components/ui/admin/type';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface AdminInfoProps {
  data: any;
  fieldList: InputFieldType[];
  onChange: (newValue: any, title: string) => void;
}

const InfoList: React.FC<AdminInfoProps> = ({ data, fieldList, onChange }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      {fieldList.map((field: InputFieldType) => {
        const { label, title } = field;
        return (
          <div key={label}>
            <div className="flex flex-col pad:flex-row gap-2">
              <div className="flex items-center w-[160px] h-[30px] pad:h-12">
                {title}
              </div>
              {renderInput(field, data[label], onChange)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

function renderInput(
  field: InputFieldType,
  value: any,
  onChange: (newValue: any, title: string) => void
) {
  const components: { [key: string]: React.ComponentType<any> } = {
    text: Text,
    datetime: DateTime,
  };

  const Component = components[field.type];

  return Component ? (
    <Component field={field} value={value} onChange={onChange} />
  ) : (
    <div>정의되지 않은 타입</div>
  );
}

export default InfoList;
