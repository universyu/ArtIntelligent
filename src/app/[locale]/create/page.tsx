import { useTranslations } from "next-intl";
import TextInput from "@/components/TextInput";
import StoryboardedTexts from "@/components/StoryboardedTexts";
import { ChildCenterDiv } from "@/components/common";
export default function CreatePage() {
  const t = useTranslations("sd");
  return (
    <ChildCenterDiv
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TextInput randomTitle={t("random")} buttonText={t("story_board")} />
      <StoryboardedTexts buttonText={t("generate")} />
    </ChildCenterDiv>
  );
}
