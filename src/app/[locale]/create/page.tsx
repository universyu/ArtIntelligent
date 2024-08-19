import { useTranslations } from "next-intl";
export default function CreatePage() {
  const t = useTranslations('common');
  return (
    <>
       {t('create')}
    </>
  );
}